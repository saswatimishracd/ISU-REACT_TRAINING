import React from 'react'

const GetFullYear = () => {
    const date = new Date().getFullYear();
  return (
    <>
    <h1>Current date is: {date}</h1>
    </>
  )
}

export default GetFullYear
