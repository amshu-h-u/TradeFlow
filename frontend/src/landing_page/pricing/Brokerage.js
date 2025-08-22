import React from 'react';
function Brokerage() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5 text-center border-top'>
                <div className='col-8 p-4 '>
                    <a href="" style={{textDecoration:"none"}}><h3 className='fs-5'>Brokerage calculator</h3></a>
                    <ul style={{textAlign:"left",lineHeight:"2.5",fontSize:"12px"}} className='text-muted '>
                   <li>Securities/Commodities transaction tax</li> 

<li>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery.</li>
     <li>Charged only on selling side when trading intraday or on F&O.</li>

<li>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</li>

<li>Transaction/Turnover Charges</li>

<li>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</li>
                    </ul>
                </div>
                <div className='col-4 p-4'>
               <a href="" style={{textDecoration:"none"}}><h3 className='fs-5'>List of charges</h3></a>
                </div>
                
           </div>
    </div>
         );
}

export default Brokerage;