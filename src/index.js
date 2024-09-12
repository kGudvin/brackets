module.exports = function check(str, bracketsConfig) {
	let op = 0 // Для отслеживания состояния символа '|'
	const matching = {}

	// Создаем таблицу соответствий закрывающих и открывающих скобок
	bracketsConfig.map(el => {
		matching[el[1]] = el[0]
	})

	const strArr = str.split('')
	const stack = []

	// Используем map() для обработки каждого элемента строки
	strArr.map(el => {
		if (Object.values(matching).includes(el)) {
			if (el === '|' && op === 0) {
				op += 1
			} else if (el === '|' && op === 1) {
				op -= 1
				const x = stack.pop()
				return
			}
			stack.push(el)
		} else if (Object.keys(matching).includes(el)) {
			const x = stack.pop()
			if (x === '|') {
				op -= 1
			}
			if (x !== matching[el]) {
				stack.push(x)
			}
		}
		return el
	})

	return stack.length === 0
}
