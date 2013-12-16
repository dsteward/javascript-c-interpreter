define(function() {
	var operators = {
		'+': 'T_PLUS',
		'-': 'T_MINUS',
		'=': 'T_ASSIGN',
		'(': 'T_OPEN_BRACKET',
		')': 'T_CLOSE_BRACKET',
		'{': 'T_OPEN_BRACE',
		'}': 'T_CLOSE_BRACE',
		'[': 'T_OPEN_SQUARE_BRACKET',
		']': 'T_CLOSE_SQUARE_BRACKET',
		',': 'T_COMMA',
		';': 'T_SEMICOLON',
		'&': 'T_BITWISE_AND',
		'|': 'T_BITWISE_OR',
		'~': 'T_BITWISE_NOT',
		'^': 'T_BITWISE_XOR',
		'<<': 'T_BITWISE_LEFT_SHIFT',
		'>>': 'T_BITWISE_RIGHT_SHIFT',
		'&&': 'T_LOGICAL_AND',
		'||': 'T_LOGICAL_OR',
		'!': 'T_LOGICAL_NOT',
		'+=': 'T_ADDITION_ASSIGNMENT',
		'-=': 'T_SUBTRACTION_ASSIGNMENT',
		'*=': 'T_MULTIPLCATION_ASSIGNMENT',
		'/=': 'T_DIVISION_ASSIGNMENT',
		'%=': 'T_MODULO_ASSIGNMENT',
		'&=': 'T_BITWISE_AND_ASSIGNMENT',
		'|=': 'T_BITWISE_OR_ASSIGNMENT',
		'^=': 'T_BITWISE_XOR_ASSIGNMENT',
		'<<=': 'T_BITWISE_LEFT_SHIFT_ASSIGNMENT',
		'>>=': 'T_BITWISE_RIGHT_SHIFT_ASSIGNMENT',
	};

	var splitOnRegExp = /[a-zA-Z_][a-zA-Z_\d]*|[\d]+|[^a-zA-Z_\d ]+|'.'|"[^"]*"/g;

	var exampleCProgram = 'main(){printf("Hello World");}';
	var operator = 'operator';

	var tokens = [
		{ name:'ADDITION', type: operator},
		{},
		{},
	];

	var states = {
		readString: function(source, index, length, tokens){
			var end = index++;
			while(end < length && source[end] !== '"') {
				end++;
			}
			
			return { start: index, end: end };
		},
		readWord: function(source, index, length, tokens) {
			
		},
		readWhitespace: function(source, index, length, tokens) {
			var end = index;
			while(end < length && (source[end]!==' ' || source[end]!=='\n' || source[end]!=='\r' || source[end]!=='\t') {
				end++;
			}

			return { start: index, end: end, state: parent };
		}
	};

	return function(source) {

	};
});