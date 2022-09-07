import React from 'react'
import reset from '../../assets/images/reset.png';
import './Amount.css';


function Amount({amount,setAmount,handleExchange,converted}) {
  return (
    <div className='amount'>
    <h1 className='title'>Amount</h1>
    <div className='inputContainer'>
        <input
            type='text'
            className='value'
            value={amount}
            onChange={e => setAmount(e.target.value)}
        />
        <div className='change-button' onClick={handleExchange}>
            <img src={reset} alt='' />
        </div>
    </div>
    <p className='converted'>{converted}</p>
</div>
  )
}

export default Amount