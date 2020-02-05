export default function SignUpAuth(user){
    let errors = {};
    //username errors conditionals
    if(!user.username){
        errors.username = 'Required username!';
    }else if (!/^(?=.{6,25}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/i.test(user.username)) {
        errors.username = 'Invalid username';
    }

    //email error conditionals
    if(!user.email){
        errors.email = 'Required Email!';
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(user.email)) {
        errors.email = 'Invalid email';
    }

    //password errors conditionals
    if (!user.password){
        errors.password = 'Required Password!'
    } else if (user.password.length < 6 ) {
        errors.password = 'Password must be at least 6 characters'
    }

    return errors;
}