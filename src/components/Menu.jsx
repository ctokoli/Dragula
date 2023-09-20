/* eslint-disable react/prop-types */
import { signOut } from 'firebase/auth'
import { database } from '../FirebaseConfig';
import { SiDragonframe } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';


const MenuBar = ({user}) => {
    const navHistory = useNavigate()
    const handleSignOut = () => {
        signOut(database).then((val => {
            console.log(val)
            navHistory('/signin')
        }))
    }
    return ( 
        <>
            <section className="menu-section">
                <div className="menu">
                    <div className='logo'>
                        <SiDragonframe />
                        <h3>Dragula</h3>
                    </div>
                    <div className='sign-out'>
                        <h4>{user?.email}</h4>
                        <button onClick={handleSignOut}>Sign Out</button>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default MenuBar;