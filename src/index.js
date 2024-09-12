module.exports = function check(str, bracketsConfig) {
	const matching = {}
	const stack = []
	bracketsConfig.forEach(([open, close]) => {
		matching[close] = open
	})
	for (const char of str) {
		if (Object.values(matching).includes(char)) {
			if (char === stack[stack.length - 1] && char === matching[char]) {
				stack.pop()
			} else {
				stack.push(char)
			}
		} else if (Object.keys(matching).includes(char)) {
			if (stack.length === 0 || stack.pop() !== matching[char]) {
				return false
			}
		}
	}
	return stack.length === 0
}
