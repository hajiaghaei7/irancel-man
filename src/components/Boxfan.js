
import React from 'react'
import './Boxfan.css';
import './Topcenter.css';
import './Nchart';
import { Nchart } from './Nchart';
import { Topcenter } from './Topcenter';
import userr from './img/userr.png';
import { Topleft } from './Topleft';
import { Table } from './Table';

export const Boxfan = () => {
  return (
    <div>
        <div className="kol">
        <div className="flexx">

     
<div className="dayer-yeloow">
<div className="dayer-yeloow-child"><img className="imge-profile"  src={userr}/></div>
</div>
<div className="text-name">سلام هاله حاجی آقایی
<hr/>
+98 12345678
</div>








</div> 
<Nchart/>


        </div>
      
        <div className="kol">
        <h4 className="text-page-asli">صفحه اصلی</h4>  <Topcenter/>




        <div className="d1" >
     
  
      
      </div>
        <div  className="center-bottom"><Table/></div>
      
     
    
       
        </div>
      
        <div className="kol"><Topleft/></div>
        </div>
        
  )
}
