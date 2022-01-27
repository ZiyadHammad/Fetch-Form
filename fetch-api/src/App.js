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
  
  const {name, email, password} = input

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(URL)
      setOccupation(response.data.occupations)
      setState(response.data.states)
      }
      getData()
  }, [])
 
  const handleSubmit = async(e) => {
    e.preventDefault()
    if (name && email && password && occupation && state) {
      setValid(true)
    const response = await axios.post(URL, {
      name: name,
      email: email,
      password: password,
      occupation: occupation,
      state: state
    })
    console.log(response);
    }
    setSubmitted(true)
    

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  

  return <div className="form-container">

    <form className="register-form" onSubmit={handleSubmit}>
      {submitted && valid ? <div className="success-message">Success! Thank you for registering</div> : null}
      {submitted && !valid ? <div className="error-message">Missing Required Fields!</div> : null}
      <input
        onChange={handleChange}
        className='form-field'
        value={name}
        type="text"
        placeholder='Full Name'
        name="name" />
        
      {submitted && !name ? <span>Please enter a name</span> : null}
       <input
        onChange={handleChange}
        className='form-field'
        value={email}
        type="email"
        placeholder='Email Address'
        name="email" />
      {submitted && !email ? <span>Please enter a email address</span> : null}
       <input
        onChange={handleChange}
        className='form-field'
        value={password}
        type="password"
        placeholder='Password'
        name="password" />
      {submitted && !password ? <span>Please enter a password</span> : null}
      <select className="form-field">
        <option disabled={true} value="occupation">-- Select Occupation --</option>
        {
          occupation.map((occupation, i) =>
            <option key={i} value="occupation">{occupation}</option>
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
