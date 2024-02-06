import React, { useState } from 'react';

const UpdateRegisterForms = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
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

    
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.username || formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
      alert('Username must be at least 3 characters')
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      alert('Email is required')
    }

    if (!formData.password || formData.password.length < 4 || !/[#@_-]/.test(formData.password)) {
      newErrors.password = 'Password must be at least 4 characters and contain #, @, _, or -';
   alert('Password must be at least 4 characters and contain #, @, _, or -')
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      alert('Password do not match')
    }

    
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      
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
          {errors.username && <p className="error">{errors.username}</p>}
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
          {errors.email && <p className="error">{errors.email}</p>}
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
          {errors.password && <p className="error">{errors.password}</p>}
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
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </label>
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UpdateRegisterForms;
