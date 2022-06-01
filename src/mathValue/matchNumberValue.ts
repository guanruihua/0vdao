import { rUtil } from "rh-js-methods"
import { Valer, Val } from './type'

export function matchNumberValue(val: Val, valer: Valer) {

	const valType: string = rUtil.type(val)
	const valerType: string = rUtil.type(valer)

	if (valType !== 'Number') {
		return false
	}

	if (valerType === 'String') {
		
		const [matNum, Sym = '='] = /(?<=([<>=!]+))[0-9]+/gi.exec(valer as string) || []
		switch (Sym) {
			case '=': return val === Number(matNum)
			case '>': return val > Number(matNum)
			case '>=': return val >= Number(matNum)
			case '<': return val < Number(matNum)
			case '<=': return val <= Number(matNum)
			case '<>':
			case '!=': return val != Number(matNum)
		}

		return false
	}


	if (valerType === 'RegExp') {
		return (valer as RegExp).test(String(val))
	}

	return false

}