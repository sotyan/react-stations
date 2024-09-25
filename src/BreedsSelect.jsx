// @ts-check
import { useState } from "react"

import DogListContainer from "./DogListContainer";

export const BreedsSelect = (props) => {
  const optionItems = props.breeds.map((breed) =>
    <option value={breed} key={breed}>{breed}</option>  
  );


  return(
  <>
  <div className="breedsList">
    <label htmlFor="breedsList">BreedsList</label>
    <select name="breedsList" id="breedsList" onChange={props.onChangeBreed} defaultValue={"Please Choice"}>
      <option value="Plese Choice">Please Choice</option>
      {optionItems}
    </select>
  </div>
  </>
  )
}

export default BreedsSelect
