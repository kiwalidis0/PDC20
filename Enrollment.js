import React, { useState } from 'react';
import './App.css';

function Enrollment() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');
    const [course, setCourse] = useState('');
    const [enrollTerm, setenrollTerm] = useState('');
    const [emergencyName, setEmergencyName] = useState('');
    const [emergencyNum, setEmergencyNum] = useState('');
    const [comments, setComments] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted:', { fullname, email, birthday, age, gender, number, address, course, enrollTerm, emergencyName, emergencyNum, comments});
        setSubmitted(true);
    };

    return (
        <div className='Enrollment'>
            <header className='App-header'>
                <h1>Enrollment Form</h1>
                <form className='enrollment-form' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='fullname'>Fullname:</label>
                        <input
                            className='form-control'
                            type='text'
                            id='fullname'
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input
                            className='form-control'
                            type='email'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='birthday'>Birthday:</label>
                        <input
                            className='form-control'
                            type='date'
                            id='birthday'
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='age'>Age:</label>
                        <input
                            className='form-control'
                            type='number'
                            id='age'
                            min="1"
                            max="2"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='gender'>Gender:</label>
                        <select 
                        id="gender" 
                        name="gender"  
                        className='form-control'
                        value={gender}
                        onChange={(e) => setGender
                        (e.target.value)}
                        required>
                            <option value="" disabled selected>Select an option</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            <option value="prefer-not-to-say">Prefer not to say</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor='number'>Phone number:</label>
                        <input
                            className='form-control'
                            type='number'
                            id='number'
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='address'>Address:</label>
                        <input
                            className='form-control'
                            type='text'
                            id='address'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='course'>Course:</label>
                        <select 
                        id="course" 
                        name="course"  
                        className='form-control'
                        value={course}
                        onChange={(e) => setCourse
                        (e.target.value)}
                        required>
                            <option value="" disabled selected>Select an option</option>
                            <option value="male">BSIT</option>
                            <option value="female">BSCS</option>
                            <option value="other">BMMA</option>
                            <option value="prefer-not-to-say">Other</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor='enrollTerm'>Enrollment Term:</label>
                        <input
                            className='form-control'
                            type='date'
                            id='enrollTerm'
                            value={enrollTerm}
                            onChange={(e) => setenrollTerm(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div>
                        <label htmlFor='emergencyName'>Emergency Contact Name:</label>
                        <input
                            className='form-control'
                            type='text'
                            id='emergencyName'
                            value={emergencyName}
                            onChange={(e) => setEmergencyName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='emergencyNum'>Emergency Phone number:</label>
                        <input
                            className='form-control'
                            type='emergencyNum'
                            id='number'
                            value={emergencyNum}
                            onChange={(e) => setEmergencyNum(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='comments'>Additional comments:</label>
                        <textarea className='form-control'
                            id='comments'
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                            rows="4"          // Adjust the number of rows for the desired height
                            cols="50"         // Adjust the number of columns for the desired width
                            placeholder="Enter your comments here"
                            required 
                        />
                    </div>
                    <br></br>
                    <button type='submit' className='form-control' >Register</button>
                </form>
            </header>
        </div>
    );
}

export default Enrollment;
