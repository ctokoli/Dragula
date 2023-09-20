import { NavLink } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { database } from "../FirebaseConfig";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navHistory = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        signInWithEmailAndPassword(database,email,password).then((data) => {
            console.log(data)
            navHistory('/dashboard');
        }).catch((error) => {
            alert(error.message)
        })
    }
    return ( 
        <>
         <div className="signin">
            <h2>Sign In</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="email" name="email" placeholder="Email Address" required />
                <input type="password" name="password" placeholder="Password" required />
                <button className="login">SIGN IN</button>
                <NavLink to="/" className="link">
                    <p>OR SIGN UP</p>
                </NavLink>
            </form>
         </div>
        </>
     );
}
 
export default SignIn;