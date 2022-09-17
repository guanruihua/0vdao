import { VDao } from "./index.test"
import { logGroup, toPathValue } from 'rh-js-methods'
import { Mock } from 'rh-mock'
import { _data } from './data'
const vDao = new VDao()

vDao.init('table', [_data])
vDao.init('a', (Mock({
	"value|5-9": {
		// name: '@name'
		name: '@name'
	}
}) as any)?.value)

vDao['table'].delByPath()
const { useDashboardId, dashboard } = vDao['table'][0].Ruihua
// const { useDashboardId, dashboard } = 	vDao['table'].select({ 'Ruihua': /.*/ })[0].Ruihua

dashboard.forEach(item => {
	if (item.id === useDashboardId) {
		// console.log(item)
	}
})

logGroup('test',
	// vDao['table'].select({ 'Ruihua': /.*/ })[0],
	// vDao['table'].select({ 'Ruihua': /.*/ })[0].Ruihua,
)

vDao.init('_a', [{
	id: 'aaa',
	b: [1, 2, 3],
	c: {
		d: [{
			id: 'e1',
		}, {
			id: 'f2'
		}]
	}
}])

const _a = vDao['_a']

_a.add({ id: 'bbb', e: 123 })
_a.addByPath({ id: 'cccc333' }, 'this[0].c.d')
_a.updateByPath({ id: 'eee' }, 'this[1]')
_a.delByPath('this[1]')

// const _r = "'fjsdkjf'"
// console.log(eval(`_a[1].id=${_r}`))

console.log(JSON.stringify(_a, null, 2))

// logGroup('test',
// 	vDao['a'],
// 	vDao['a'].select({ name: /R/ })
// )