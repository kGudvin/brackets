module.exports = function check(str, bracketsConfig) {
	const matching = {}
	bracketsConfig.map(el => {
		matching[`${el[1]}`] = `${el[0]}`
	})
	console.log(matching)
	const strArr = str.split('')
	const stack = []
	strArr.map(el => {
		if (Object.values(matching).includes(el)) {
			stack.push(el)
		}
		if (Object.keys(matching).includes(el)) {
			const x = stack.pop()
			if (x !== matching[el]) {
				stack.push(x)
				return false
			}
		}
		return el
	})
	return stack.length === 0
}
