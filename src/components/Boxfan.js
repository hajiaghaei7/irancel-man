
import React from 'react'
import './Boxfan.css';
import './Topcenter.css';
import './Nchart';
import { Nchart } from './Nchart';
import { Topcenter } from './Topcenter';
import userr from './img/userr.png';
import { Topleft } from './Topleft';


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
      
        <div className="kol1">
        <h4 className="text-page-asli">صفحه اصلی</h4>  <Topcenter/>
        </div>
        <div className="kol2"><Topleft/></div>
       
        </div>
        
  )
}
