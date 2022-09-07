import axios from 'axios'
import { useState } from 'react'
import { configure } from '@testing-library/react'
import FromTo from './components/FromTo/FromTo'
import Amount from './components/Amount/Amount'
import AllCurrencies from './components/AllCurrencies/AllCurrencies';


function App() {
	const [fromCurr, setFromCurr] = useState('AZN')
	const [toCurr, setToCurr] = useState('USD')
	const [amount, setAmount] = useState(100)
	const [converted, setConverted] = useState('')
	const [view, setView] = useState(false)
	const [TRY, setTRY] = useState('')
	const [USD, setUSD] = useState('')
	const [EUR, setEUR] = useState('')
	const [RUB, setRUB] = useState('')

	const handleExchange = async () => {
		await axios
			.get(
				`https://api.apilayer.com/exchangerates_data/latest?symbols=USD,RUB,TRY,EUR,${toCurr}&base=${fromCurr}`,
				{
					headers: { apikey: '7inxcAqS8ysuGfHWnK8UyobbMYuijnm2' },
				}
			)
			.then(res => {
				setConverted(res.data.rates[toCurr] * amount + ' ' + toCurr)
				setEUR(res.data.rates['EUR'] * amount)
				setUSD(res.data.rates['USD'] * amount)
				setRUB(res.data.rates['RUB'] * amount)
				setTRY(res.data.rates['TRY'] * amount)
				setView(true)
			})
	}
	return (
		<div className='container'>
			<FromTo
				setToCurr={setToCurr}
				setFromCurr={setFromCurr}
			/>
			<Amount
				handleExchange={handleExchange}
				setAmount={setAmount}
				amount={amount}
				converted={converted} />
			<AllCurrencies
				view={view}
				USD={USD}
				EUR={EUR}
				TRY={TRY}
				RUB={RUB} />
		</div>
	)
}

export default App
