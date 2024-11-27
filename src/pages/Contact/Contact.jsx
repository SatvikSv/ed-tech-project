import React from 'react'
import { Navbar } from '../../components/Navbar'
import './contact.css';

export const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className='contact-writeup'>
                    <h2>Contact Us</h2>
                    <p>
                        Get in touch with us to learn more about our services <br/> or to inquire about our courses
                    </p>
                    <br/>
                    <p>
                        admin@admin.com
                    </p> <br/>
                    <p> Phone: 1234567890</p>
                    <br/>
                    <p> Customer Support </p>

                </div>

                <div className='contact-form'>
                    <h2>You can reach us at any time</h2>
                    <label>Email</label>
                    <input type='email'></input>
                    <label>Password</label>
                    <input type="password"></input>

                    <button>Sign In</button>
                </div>


            </div>
        </>
    )
}
