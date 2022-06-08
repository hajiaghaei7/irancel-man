import React from 'react'
import './Topleft.css';

export const Topleft = () => {
  return (
    <div>
    <div className="logo-iarncell"></div>
    <div className="logo-right">
        
        <h5>ایرانسل من</h5>
        </div>
        <div className="div-search">
        <input className="b"  type='txt'placeholder='جستجو....' />
        <button  className="search-bot" ></button>
        
          </div>
        
    </div>
  )
}
