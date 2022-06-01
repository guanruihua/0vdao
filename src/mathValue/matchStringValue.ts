import { rUtil } from "rh-js-methods"
import { Valer } from './type'

export function matchStringValue(val: string, valer: Valer) {

	if (rUtil.type(valer) === 'String') {
		return val === valer
	}

	if (rUtil.type(valer) === 'RegExp') {
		return (valer as RegExp).test(val)
	}

	return false

}