import React from 'react';
import Card from "./Card";

const RecentOrders = () => {
    const orders = [
        { date: "July 22, 2024", price: "₹15" },
        { date: "July 23, 2024", price: "₹20" },
        { date: "July 24, 2024", price: "₹25" },
        { date: "July 25, 2024", price: "₹30" }
    ];

    return (
        <div className="container mt-5 mb-5 text-center">
            <h1 className="mb-4 text-start">Recent Orders</h1>
            <div className="row g-4 justify-content-center">
                {orders.map((order, index) => (
                    <div 
                        key={index} 
                        className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center"
                    >
                        <Card image="/Images/UserProfile/cardimage.svg" date={order.date} price={order.price} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentOrders;
