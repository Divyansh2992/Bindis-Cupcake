import React, { useState } from 'react';
import "../User_Profile.css";

const Profile = ({ image, name }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="container text-center">
            {/* Profile Section */}
            <div className="row">
                <div className="col-12">
                    <img 
                        src={image} 
                        alt="Profile" 
                        className="img-fluid rounded-circle" 
                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                    <h1>{name}</h1>
                    <button 
                        className='badge rounded-pill edit_profile' 
                        onClick={() => setIsOpen(true)}
                    >
                        Edit Profile
                    </button>
                </div>
            </div>

            {/* Sliding Panel */}
            <div className={`edit-panel ${isOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
                <h2>Edit Profile</h2>
                <form>
                    <label>Name</label>
                    <input type="text" placeholder="Enter name" />

                    <label>Email</label>
                    <input type="email" placeholder="Enter email" />

                    <label>Phone Number</label>
                    <input type="text" placeholder="Enter number" />

                    <label>Date of Birth</label>
                    <input type="date" />

                    <label>Address</label>
                    <textarea placeholder="Enter address"></textarea>

                    <button type="submit" className="save-btn">Save</button>
                </form>
            </div>
        </div>
    );
}

export default Profile;
