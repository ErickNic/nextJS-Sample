"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from './page.module.css';
import { MyProvider } from '../context/context';
import axios from 'axios';
const loggedUser = {
  "email":"erick.prueba2@gmail.com",
  "password":"xd"
}

export default function Home() {
  const [useData,setUserData] = useState();
  useEffect(()=>{
    axios.get('https://lmao-6wqv.onrender.com/user/login',loggedUser).then(response=>setUserData(response.data))
  },[]);
  useEffect(()=>{
    console.log(useData)
  },[useData]);
  return (
      <main className={styles.main}>
        <h1>SDJ</h1>
      </main>
  )
}
