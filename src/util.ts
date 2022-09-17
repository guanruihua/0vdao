import { matchValue } from 'rh-js-methods'
import { tBaseType, iRow, iParam } from './type'

export function format(param?: iParam) {
	if (!param) { return this; }

	const keys: string[] = Object.keys(param);
	const keyLen: number = keys.length;
	
	return this.map((item: iRow): iRow => {
	
		const _Item: iRow = {};
		const _Len: number = keyLen;
		let i = 0;
	
		while (i < _Len) {
			const _Key: string = keys[i++]
			if (typeof param[_Key] === 'string') {
				_Item[param[_Key]] = item[_Key]
			} else {
				_Item[_Key] = item[_Key]
			}
		}
		
		return _Item;
	});
}

export function matchItem(item: iRow, param: tBaseType): boolean {
	
	const keys: string[] = Object.keys(param)
	let keyLen: number = keys.length
	
	while (keyLen--) {
	
		const tempkey: string = keys[keyLen]
		if (!matchValue(item[tempkey], param[tempkey])) {
			return false;
		}
	
	}
	return true;
}