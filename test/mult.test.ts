import VDao from "./index.test"
import { rUtil } from 'rh-js-methods'
import { Mock } from 'rh-mock'
const vDao = new VDao()


vDao.init('a', Mock({
	"value|10-20": {
		name: '@name'
	}
}).value)

// // log(Color.Green)('test')

rUtil.logGroup('test',
	vDao['a'],
	vDao['a'].select({ aa: 'R' })
)