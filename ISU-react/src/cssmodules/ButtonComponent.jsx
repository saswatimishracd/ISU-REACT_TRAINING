import React from 'react'
import styles from './Button.module.css'
const ButtonComponent = () => {
  return (
    <div>
        <h2>-----This is css module styling-----</h2>
      <button className={styles.button}>Click me</button>
    </div>
  )
}

export default ButtonComponent
