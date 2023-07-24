'use client'
import { useState } from "react"
import Image from "next/image"
import NatureImg from '../../public/assets/po.jpeg'


export default function Home() {
  const [count, setCount] = useState(0)

  const increament = () => {
    setCount(count + 1)
  }
  const decreament = () => {
    setCount(count - 1)
  }


  return (
    <>
      <h2>home page</h2>

      <Image src={NatureImg} width={300} height={200} alt="pogoda klasnaya"></Image> 


      <button onClick={decreament}>-</button>
      <span>{count}</span>
      <button onClick={increament}>+</button>
    </>
  )
}
