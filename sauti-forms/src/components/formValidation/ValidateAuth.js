export default function ValidateAuth(user){
    let errors = {};
    //username errors conditionals
    if(!user.username){
        errors.username = 'Required username!';
    }else if (!/^(?=.{5,25}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/i.test(user.username)) {
        errors.username = 'Invalid username';
    }

    //password errors conditionals
    if (!user.password){
        errors.password = 'Required Password!'
    } else if (user.password.length < 6 ) {
        errors.password = 'Password must be at least 6 characters'
    }

    return errors;
}