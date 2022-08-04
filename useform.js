import {useState,useEffect} from 'react' 
import validateInfo from './validate';
const useForm = (callback,validateInfo )=> {
    const[values,setValues]= useState
    ({
        username:'',
        email:'',
        password :'',
        password2:'',
        domaine: '',
        niveau: '',
        tell: '',
    });
    const[errors , setErrors] = useState ({})
    const[isSubmitting,setIsSubmitting]= useState(flase)
    const handleChange = () =>
    {  
        setValues ({
            ...values ,
            [e.target.name]:e.target.value
        })

    };
    const handleSubmit=()=>
    {
        e.preventDefault();
        setErrors(validateInfo(values)) ;
        setIsSubmitting(true);
    };
     useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );
    return(handleChange,values,handleSubmit,errors);
}
export default useForm ;