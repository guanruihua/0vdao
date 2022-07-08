import { matchItem } from './util';
import { iRow, iParam } from './type'

export function del(whereParams: iParam | iParam[]): any {
	if (!Array.isArray(whereParams)) { whereParams = [whereParams]; }
	this.filter((item: iRow, index: number): iRow => {
		const tmpLen: number = whereParams.length;
		let i = 0;
		while (i < tmpLen) {
			if (matchItem(item, whereParams[i++])) {
				this.splice(index, 1);
				break;
			}
		}
	});
	return this;
}