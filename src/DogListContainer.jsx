// @ts-check
import { useState, useEffect } from "react"
import BreedsSelect from "./BreedsSelect";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState ([""]);
  const [selectedBreed, setSelectedBreed] = useState(["Please Choice"]);


  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(json => setBreeds(Object.keys(json.message)))
    // console.log(breeds)
    // console.log(breeds.length)
  },[]
  );
  
  const onchangeBreed = (e) =>{
    //
    setSelectedBreed(e.target.value);
    console.log(selectedBreed);
    console.log("abcd");
  }
  return(
  <>
  <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} onChangeBreed={onchangeBreed} />
  </>
  )
}

export default DogListContainer