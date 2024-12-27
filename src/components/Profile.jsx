import React, { useContext } from 'react'
import { NameContext } from './NameContext'

export default function Profile() {
    const {name} = useContext(NameContext);
  return (
    <div>Profile Component : {name} </div>
  )
}
