import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, price, id } = props.friend;
    const navigate = useNavigate();
    const showFriendDetail = () => {
        const path = `/friend/${id}`;
        navigate(path);
    };
    return (
        <div>
            <h2>Name:{name}</h2>
            <button onClick={showFriendDetail}>price:{price} id:{id}</button>
        </div>
    );
};

export default Friend;