import React, { useState } from 'react';
import SignUpForm from './Singup-form';


const SignUpPage = () => {
  // Define state variables using useState
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSignUp = async ({ fullName, email, password }) => {
    setIsLoading(true);

    try {
      // Send a POST request to the backend server
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      // Update the application state based on the response
      if (response.ok) {
        setMessage('Sign up successful! Redirecting...');
        // Redirect to another page or perform other actions
      } else {
        setMessage('Sign up failed. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }

    setIsLoading(false);
  };

  return (
    <body>
    <div className= "style w-auto text-4x1 h-screen text-center items-center justify-center bg-cyan-950  ">
      <h1 className="text-4x10">Create Your Church Profile</h1>
      {message && <p>{message}</p>}
      <SignUpForm onSubmit={handleSignUp} />
      
    <p>Terms and conditions apply </p>
   
    
    </div>
    </body>
  );
};

export default SignUpPage;