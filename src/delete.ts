import { matchItem } from './util';
import { iRow, iParam } from './type'

// eslint-disable-next-line
// var eval2 = eval;

/**
 * @description 删除最外层单元格
 * @param whereParams 
 * @returns 
 */
export function del(whereParams: iParam | iParam[]): any[] {
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

export function delByPath(path: string): any[] {
	try {
		// eslint-disable-next-line
		eval(`delete ${path}`)
		// eslint-disable-next-line
	} catch (err) {
	}
	return this
}