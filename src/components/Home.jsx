import React, { useContext } from 'react'
import { NameContext } from './NameContext'

export default function Home() {
    const {name} = useContext(NameContext);
  return (
    <div>Home Component : {name}</div>
  )
}
