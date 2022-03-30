import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams();

    const [friend, setFriend] = useState({});

    useEffect(() => {
        const url = `products.json/${friendId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
        console.log(friend);
    }, []);
    return (
        <div>
            <h2>This is details about dosto: {friendId}</h2>

        </div>
    );
};

export default FriendDetail;