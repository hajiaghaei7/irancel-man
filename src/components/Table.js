import React from 'react'
import './Table.css';

export const Table = () => {
  return (
    <div className="divkol">
<p className="p-tx"> بسته های پیشنهادی مخصوص شما</p>
        <table className="table">
            <tr>
            <th></th>
                
               <th>قیمیت</th> 
               <th>تخفیف</th>
               <th>نام بسته</th> 
               <th>تاریخ انقضا بسته</th> 
              
               
            </tr>
           
            <tr>
                <td><div className="div-bot"><p className="p-text">خرید</p></div></td>
                <td>١٣٠،٠٠٠ </td>
                <td>٢٠% </td>
                <td>بسته اینترنت سه ماهه</td>
                <td> ١٤شهربور ١٤٠١ </td>
                
            </tr>
            <tr>
            <td><div className="div-bot"><p className="p-text">خرید</p></div></td>
                <td>٤٥،٠٠٠ </td>
                <td>٤٥% </td>
                <td>بسته ترکیبی هفته ای</td>
                <td>١٣ خرداد١٤٠١ </td>
            </tr>
            <tr>
            <td><div className="div-bot"><p className="p-text">خرید</p></div></td>
                <td>٥٠،٠٠٠ </td>
                <td>١٥% </td>
                <td>بسته اینترنت یک ماهه</td>
                <td>١٥تیر ١٤٠١ </td>
               
            </tr>
        </table>
    </div>
  )
}
