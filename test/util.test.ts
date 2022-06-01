import { rUtil } from "rh-js-methods"
import { matchValue } from './index.test'


/(?<=(Logo".*"max_size":"))[a-zA-Z#_]*(?=(",))/i
const tLog = (...args: any[]) => {
	const result = []
	for (let i = 0; i < args.length; i++) {
		if (args[i] === true) {
			continue;
		}
		result.push(i)
	}

	rUtil.logGroup('matchStringValue',
		...result
	)


}

tLog(
	// matchValue({}),
	matchValue({
		a: {
			b: {
				c: {
					e: 12356,
					d: [0, 233]
				}
			}
		}
	}, '>140', 'a.b.c.d.1'),
	matchValue(123, '>=123'),
	matchValue(123, '>=123'),
	matchValue(123, '<=123'),
	matchValue(123, '!=122'),
	matchValue(123, '<>124'),
	/(?<=(<)[1-9]+)/.test('<123'),
	// matchValue([], []),
	matchValue(false, /false/),
	matchValue(true, /tr.*/),
	matchValue('abb', /(?<=a)[a-z]*/),
	matchValue(123, 123),
	matchValue(123, /12.*/),
	!matchValue(123, /132.*/),
	/(?<=([<>=])[1-9]+)/.test('=123'),
	/(?<=([<>=])[1-9]+)/.test('>123'),
	/(?<=([<>=])[1-9]+)/.test('>=123'),
	/(?<=([<>=])[1-9]+)/.test('<=123'),
	/(?<=([<>=])[1-9]+)/.test('<>=123'),
	/(?<=([<>=])[1-9]+)/.test('<>123'),
)