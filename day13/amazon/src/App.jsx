import React from 'react'
import './App.css'
import Counter from './Count'


function App() {

  
  const images = [
   
  ]
  
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);

  const next = () => setIndex((index + 1) % images.length);

  return (
    <>
      <div className="img-slider">
        <h1>Image Slider</h1>
        <img src={images[index]} alt="image-here" />
        <div className="slider-btn">
            <button onClick={prev}>left</button>
            <button onClick={next}>right</button>
        </div>
      </div>
    </>
  )
}

export default App
