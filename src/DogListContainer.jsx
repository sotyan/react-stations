// @ts-check
import { useState, useEffect } from "react"
import BreedsSelect from "./BreedsSelect";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState ([""]);
  const [selectedBreed, setSelectedBreed] = useState(["shiba"]);
  const [dogImgList, setDogImgList] = useState([]);


  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(json => setBreeds(Object.keys(json.message)))
    // console.log(breeds)
    // console.log(breeds.length)
  },[]
  );
  
  
  const onchangeBreed = (e) =>{
    setSelectedBreed(e.target.value);
    console.log(selectedBreed);
  }

  // const clickButton = () =>{
  //   // fetch('https://dog.ceo/api/breed/'+ {selectedBreed} + '/images/random/12')
  //   fetch('https://dog.ceo/api/breed/shiba/images/random/1')
  //   .then(res => res.json)
  //   .then(json => setDogImgList(json.message))
  // }
  

  const clickButton = () => {
    console.log(selectedBreed)
    fetch('https://dog.ceo/api/breed/' + selectedBreed + '/images/random/12')
    .then(res => res.json())
    .then(json => setDogImgList(json.message))  
  }

  

  return(
  <>
  <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} onChangeBreed={onchangeBreed} />
  <div className="breedsList">
    <button onClick={clickButton}>表示</button>
  </div>
  <div className="dogImages">
    {dogImgList.map((dogImg, index) => (
      <img src={dogImg} alt="犬種リスト" key={dogImg}/>
    ))}
    </div>
  </>
  )
}

export default DogListContainer