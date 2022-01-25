import React from 'react';
import axios from "axios"





function Form() {

  const getData = async () => {
  let response = await axios.get("https://frontend-take-home.fetchrewards.com/form")
    console.log(response)
    
}
getData()

  return <div className="wrapper">

    <div className="form">
    Hello,World
    </div>
    
        </div>;
}

export default Form;
