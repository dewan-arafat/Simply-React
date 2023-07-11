import React, { useState } from 'react';

const Content = () => {
    const [inputText, setInputText] = useState('');
    const [displayText, setDisplayText] = useState('');
  
    const handleInputChange = (event) => {
      setInputText(event.target.value);
    };
  
    const handleButtonClick = () => {
      setDisplayText(inputText);
      setInputText('');
    };
  
    return (
      <div>
      <div className='flex justify-center'>
        <textarea value={inputText} onChange={handleInputChange} />
        </div>
        <div className='flex justify-center my-5'>
        <button className='bg-green-300 p-3 rounded-md ' onClick={handleButtonClick}>Update Text</button>
        </div>
        
        <p className='text-center'>{displayText}</p>
      
      </div>
    );
  }
  
  export default Content;