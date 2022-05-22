import React from 'react'

export const Button = ({styles,event,textButton}) => {
  return (
    <button className={styles} onClick={event} >{textButton}</button>
  )
}
