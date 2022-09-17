import { matchValue } from 'rh-js-methods'
import { tBaseType, iRow, iParam } from './type'


export function getPathValue(record: Record<string | number, any>, path: string) {
	if (!path) return record;
	const arr = path.split('.')
	while (arr.length) {
		const index = arr.shift()
		if (index !== undefined && record[index] !== undefined)
			record = record[index]
	}
	return record;
}



function _dpp(record: Record<string | number, any>, paths: string[]) {

	const path = paths[0]

	if (path === undefined) return;

	if (paths.length === 1) {
		if (Array.isArray(record) && !isNaN(Number(path))) {
			record.splice(Number(path), 1)
		} else {
			delete record[path]
		}
	}

	if (paths.length > 1) {
		const index = paths.shift()
		index !== undefined && (record[index] = _dpp(record[index], paths))
	}

	return record
}

export function delPathProp(record: Record<string | number, any>, path: string) {

	if (!path) return record;

	const arr = path.split('.')

	const index = arr.shift()
	index !== undefined && (record[index] = _dpp(record[index], arr))

	return record
}

export function setPathProp(
	record: Record<string | number, any>, path: string,
	value: any, isAdd = false) {
	if (!path) return record;
	const arr = path.split('.')
	while (arr.length > 1) {
		const index = arr.shift()
		if (index !== undefined && record[index] !== undefined)
			record = record[index];
	}
	if (Array.isArray(record[arr[0]]) && isAdd) {
		record[arr[0]].push(value)
		return
	}
	record[arr[0]] = value
	return
}


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