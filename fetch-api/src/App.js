import React, { useState, useEffect} from 'react';
import axios from "axios"


let URL = "https://frontend-take-home.fetchrewards.com/form"


function App() {

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: ""
  })

  const [submitted, setSubmitted] = useState(false)
  const [valid, setValid] = useState(false)
  const [occupation, setOccupation] = useState([])
  const [state, setState] = useState([])
  
  

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(URL)
      setOccupation(response.data.occupations)
      setState(response.data.states)
      // console.log(response.data.states)
      }
      getData()
  }, [])
 

  const handleINameChange = (event) => {
    setInput({...input, name: event.target.value})
  }
  const handleIEmailChange = (event) => {
    setInput({...input, email: event.target.value})
  }
  const handlePasswordChange = (event) => {
    setInput({...input, password: event.target.value})
  }

 

  const handleSubmit = async(e) => {
    e.preventDefault()
    const response = await axios.post(URL, {
      name: input.name,
      email: input.email,
      password: input.password,
      occupation: occupation,
      state: state
    })
    if (input.name && input.email && input.password && occupation && state) {
      setValid(true)
    }
    setSubmitted(true)
    console.log(response);

  }


  

  return <div className="form-container">

    <form className="register-form" onSubmit={handleSubmit}>
      {submitted && valid ? <div className="succes-message">Success! Thank you for registering</div> : null}
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
        onChange={handlePasswordChange}
        className='form-field'
        value={input.password}
        placeholder='Password'
        name="name" />
      {submitted && !input.password ? <span>Please enter a password</span> : null}
      <select className="form-field">
        <option disabled={true} value="occupation">-- Select Occupation --</option>
        {
          occupation.map((occupation, i) =>
            <option key={i} value={occupation}>{occupation}</option>
            )
        }
       
        
         </select>
      {submitted && !occupation ? <span>Please enter a occupation</span> : null}

      <select className="form-field">
        <option disabled={true} value="state" >-- Select State --</option>
        {
          state.map((state, index) =>
            <option key={index} value={state.abbreviation}>{state.abbreviation}</option>
            )
        }
         </select>
      {submitted && !state ? <span>Please enter a state</span> : null}
        
      <button
        className='form-field'
        type="submit">Register</button>
      
    </form>
    
        </div>;
}

export default App;
