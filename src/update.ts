import { iRow, iParam, Row } from './type'
import { matchItem } from './util'

// eslint-disable-next-line
var eval2 = eval;

export function update(whereParams: iParam | iParam[], updateParam: iParam): any {

	if (!Array.isArray(whereParams)) { whereParams = [whereParams]; }

	this.filter((item: iRow, index: number): iRow => {
		const tmpLen: number = whereParams.length;
		let i = 0;
		while (i < tmpLen) {
			if (matchItem(item, whereParams[i++])) {
				this[index] = Object.assign(this[index], updateParam);
				break;
			}
		}
	});
	return this;
}

export function updateByPath(row: Row, path?: string) {
	try {
		eval2(`${path}=Object.assign(${path},${JSON.stringify(row)})`)
	} catch (error) {
		console.log(error)
	}
	return this
}