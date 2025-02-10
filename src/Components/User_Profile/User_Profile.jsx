import React from 'react';
import Profile from './Profile/Profile';
import RecentOrders from './RecentOrders/RecentOrders';
import PastOrders from './PastOrders/PastOrders';
import AllReviews from './Review/AllReviews';
import DeleteAccount from './DeleteAccount';
const UserProfile = () => {
    return (
    <>
    <Profile image="Images/UserProfile/Depth 7, Frame 0.svg" name="Catlyn"/>
    <RecentOrders/> 
    <PastOrders/>
    <AllReviews/>
    <DeleteAccount/>
    </>
    );
}

export default UserProfile;
