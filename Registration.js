import React, {useState} from 'react';

import './App.css';

function Registration(){
    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[submitted, setSubmitted] = useState(false);

    return(
        <div className='Registration'>
            <header className='App-header'></header>
            <h1>Registration Form</h1>
            <form className='registration-form'></form>
        </div>
    );
}

export default Registration;