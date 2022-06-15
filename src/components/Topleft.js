import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import React from 'react'
import './Topleft.css';
import home from './img/home.png';
import sharj from './img/sharj.png';
import net from './img/net.png';
import khadamat from './img/khadamat.png';
import msim from './img/msim.png';
import questions from './img/questions.png';
import location from './img/location.png';
import khadam from './img/khadam.png';
import karkard from './img/karkard.png';




export const Topleft = () => {
  return (
    <div>
      <div className="centertop">
    <div className="logo-iarncell">
      
    </div>
    <div className="logo-right">
        
        <h5 className="txt-irancel-man">ایرانسل من</h5>
        </div>
        </div>
        <div className="div-search">
        <input className="b" 
         type='txt'placeholder='جستجو....' onClick="bor()">



        </input>
        <button  className="search-bot" ></button>
        
          </div>
      

          <div className="div-menu">
            <div className="div-menu-joda">
              <img src={home}/>
             
            </div>
            <div><h4 className=" div-p">صفحه اصلی</h4></div>
            
     </div>
     <div className="div-menu">
     <div className="div-menu-joda">
              <p className="txt-p1">سرویس ها</p>
            </div>
     </div>

     <div className="div-menu">
            <div className="div-menu-joda">
              <img className="ax" src={sharj}/>
             
            </div>
            <p className="txt-p">
         شارژ سیمکارت
              </p>   
     </div>
   
     <div className="div-menu">
            <div className="div-menu-joda">
              <img className="ax" src={net}/>
             
            </div>
            <p className="txt-p">
              اینترنت
              </p>
     </div>

     <div className="div-menu">
            <div className="div-menu-joda">
              <img className="ax" src={karkard}/>
             
            </div>
            <p className="txt-p">
            کارکرد فروش
              </p>
     </div>
         
     <div className="div-menu">
            <div className="div-menu-joda">
              <img className="ax" src={khadam}/>
             
            </div>
            <p className="txt-p">
             خدمات
              </p>
     </div>

     <div className="div-menu">
     <div className="div-menu-joda">
              <p className="txt-p1">
                مدیریت        </p>
            </div>
     </div>

     <div className="div-menu">
            <div className="div-menu-joda">
              <img className="ax" src={khadamat}/>
             
            </div>
            <p className="txt-p">
            مدیریت خدمات
              </p>
     </div>

     <div className="div-menu">
            <div className="div-menu-joda">
              <img className="ax" src={msim}/>
             
            </div>
            <p className="txt-p">
            مدیریت سیمکارت
              </p>
     </div>
    <div className="div-menu1">
   
            <div className="div-menu-joda">
              <img className="ax" src={questions}/>
             
            </div>
            <p className="txt-p">
            سوالات متداول
              </p>
    
    </div>
    <div className="div-menu-joda">
              <img className="ax" src={location}/>
             
            </div>
            <p className="txt-p">
          ارتباط  با ما
              </p>
    </div>
   
  )
}
