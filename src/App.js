import React, { useState } from 'react';
import SignUpForm from './Singup-form';
import './signup.css';

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
    <div className= "style">
      <h3>Create Your Profile</h3>
      {message && <p>{message}</p>}
      <SignUpForm onSubmit={handleSignUp} />
      {/* Implement the "Continue with Google" button later */}
      
    
    <p2> </p2>
    
    </div>
    </body>
  );
};

export default SignUpPage;