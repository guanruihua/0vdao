import { iRow, Row } from './type'

// eslint-disable-next-line
var eval2 = eval;

export function add(row: iRow | iRow[]): any {
	if (Array.isArray(row)) {
		const len: number = row.length
		let i = 0
		while (i < len) { this.push(row[i++]); }
	} else {
		this.push(row)
	}
	return this;
}

export function addByPath(row: Row, path?: string) {
	if (!path) return add.bind(this)(row)
	try {
		eval2(`${path}.push(${JSON.stringify(row)})`)
	} catch (error) {
		console.log(error)
	}
	return this
}