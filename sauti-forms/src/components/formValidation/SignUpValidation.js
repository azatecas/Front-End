import { useState, useEffect } from 'react';
import { axiosWithAuth } from "../../axiosAuth";

const SignUpValidation = (initialState, validate, myProps) => {
    const [ user, setUser ] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);

    useEffect(()=>{
        //if isSubmitting is set to true in handleSubmit function it will triger useEffect hook to make servercall
        if (isSubmitting){           
            const submitError =  Object.keys(errors);
            if ( submitError < 1){
                axiosWithAuth()
                    .post("/api/auth/register", user)
                    .then(() => {
                        myProps.history.push("/sign-in");
                    })
                    .catch(err => {
                        console.log(err);
                    })                
                setSubmitting(false);                
            } else {
                //prevents form from being submitted if errors are present
                console.log('bootlegerror', submitError);
                setSubmitting(false)
                }
        }
    },[errors]);

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
        console.log('submit event',errors)
        setErrors(validationErrors);
        setSubmitting(true);         
    } //end of handleSubmit function

    return { handleSubmit, handleChange, handleBlur, isSubmitting, errors, user };
}

export default SignUpValidation;