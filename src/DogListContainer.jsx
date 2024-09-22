// @ts-check
import { useEffect, useState } from "react"

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState ([]);


  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(json => setBreeds(json.message))
    console.log(breeds)
  },[]
  );

  return(
  <>
  </>
  )
}

export default DogListContainer