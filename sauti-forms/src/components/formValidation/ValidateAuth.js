export default function ValidateAuth(values){
    let errors = {};
    //username errors conditionals
    if(!values.username){
        errors.username = 'Required username!';
    }else if (!/^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/i.test(values.username)) {
        errors.username = 'Invalid username';
    }

    //password errors conditionals
    if (!values.password){
        errors.password = 'Required Password!'
    } else if (values.password.length < 6 ) {
        errors.password = 'Password must be at least 6 characters'
    }

    return errors;
}