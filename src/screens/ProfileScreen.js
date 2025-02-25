import React from 'react'
import './ProfileScreen.css'
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

function ProfileScreen() {
    const navigate = useNavigate();
    const user = useSelector(selectUser);
  return (
    <div className='profileScreen'>
        <Nav/>
        <div className='profileScreen__body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen__info'>
                <img 
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' 
                alt=''
                />
                <div className='profileScreen__details'>
                    <h2>{user.email}</h2>
                    <div className='profileScreen__plans'>

                        <h3>Plans </h3>
                    <div className='plansScreen__plan'>
                        <div className='plansScreen__info'>
                            <p>Basic plan</p>

                            <p>FREE</p>
                        </div>
                        <button onClick={() =>navigate('/')}>Subscribe</button>
                        
                    </div>

                        
                    <button 
                        onClick={() => auth.signOut()} 
                        className='profileScreen__signOut'
                    >
                        Sign Out
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen