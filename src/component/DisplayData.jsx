import React from 'react'
import { useSelector } from 'react-redux'

export const DisplayData = () => {
  const mm = useSelector((state) => state.feedBack);
  console.log("DisplayData- ", mm.name);


  return (
    <>
      <div>DisplayData</div>
      <div>feedbackState{mm.name}</div>
    </>
  )
}
