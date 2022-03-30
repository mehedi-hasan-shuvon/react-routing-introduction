import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setFriends(data));
    }, []);
    return (
        <div>
            <h1>Hello frinds how are you</h1>
            <p><small>parle kisu taka dhar dish..: {friends.length}</small></p>
            {
                friends.map(friend => <Friend friend={friend} key={friend.id}></Friend>)
            }
        </div>
    );
};

export default Friends;