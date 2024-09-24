// @ts-check
import { useState, useEffect } from "react"
import BreedsSelect from "./BreedsSelect";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState ([""]);
  const [selectedBreed, setSelectedBreed] = useState(["Select"]);


  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(json => setBreeds(Object.keys(json.message)))
    // console.log(breeds)
    // console.log(breeds.length)
  },[]
  );


  const optionItems = breeds.map((breed) =>
  <option value={breed} key={breed}>{breed}</option>
  );
  



  return(
  <>
  <div className="breedsList">
    <label htmlFor="breedsList">BreedsList</label>
    <select name="breedsList" id="breedsList">
      {optionItems}
      
    </select>
  </div>
  {/* <BreedsSelect breeds={breeds} /> */}
  </>
  )
}

export default DogListContainer


// import React, { useState, useEffect } from 'react';

// export function DogListContainer() {
//   const [breeds, setBreeds] = useState([]);

//   useEffect(() => {
//     fetch('https://dog.ceo/api/breeds/list/all')
//       .then(response => response.json())
//       .then(data => {
//         const list = data.message
//         setBreeds(Object.keys(list))
//       })
//   }, []);

//     return (
//         <select name="breed" >
//             {breeds.map(breed => (
//                 <option key={breed} value={breed}>{breed}</option>
//             ))}
//         </select>
//     );
// }
