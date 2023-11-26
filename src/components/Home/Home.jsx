import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; 


function Home() {
    const history = useHistory();
    const handleClick = (event) => {
        history.push('/feeling');
    }

    return (
        <button onClick={handleClick}>Enter feedback</button>
    )
}

export default Home;