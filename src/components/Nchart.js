import React from 'react'

import sharjax from './img/sharjax.png';
import './Nchart.css';


export const Nchart = () => {
  return (
    <div className="div-sharj">
        <h4 className="text">شارژ باقی مانده سیم کارت</h4>
<img  className="img-sharj" src={sharjax}/>
<div className="div-mos"><h5 className="tx-h5">سیم کارتت را شارژ کن</h5></div>


    </div>
  )
}
