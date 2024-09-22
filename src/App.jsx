// DO NOT DELETE

import './App.css'
import Header from './Header'
import Discription from './Description'
import DogListContainer from './DogListContainer'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <div className="container">
      <Header />
      <Discription />
      <DogListContainer/>
    </div>
  )
}
