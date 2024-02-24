import React from 'react'
import '../../style/errorMessage.css'
const ErrorMessage = (props) => {
  return (
    <h1 className='err-message'>{props.message}</h1>
    // <h1 className='err-message'>message</h1>
  )
}

export default ErrorMessage;
