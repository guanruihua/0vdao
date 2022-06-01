import { _Decorator } from 'rh-ts-methods'
import { tTable } from './type'
import { add } from './add'
import { del } from './delete'
import { select, selectPage } from './select'
import { update } from './update'
import { format } from './util'

export * from './mathValue'

const { enumerable } = _Decorator

function initCRUD(tableData: any[]): void {
	Object.defineProperties(tableData, {
		select: { value: select },
		selectPage: { value: selectPage },
		add: { value: add },
		update: { value: update },
		del: { value: del },
		format: { value: format }
	})
}

// 简易数据临时存储实现实现
// 生成数据库的同时生成 对应的接口 配置 , 再通过app去注册
class VDao {
	@enumerable(false)
	init(tableName: string, tableData?: tTable): any {
		if (!tableData) { tableData = []; }
		initCRUD(tableData)
		this[tableName] = tableData ?? []
		return this;
	}
	@enumerable(false)
	insert(tableName: string, tableData: tTable): any {
		if (!this[tableName]) { this.init(tableName); }
		if (Array.isArray(tableData)) {
			const len: number = tableData.length;
			let i = 0
			while (i < len) { this[tableName].push(tableData[i++]); }
		} else {
			this[tableName].push(tableData);
		}
		return this;
	}
}


export default VDao;