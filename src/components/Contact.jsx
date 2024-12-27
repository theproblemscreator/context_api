import React, { useContext } from 'react'
import { NameContext } from './NameContext';

export default function Contact() {
 const {name} = useContext(NameContext); 
    return (
    <div>Contact Component : {name}</div>
)
}
