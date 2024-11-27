import React from 'react'
import { Navbar } from '../../components/Navbar'
import './myclasses.css'

export const MyClasses = () => {
    return (
        <>
            <Navbar />
            <div className='profile-container'>
                <div className='profile-header'>
                    <h1>Shizan's Profile</h1>
                    <p>You are currently on the bronze plan</p>
                </div>
                <div className='profile-details'>
                    <div className='profile-tier'>
                        <h2>Subscription</h2>

                        <p>Bronze</p>
                        <h2>Bronze Plan</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit animi amet similique at, praesentium aspernatur temporibus quam placeat distinctio accusantium in magnam illo ducimus nesciunt natus, veritatis nihil soluta mollitia nostrum sapiente!</p>

                        <a href=''>Manage Plan</a>

                    </div>
                    <div className='profile-details-img'>
                        <img src='https://placehold.co/600x400' />
                    </div>

                </div>
            </div>

            <div className='payment-details'>
                <div className='payment-list'>
                    <h1>Payment History</h1>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th className="table-row">Date</th>
                                    <th className="table-row">Description</th>
                                    <th className="table-row">Amount</th>
                                    <th className="table-row">Receipt</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="">July 19, 2023</td>
                                    <td className="">Payment For Bronze Pan</td>
                                    <td className="">$10</td>
                                    <td className=""><a href=''>Download</a></td>
                                </tr>
                                <tr>
                                    <td className="">June 19, 2023</td>
                                    <td className="">Payment For Bronze Plan</td>
                                    <td className="">$10</td>
                                    <td className="">Download</td>
                                </tr>
                                <tr>
                                    <td className="">May 19, 2023</td>
                                    <td className="">Payment For Bronze Plan</td>
                                    <td className="">$10</td>
                                    <td className="">Download</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className='notification'>
                <div className='notification-list'>
                    <h1>Notifications & Announcements</h1>
                    <div className='notification-item'>
                        <div className='notification-icon'>
                            <img src='https://placehold.co/60x40' />
                        </div>
                        <div className='notification-content'>
                            <h3>Notification Title</h3>
                            <p>Notification Description</p>
                        </div>
                        
                    </div>
                    <div className='notification-item'>
                        <div className='notification-icon'>
                            <img src='https://placehold.co/60x40' />
                        </div>
                        <div className='notification-content'>
                            <h3>Notification Title</h3>
                            <p>Notification Description</p>
                        </div>
                        
                    </div>
                    <div className='notification-item'>
                        <div className='notification-icon'>
                            <img src='https://placehold.co/60x40' />
                        </div>
                        <div className='notification-content'>
                            <h3>Notification Title</h3>
                            <p>Notification Description</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
