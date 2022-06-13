import React from 'react'
import './Table.css';

export const Table = () => {
  return (
    <div>

        <table className="table">
            <tr>
               <th>قیمیت</th>
               <th>تخفیف</th>
               <th>نام بسته</th> 
               <th>تاریخ انقضا بسته</th> 
               <th></th> 
            </tr>
            <hr/>
            <tr>
                <td>١٣٠،٠٠٠ </td>
                <td>٢٠% </td>
                <td>بسته اینترنت سه ماهه</td>
                <td> ١٤شهربور ١٤٠١ </td>
                
            </tr>
            <tr>
                <td>٤٥،٠٠٠ </td>
                <td>٤٥% </td>
                <td>بسته ترکیبی هفته ای</td>
                <td>١٣ خرداد١٤٠١ </td>
            </tr>
            <tr>
               
                <td>٥٠،٠٠٠ </td>
                <td>١٥% </td>
                <td>بسته اینترنت یک ماهه</td>
                <td>١٥تیر ١٤٠١ </td>
               
            </tr>
        </table>
    </div>
  )
}
