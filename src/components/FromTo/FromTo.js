import React from 'react'
import exchange from '../../assets/images/exchange.png'


function FromTo({setFromCurr,setToCurr}) {
  return (
    <div>
    <select
        name='from'
        placeholder=''
        defaultValue={'AZN'}
        className={'selects'}
        onChange={e => setFromCurr(e.target.value)}
    >
        <option value='AZN'>AZN</option>
        <option value='TRY'>TRY</option>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='RUB'>RUB</option>
    </select>
    <img src={exchange} alt='exchange' className='exchange-img' />
    <select
        name='to'
        defaultValue={'USD'}
        className={'selects'}
        onChange={e => setToCurr(e.target.value)}
    >
        <option value='AZN'>AZN</option>
        <option value='TRY'>TRY</option>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='RUB'>RUB</option>
    </select>
</div>
  )
}

export default FromTo