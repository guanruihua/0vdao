import { iRow, iParam } from './type'
import { matchItem } from './util'

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