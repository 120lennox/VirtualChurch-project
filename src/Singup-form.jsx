//importing react and react hoooks.
import React, { useState, useRef } from 'react';

/*signUpForm component definition with onSubmit as argument
 which will be called when form is submitted*/
const SignUpForm = ({ onSubmit }) => {
  /* Definition of state variables which will store user input
   using the useState hook*/
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

//Function to handle user input change.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'fullName':
        setFullName(value);
        break;
      case 'email': 
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
        
      default:
        break;
    }
  };
  // Creation of  a reference to the password input field
  const passwordRef = useRef();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // validating user input, making sure the user inputs the right format on feilds.
    const newErrors = {};
    const fullNameRegex = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
    if (!fullName) newErrors.fullName = 'Full name is required.';
    else if (!fullNameRegex.test(fullName))newErrors.fullName ='First and second name should start with a capital letter';
    if (!email) newErrors.email = 'Email is required.';
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) newErrors.email = 'Invalid email format.';
    if (!password) newErrors.password = 'Password is required.';
    else if(password.length < 8) newErrors.password = 'password must be atleast 8 characters long';
    
  
    // If there are errors, update the state with the new errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    }else{
      // if there are no errors, cll the parent component function.
      onSubmit({ fullName, email, password });
    }
  };

  return (
     
    <div className=" Container flex flex-col mb-5 px-30 bg-cyan-800  ">
        <form onSubmit={handleSubmit}>
               <hearder>
        <h2>Connect to VCMS</h2>
        <h3>Create Profile</h3>
      </hearder>  
     
     <div className="input_space">
    <p>
     <label htmlFor="FullName">Full Name: </label>
      <input
        type="text"
        id="fullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      /></p>

      {errors.fullName && <p class="error">{errors.fullName}</p>}

     <p> <label htmlFor="Email">Email: </label>
      <input 
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /></p>
      {errors.email && <p class="error">{errors.email}</p>}

      <p><label htmlFor="Password">Password: </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        ref={passwordRef}
      /></p>
      {errors.password && <p class="error">{errors.password}</p>}

      
    
     <p> <button type="submit">Create Profile</button></p>
     <p>or</p>
     <a href="#"> <button>Continue with Google</button></a>
     </div>
<footer>
<p>Already have an account? <a href="#">Sign In</a></p>
</footer> 
   
    </form>
    
    </div>
  );
};

export default SignUpForm;
         
            