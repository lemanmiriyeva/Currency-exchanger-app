import React from 'react'
import rub from '../../assets/images/rub.png'
import eur from '../../assets/images/eur.png'
import usd from '../../assets/images/usd.png'
import tryC from '../../assets/images/try.png'
import './AllCurrencies.css';

function AllCurrencies({view,USD,EUR,TRY,RUB}) {
  return (
    <>
    	{view && (
				<div className='allCurrencies'>
					<div className='base-currency'>
						<div className='currency'>
							<img src={usd} alt='usd' />
							<p>Dollar</p>
						</div>
						<p>{USD}</p>
					</div>
					<div className='base-currency'>
						<div className='currency'>
							<img src={eur} alt='eur' />
							<p>Euro</p>
						</div>
						<p>{EUR}</p>
					</div>
					<div className='base-currency'>
						<div className='currency'>
							<img src={tryC} alt='try' />
							<p>Tl</p>
						</div>
						<p>{TRY}</p>
					</div>
					<div className='base-currency'>
						<div className='currency'>
							<img src={rub} alt='rub' />
							<p>Rubl</p>
						</div>
						<p>{RUB}</p>
					</div>
				</div>
			)}
    </>
  )
}

export default AllCurrencies