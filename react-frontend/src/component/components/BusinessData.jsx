import React from 'react';
import "../../style/business-data.css";

const BusinessData = ({ data }) => {
  const renderBusinessTypes = () => {
    return data.availability.map(([type, available]) => (
      <tr key={type}>
        <td>{type}</td>
        <td>{available}</td>
      </tr>
    ));
  };

  const renderBusinessNames = () => {
    return data.business.map(([name, types]) => (
      <tr key={name}>
        <td>{name}</td>
        <td>{types.join(', ')}</td>
      </tr>
    ));
  };

  return (
    <div className="business-data">
      <h3>Area: {data.area}</h3>
      <table>
        <thead>
          <tr>
            <th>Business Type</th>
            <th>Available</th>
          </tr>
        </thead>
        <tbody>{renderBusinessTypes()}</tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Business Name</th>
            <th>Types</th>
          </tr>
        </thead>
        <tbody>{renderBusinessNames()}</tbody>
      </table>
      <p>Coordinates: {data.coord}</p>
    </div>
  );
};

export default BusinessData;
