// // import React, { useState } from 'react';
// // import styles from './SignUpA.module.css';

// // const SignUp = () => {
// //   const [userData, setUserData] = useState({
// //     username: '',
// //     email: '',
// //     password: '',
// //     DOB : ''
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setUserData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log('User Data:', userData);
// //   };

// //   return (
// //     <div className={styles.container}>
// //       <h2>Sign Up</h2>
// //       <form onSubmit={handleSubmit}>
// //         <label>
// //           Username:
// //           <input
// //             type="text"
// //             name="username"
// //             value={userData.username}
// //             onInput={handleChange}
// //           />
// //         </label>
// //         <br />
// //         <label>
// //           Email:
// //           <input
// //             type="email"
// //             name="email"
// //             value={userData.email}
// //             onInput={handleChange}
// //           />
// //         </label>
// //         <br />
// //         <label>
// //           Password:
// //           <input
// //             type="password"
// //             name="password"
// //             value={userData.password}
// //             onChange={handleChange}
// //           />
// //         </label>
// //         <br />
// //         <label>
// //           DOB:
// //           <input
// //           type="DOB"
// //           name="DOB"
// //           value={userData.DOB}
// //           onInput={handleChange}
// //           />
// //           <br />
// //         </label>
// //         <button type="submit">Sign Up</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default SignUp;

// import React, { useState } from 'react';
// import styles from './SignUpA.module.css';

// const SignUp = () => {
//   const [userData, setUserData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     DOB: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const requiredFields = ['username', 'email', 'password', 'DOB'];
//     const isFormIncomplete = requiredFields.some((field) => !userData[field]);

//     if (isFormIncomplete) {
//       alert('Please complete the form');
//     } else {

//       alert('Form is submitted');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input
//             type="text"
//             name="username"
//             value={userData.username}
//             onInput={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={userData.email}
//             onInput={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={userData.password}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           DOB:
//           <input
//             type="DOB"
//             name="DOB"
//             value={userData.DOB}
//             onInput={handleChange}
//           />
//           <br />
//         </label>
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import styles from "./SignUpA.module.css";

const SignUp = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    DOB: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormIncomplete) {
        alert('Please complete the form');
      } else {
  
        alert('Form is submitted');
      }
    const errors = {};

    if (!userData.username) {
      errors.username = "Username is required";
    } else if (userData.username.length < 3) {
      errors.username = "Username must be at least 3 characters";
    }

    if (!userData.email) {
      errors.email = "Email is required";
    }

    if (!userData.password) {
      errors.password = "Password is required";
    } else if (userData.password.length < 4) {
      errors.password = "Password must be at least 4 characters";
    } else if (!/[#@_-]/.test(userData.password)) {
      errors.password = "Password must contain #, @, _, or -";
    }

    if (!userData.DOB) {
      errors.DOB = "Date of Birth is required";
    }

    if (Object.keys(errors).length === 0) {
      alert("Form is submitted");
    } else {
      alert("Please fix the form errors:\n" + Object.values(errors).join("\n"));
    }
  };

  return (
    <div className={styles.container}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={userData.username}
            onInput={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onInput={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          DOB:
          <input
            type="text"
            name="DOB"
            value={userData.DOB}
            onInput={handleChange}
          />
          <br />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
