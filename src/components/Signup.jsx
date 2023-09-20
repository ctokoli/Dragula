import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { NavLink, useNavigate } from "react-router-dom";
import { database } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from 'firebase/auth';


const Signup = () => {
    const navHistory = useNavigate()
    useEffect(() => {
        const protect = onAuthStateChanged(database, (user) => {
    if(user) {
       navHistory('/dashboard')
    } else {
      navHistory('/')
     console.log(user.email)
    }
  })
  protect
}, [navHistory]);
    
    const handleSubmit = (e) => {
        e.preventDefault()
        let email = e.target.email.value;
        let password = e.target.password.value;
        createUserWithEmailAndPassword(database,email,password).then((data) => {
            console.log(data)
            alert("Account Creatd Successfully")
            navHistory('/signin');
        }).catch((error) => {
            alert(error.message)
        })
    }
    return ( 
        <>
         <div className="signin">
            <h2>Sign Up</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="email" name="email" placeholder="Email Address" required />
                <input type="password" name="password" placeholder="Password" required />
                <button className="login">REGISTER</button>
                <NavLink to="/signin" className="link">
                    <p>OR SIGN IN</p>
                </NavLink>
            </form>
         </div>
        </>
     );
}
 
export default Signup;