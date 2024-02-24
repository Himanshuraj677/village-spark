from flask import Flask, request, jsonify
import google.generativeai as genai
from geopy.geocoders import GoogleV3
from flask_cors import CORS
import requests, json
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from PIL import Image
from pathlib import Path
from dotenv import load_dotenv
import os

app = Flask(__name__)
CORS(app, origins='*')
load_dotenv()

generation_config = {
    "temperature": 0.9,
    "top_p": 1,
    "top_k": 1,
    "max_output_tokens": 2048,
}

safety_settings = [
    {
        "category": "HARM_CATEGORY_HARASSMENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_HATE_SPEECH",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
]

essential_business_types = [
    ["grocery_or_supermarket", "grocery", "supermarket"],
    ["pharmacy","health","medical"],
    ["bakery","cake shop"],
    ["hardware_store", "hardware shop"],
    ["convenience_store", "convenience shop"],
    ["laundry","wash cloth"],
    ["restaurant","restaurant","food"],
    ["barber", "hair cutting shop"],
    ["pet_store"],
    ["doctor", "medical clinic"],
    ["gym", "fitness center"],
    ["book_store", "bookshop"],
    ["market", "local market"],
    ["electronics_store", "electronics shop"],
    ["library"],
    ["bank","atm"],
    ["post_office", "post office"],
    ["school"],
    ["car_repair", "auto repair shop"],
    ["florist","flower shop"]
]

business_data = {}


API_KEY = os.getenv('API_KEY')
GEO_API_KEY = os.getenv('GEO_API_KEY')


API_KEY = "AIzaSyB2UNj81tQ79Pypkoi7OUhBJG_fFSnBr6A"
geo_api_key="AIzaSyDHbXCWlajy5RXKgB9rvULtI6Kqy2CVJfE"

genai.configure(api_key = API_KEY)
model = genai.GenerativeModel(model_name="gemini-1.0-pro", generation_config=generation_config, safety_settings=safety_settings)

model1 = genai.configure(api_key=API_KEY)
model1 = genai.GenerativeModel('gemini-pro-vision')


# Load the machine learning model for crop recommendation
model2 = RandomForestClassifier(random_state=42)
script_path = Path(__file__).resolve()
script_dir = script_path.parent
csv_file_path = script_dir.joinpath('Crop_recommendation.csv')
df = pd.read_csv(csv_file_path)
X = df.drop(columns=["label"])
y = df["label"]
model2.fit(X, y)


def get_coordinates_from_input(input_value):
    geolocator = GoogleV3(api_key=geo_api_key)  
    location = geolocator.geocode(input_value)
    
    if location:
        business_data["area"] = f"{location}"
        business_data["coord"] = f"{location.latitude},{location.longitude}"
        return f"{location.latitude},{location.longitude}"
    else:
        return None
    

@app.route('/generate_content', methods=['POST'])
def generate_content():
    # Get the request data
    request_data = request.json

    # Extract the input variables
    space = request_data.get('space')
    skill = request_data.get('skill')
    inventory = request_data.get('inventory')
    investment = request_data.get('investment')

    # Perform the content generation
    response = model.generate_content(f"You have to tell which business can I do, if I have all this: space-{space} sqkm, skill-{skill}, investment-{investment}, inventory={inventory}")

    # Return the response
    return jsonify({'content': response.text})



@app.route('/get_business', methods=['POST'])
def get_business ():
    user_input = request.json.get('pincode')
    if user_input.isdigit():  # Assuming pincode is numeric
        location = get_coordinates_from_input(user_input)
    else:
        location = get_coordinates_from_input(user_input)

    if location:
        # Search query
        query = "business"

        # Initialize a set to keep track of unique business names
        unique_business_names = set()


        info_table_data = []

        # Perform searches for each range of 100 meters
        for lower_limit in range(0, 1000, 100):
            upper_limit = min(lower_limit + 100, 1000)
            
            # Construct the URL
            url = f"https://maps.googleapis.com/maps/api/place/nearbysearch/json?location={location}&radius={upper_limit}&type={query}&key={geo_api_key}"

            # Send the request
            response = requests.get(url)

            # Parse the JSON response
            data = json.loads(response.text)

            # Populate the table data for business information
            for result in data.get("results", []):
                business_name = result["name"]

                # Check if the business name is unique for this iteration
                if business_name not in unique_business_names:
                    business_types = result.get("types", [])
                    info_table_data.append([business_name, business_types])
                    unique_business_names.add(business_name)

        business_data["business"] = info_table_data

        # Extract available business types from the data
        available_business_types = set()
        for result in data.get("results", []):
            types = result.get("types", [])
            available_business_types.update(types)
        
        # essential_table_headers = ["Essential Business Type", "Available"]
        essential_table_data = []

        for essential_types in essential_business_types:
            is_available = any(any(word.lower() in essential_type.lower() for essential_type in essential_types) for word in available_business_types)
            essential_table_data.append([essential_types[0], "Yes" if is_available else "No"])

        business_data["availability"] = essential_table_data    
    else:
        business_data["error"] = "Invalid input or location not found."
    return jsonify(business_data)



@app.route('/predict-crop', methods=['POST'])
def predict_crop():
    soil_data = request.json  # Assuming the frontend sends JSON data
    new_data = [[soil_data['N'], soil_data['P'], soil_data['K'], soil_data['temperature'], soil_data['humidity'], soil_data['ph'], soil_data['rainfall']]]
    predicted_crop = model2.predict(new_data).tolist()  # Convert ndarray to Python list
    return jsonify({"predicted_crop": predicted_crop})


@app.route('/find_weed', methods=['POST'])
def find_weed():
    image = request.files['image']
    image = Image.open(image)
    prompt = "identify it and how to prevent from this plant  weed or disease"
    response = model1.generate_content([prompt, image],generation_config=generation_config)
    return jsonify({"response": response.text})
        
       
if __name__ == '__main__':
    app.run(debug=True)
