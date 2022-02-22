import React from 'react';
import '../components/Cta.css';
import whatsapp from '../img/whatsapp.png'


const Cta = () => {
  return (<div>
      <a href="https://api.whatsapp.com/send?phone=2348167817259&text=Hello%21%20Click%20continue%20to%20chat%20with%20Us" class="float" target="_blank" rel="noreferrer">
      <img src={whatsapp} alt="" />
        
</a>
  </div>);
};

export default Cta;
