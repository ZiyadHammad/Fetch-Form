import React, { useState} from 'react';
import axios from "axios"





function Form() {

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    occupation: "",
    state: ""
  })

  const [submitted, setSubmitted] = useState(false)
  
  // const getData = async () => {
  // let response = await axios.get("https://frontend-take-home.fetchrewards.com/form")
  //   let data = response.data
  //   console.log(data)
    
  // }
  // getData()

  const handleINameChange = (event) => {
    setInput({...input, name: event.target.value})
  }
  const handleIEmailChange = (event) => {
    setInput({...input, email: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }


  return <div className="form-container">

    <form className="register-form" onSubmit={handleSubmit}>
      {submitted ? <div className="succes-message">Success! Thank you for registering</div> : null}
      <input
        onChange={handleINameChange}
        className='form-field'
        value={input.name}
        placeholder='Full Name'
        name="name" />
      {submitted && !input.name ? <span>Please enter a name</span> : null}
       <input
        onChange={handleIEmailChange}
        className='form-field'
        value={input.email}
        placeholder='Email Address'
        name="name" />
      {submitted && !input.email ? <span>Please enter a email address</span> : null}
       <input
        onChange={handleIEmailChange}
        className='form-field'
        value={input.email}
        placeholder='Password'
        name="name" />
      {submitted && !input.password ? <span>Please enter a password</span> : null}
         <input
        onChange={handleIEmailChange}
        className='form-field'
        value={input.email}
        placeholder='Occupation'
        name="name" />
      {submitted && !input.occupation ? <span>Please enter a occupation</span> : null}
         <input
        onChange={handleIEmailChange}
        className='form-field'
        value={input.email}
        placeholder='state'
        name="name" />
      {submitted && !input.state ? <span>Please enter a state</span> : null}
        
      <button
        className='form-field'
        type="submit">Register</button>
      
    </form>
    
        </div>;
}

export default Form;
