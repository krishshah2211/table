import React, { useState } from 'react';

const UpdateRegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!formData.username || formData.username.length < 3) {
      alert('Username must be at least 3 characters');
    } else if (!formData.email) {
      alert('Email is required');
    } else if (!formData.password || formData.password.length < 4 || !/[#@_-]/.test(formData.password)) {
      alert('Password must be at least 4 characters and contain #, @, _, or -');
    } else if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
    }
    else {

      console.log('Form Data:', formData);

      
      alert('Form is submitted');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </label>
        <br />

        
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UpdateRegisterForm;

  
  