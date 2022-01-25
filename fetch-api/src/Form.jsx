import React, { useState} from 'react';
import axios from "axios"





function Form() {

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    occupation: "",
    state: ""
  })
  
  const getData = async () => {
  let response = await axios.get("https://frontend-take-home.fetchrewards.com/form")
    let data = response.data
    console.log(data)
    
}
getData()

  return <div className="form-container">

    <form className="register-form">
      {/* <input
        className='form-field'
        value={values.name} */}
      
      
    </form>
    
        </div>;
}

export default Form;
