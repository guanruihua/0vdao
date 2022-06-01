import { iRow } from './type'

export function add(row: iRow | iRow[]): any {
	if (Array.isArray(row)) {
		const len: number = row.length;
		let i = 0;
		while (i < len) { this.push(row[i++]) }
	} else { this.push(row); }
	return this;
}