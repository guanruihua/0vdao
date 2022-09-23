import { VDao } from './index.test'

const vDao = new VDao()
vDao.init('db', [
	{
		value: [
			{
				id: 'aa',
				value: 'aaaa'
			}, {
				id: 'bb',
				value: 'bbbb'
			}
		]
	}
])

const db = vDao['db']

db.addByPath({ id: 'cc', value: 'cccc' }, '0.value')
db.updateByPath({ id: 'aa2', value: 'aaaa2' }, '0.value', { id: 'aa' })
db.updateByPath({ id: 'aa3', value: 'aaaa3' }, '0.value', { id: 'aa2' })

console.log(db[0].value)
