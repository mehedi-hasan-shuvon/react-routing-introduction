import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = (props) => {
    const { friendId } = useParams();

    console.log(props.friend);



    // const solo = friend.find(item => item.id === friendId);
    // console.log(solo);
    return (
        <div>
            <h2>This is details about dosto: {friendId}</h2>



        </div>
    );
};

export default FriendDetail;