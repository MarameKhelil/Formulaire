import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers'
import React from 'react'
import useForm from './useform'
import validateInfo from './validate'
import './contactform.css'

const ContactFormSignup = ({submitForm}) => {
     const {handleChange,values,handleSubmit,errors} =useForm[submitForm,validateInfo] ;
       return (
    <div classNaame='form-content-right'>
        <form className='form'onSubmit={handleSubmit}>
            <h1>Bienvenue dans LE BON EMPLOI</h1>
            <div className='form-inputs'>
                <label htmlFor='NomUtil' className='form-label'>Nom et Prénom
                </label>
                 <input id='username' type='text' name='username' className='form-input' placeholder='Saisir votre nom' value={toHaveFormValues.username} onChange={handleChange} />
                 {errors.username && <p>{errors.username}</p>};
            </div>
             <div className='form-inputs'>
                <label htmlFor='email' className='form-label'>E-mail
                </label>
                 <input id='email' type='email' name='email' className='form-input' placeholder='Saisir votre email'
                 value={toHaveFormValues.email} onChange={handleChange}/>
                   {errors.email && <p>{errors.email}</p>};
            </div>
             <div className='form-inputs'>
                <label htmlFor='Password' className='form-label'>
                   Saisir votre mot de passe
                </label>
                 <input id= 'password' type='password' name='password' className='form-input' placeholder='Saisir votre mot de passe '
                 value={toHaveFormValues.password} onChange={handleChange}/>
                   {errors.password && <p>{errors.password}</p>};
             </div>
             <div className='form-inputs'>
                <label htmlFor='Password' className='form-label'>
                   Comfirmer votre mot de passe
                </label>
                 <input id= 'password2' type='password' name='password2' className='form-input' placeholder='comfirmer votre mot de passe'
                 value={toHaveFormValues.password2} onChange={handleChange}/>
                   {errors.password2&& <p>{errors.password2}</p>};
             </div>
              <div className='form-inputs'>
                <label htmlFor='text' className='form-label'>
                   Domaine
                </label>
                 <input id= 'domaine' type='domaine' name='
                 domaine' className='form-input' placeholder='votre domaine?'
                 value={toHaveFormValues.domaine} onChange={handleChange}/>
                   {errors.domaine && <p>{errors.domaine}</p>};
             </div>
             <div className='form-inputs'>
                <label htmlFor='text' className='form-label'>
                   Niveau
                </label>
                 <input id= 'niveau' type='text' name='
                 niveau' className='form-input' placeholder='votre domaine?'
                 value={toHaveFormValues.niveau} onChange={handleChange}/>
                   {errors.niveau && <p>{errors.niveau}</p>};
             </div>
             <div className='form-inputs'>
                <label htmlFor='tell' className='form-label'>
                   Numéro de téléphone
                </label>
                 <input id= 'tell' type='tell' name='
                 tell' className='form-input' placeholder='  Saisir votre  Numéro de téléphone'
                 value={toHaveFormValues.tell} onChange={handleChange}/>
                   {errors.tell && <p>{errors.tell}</p>};
             </div>
              <button className='form-input-btn' type='submit'>
                Inscrire
            </button>
        <span className='form-input-login'>
          Vous avez déjà un ompter? Se Connecter <a href='#'>here</a>
        </span>
        </form>
    </div>

  )
}

export default ContactFormSignup