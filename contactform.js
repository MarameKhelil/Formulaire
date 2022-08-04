import React ,{useState}from 'react'
import ContactFormSignup from './contactformsignup'
import ContactFormSucces from './contactformsuccess'
import './contactform.css'

const contactform = () => {
   const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    
      <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        {!isSubmitted ? (
          <ContactFormSignup submitForm={submitForm} />
        ) : (
          <ContactFormSucces />
        )}
        </div>
      
      
    </>
  )
}

export default contactform
