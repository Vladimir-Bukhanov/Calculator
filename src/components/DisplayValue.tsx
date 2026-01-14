import type { IDisplayValue } from '../types/display.types'

export const DisplayValue = ({ value, result }: IDisplayValue) => {
	return (
		<div className="flex flex-col bg-black/40 items-center justify-center w-[95%] h-[20vh] mb-5 border sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[50%]">
			<input
				className="flex text-center text-3xl w-full mb-4 outline-0"
				type="text"
				value={value}
				readOnly
			/>
			<span className="flex">
				{result ? <div className="text-3xl mr-2"> = </div> : <></>}
				<div className="text-3xl">{result}</div>
			</span>
		</div>
	)
}
