import { matchValue } from 'rh-js-methods'
import { tBaseType, iRow, iParam } from './type'

export function format(param?: iParam) {
	if (!param) { return this; }

	const keys: string[] = Object.keys(param);
	const keyLen: number = keys.length;
	
	return this.map((item: iRow): iRow => {
	
		const tmpItem: iRow = {};
		const tmpLen: number = keyLen;
		let i = 0;
	
		while (i < tmpLen) {
			const tmpKey: string = keys[i++]
			if (typeof param[tmpKey] === 'string') {
				tmpItem[param[tmpKey]] = item[tmpKey]
			} else {
				tmpItem[tmpKey] = item[tmpKey]
			}
		}
		
		return tmpItem;
	});
}

export function matchItem(item: iRow, param: tBaseType): boolean {
	const keys: string[] = Object.keys(param);
	let keyLen: number = keys.length;
	while (keyLen--) {
		const tempkey: string = keys[keyLen]
		if (!matchValue(item[tempkey], param[tempkey])) {
			return false;
		}
	}
	return true;
}