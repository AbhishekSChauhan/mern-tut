import React from 'react'
import { useContext } from 'react'
import {FaSignInAlt,FaSignOutAlt,FaUser} from 'react-icons/fa'
import { Link,useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/Auth/AuthContext'


const Header = () => {
    const {user,logout}=useContext(AuthContext)
    // const {user}=state===undefined ? {} : state

    const navigate=useNavigate()
    // console.log(user)

    const handleLogout = ()=>{
        logout()
        navigate('/')
    }
    
    return (
        <header className='header'>
            <div className='logo'>
                <Link to={'/'}>GoalSetter</Link>
            </div>
            <ul>
                {user?(
                    <button className='btn' onClick={handleLogout}>
                        <FaSignOutAlt/> Logout
                    </button>
                ):(
                    <>
                    <li>
                        <Link to='/login'>
                            <FaSignInAlt/> Login
                        </Link>
                    </li>
                    <li>
                        <Link to='/register'>
                            <FaUser/> Register
                        </Link>
                    </li>
                    </>
                )}
                
            </ul>        
        </header>
    )
}

export default Header