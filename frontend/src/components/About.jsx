import React from 'react'
import axios from 'axios';
axios.get('https://idkbropleasework.azurewebsites.net/')
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error));
const About = () => {
  return (
    <div>We are in: {import.meta.env.MODE}</div>
  )
}

export default About