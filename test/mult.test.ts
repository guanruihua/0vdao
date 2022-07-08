import { VDao } from "./index.test"
import { logGroup } from 'rh-js-methods'
import { Mock } from 'rh-mock'
const vDao = new VDao()


vDao.init('a', (Mock({
	"value|10-20": {
		name: '@name'
	}
}) as any)?.value)

logGroup('test',
	vDao['a'],
	vDao['a'].select({ name: /R/ })
)