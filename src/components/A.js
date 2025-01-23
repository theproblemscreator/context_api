import React, { useContext } from 'react'
import UserContext from './UserContext'

export default function A() {
    const UserData = useContext(UserContext);
    const { name, city } = UserData;
    console.log(name);
    return (
        <>
            <p>Name : {name}</p>
            <p>City : {city}</p>

            <h1>Welcome to the A Components</h1>
        </>
    )
}
