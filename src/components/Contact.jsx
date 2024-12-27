import React, { useContext } from 'react'
import { NameContext } from './NameContext';

export default function Contact() {
 const {name} = useContext(NameContext); 
    return (
    <div>
        <h2>Welcome to the Contact Component </h2>
        Contact Component : {name}
    
    </div>
)
}
