import { useState, useEffect } from 'react';
import { axiosWithAuth } from "../../axiosAuth";

function FormValidation(initialState, validate, myProps) {

    const [user, setUser] = useState(initialState);
    //checks to see if errors occur 
    const [errors, setErrors] = useState({})
    const [isSubmitting, setSubmitting] = useState(false)

    useEffect(() => {
        if (isSubmitting){
            const noErrors = Object.keys(errors).length === 0;
            if(noErrors){
                axiosWithAuth()
                .post("/api/auth/login", user)
                .then(res => {                
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("id", res.data.user.id);
                    myProps.history.push("/dashboard");
                })
                .catch(err => {
                    console.log('Invalid Sign In',err);
                })
                setSubmitting(false);
            } else {
                setSubmitting(false);
            }
        }        
    }, [errors]);

    const handleChange = e => {
        setUser({
             ...user,
            [e.target.name]: e.target.value
        })       
    }

    const handleBlur = () => {
        const validationErrors = validate(user);
        setErrors(validationErrors);   
    }

    const handleSubmit = e => {
        e.preventDefault();
        const validationErrors = validate(user);
        setErrors(validationErrors);  
        setSubmitting(true);         
    } //end of handleSubmit function

    return { handleChange, user, handleSubmit, handleBlur, errors, isSubmitting }
}
export default FormValidation;