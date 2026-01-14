import { useState } from 'react'
import { DisplayValue } from './DisplayValue'

export const CalcBoard = () => {
	const [expression, setExpression] = useState<string>('')
	const [result, setResult] = useState<string>('')
	const buttons: string[] = [
		'7',
		'8',
		'9',
		'+',
		'4',
		'5',
		'6',
		'-',
		'1',
		'2',
		'3',
		'/',
		'0',
		'.',
		'=',
		'*'
	]

	const handleClick = (value: string) => {
		setExpression(prev => prev + value)
	}

	const calculate = () => {
		try {
			if (expression === '') {
				alert('Nothing to calculate')
				return
			}
			const evaluated: number = Function(`return(${expression})`)()
			setResult(evaluated.toString())
		} catch (error: unknown) {
			alert(error)
		}
	}

	const clear = () => {
		setExpression('')
		setResult('')
	}

	return (
		<>
			<DisplayValue
				value={expression}
				result={result}
			/>
			<div className="grid grid-cols-1 grid-rows-1 gap-y-5 border w-[95%] h-[45vh] sm:h-[50vh] sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[50%]">
				<div className="grid grid-cols-4 gap-4">
					{buttons.map(btn => (
						<button
							onClick={() => (btn === '=' ? calculate() : handleClick(btn))}
							className="bg-black/50 border border-black/50 w-full text-xl h-full sm:text-2xl cursor-pointer  hover:border-white ease duration-200"
							key={btn}
						>
							{btn}
						</button>
					))}
				</div>
				<button
					onClick={clear}
					className="text-3xl mb-4 flex items-center justify-center h-16 cursor-pointer border border-black/50 bg-black/50 hover:border-white ease duration-200"
				>
					C
				</button>
			</div>
		</>
	)
}
