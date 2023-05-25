import React from 'react'
import { useParams } from 'react-router-dom'

const Params = (props) => {
    const {word, fontColor, bkgColor} = useParams()
  return (
      <div>
        <h2 className='params'>Passing Parameters!</h2>
        <p className='paramsTag'>This is the parameters page.</p>
        
        <br />       
            {isNaN(word) ? <p className='paramsBox' style={fontColor? {color: fontColor, backgroundColor: bkgColor} : null}>This is your word: {word} </p> : 
            <p className='paramsBox'>This is your number: {word}</p>}
    </div>
  )
}

export default Params