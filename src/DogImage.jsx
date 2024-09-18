// @ts-check
import { useState } from 'react'

export const DogImage = (props) => {
  return(
  <div>
    <img src={props.imageUrl} alt="犬の画像"/>
  </div>
  )
}

export default DogImage
