define(function() {
	var symbols = [
		{symbol: '+', token: 'T_PLUS'},
		{symbol: '-', token: 'T_MINUS'},
		{symbol: '%', token: 'T_MODULO'},
		{symbol: '=', token: 'T_ASSIGN'},
		{symbol: '(', token: 'T_OPEN_BRACKET'},
		{symbol: ')', token: 'T_CLOSE_BRACKET'},
		{symbol: '{', token: 'T_OPEN_BRACE'},
		{symbol: '}', token: 'T_CLOSE_BRACE'},
		{symbol: '[', token: 'T_OPEN_SQUARE_BRACKET'},
		{symbol: ']', token: 'T_CLOSE_SQUARE_BRACKET'},
		{symbol: ',', token: 'T_COMMA'},
		{symbol: ';', token: 'T_SEMICOLON'},
		{symbol: '&', token: 'T_BITWISE_AND'},
		{symbol: '|', token: 'T_BITWISE_OR'},
		{symbol: '~', token: 'T_BITWISE_NOT'},
		{symbol: '^', token: 'T_BITWISE_XOR'},
		{symbol: '<<', token: 'T_BITWISE_LEFT_SHIFT'},
		{symbol: '>>', token: 'T_BITWISE_RIGHT_SHIFT'},
		{symbol: '&&', token: 'T_LOGICAL_AND'},
		{symbol: '||', token: 'T_LOGICAL_OR'},
		{symbol: '!', token: 'T_LOGICAL_NOT'},
		{symbol: '+=', token: 'T_ADDITION_ASSIGNMENT'},
		{symbol: '-=', token: 'T_SUBTRACTION_ASSIGNMENT'},
		{symbol: '*=', token: 'T_MULTIPLCATION_ASSIGNMENT'},
		{symbol: '/=', token: 'T_DIVISION_ASSIGNMENT'},
		{symbol: '%=', token: 'T_MODULO_ASSIGNMENT'},
		{symbol: '&=', token: 'T_BITWISE_AND_ASSIGNMENT'},
		{symbol: '|=', token: 'T_BITWISE_OR_ASSIGNMENT'},
		{symbol: '^=', token: 'T_BITWISE_XOR_ASSIGNMENT'},
		{symbol: '<<=', token: 'T_BITWISE_LEFT_SHIFT_ASSIGNMENT'},
		{symbol: '>>=', token: 'T_BITWISE_RIGHT_SHIFT_ASSIGNMENT'},
	];

	var sortedSymbols = symbols.map(function(item) {
		item.symbolLength = item.symbol.length;
		return item;
	}).sort(function(a,b) {
		if (a.symbolLength < b.symbolLength)
			return -1;
		if (a.symbolLength > b.symbolLength)
			return 1;
		return 0;
	});

	var exampleCProgram = 'main(){printf("Hello World");}';


	var alphanumericRegExp = /[a-zA-Z0-9]+/;
	var numericRegExp = /[0-9]+/;
	var wordRegExp = /[a-zA-Z_][a-zA-Z0-9_]*/;

	var states = {
		readString: function(source, index, length, tokens){
			var end = index++;

			while(end < length && source[end] !== '"') {
				end++;
			}
			
			return end;
		},
		readWord: function(source, index, length, tokens) {
			//TODO
		},
		readSymbol: function(source, index, length, tokens) {
			var result = null;
			symbols.forEach(function(symbol) {
				var snippet = source.slice(index, index + symbol.symbolLength);
				if (snippet === symbol.symbol) {
					result = symbol;
					return false;
				}
			});
			
			if (!result)
				throw new Exception("Unknown symbol");

			tokens.push({
				type: result.token
			});

			return index + result.symbolLength;
		},
		readToken: function(source, index, length, tokens) {
			if (source[index].match(wordRegExp))
				return readWord(source, index,)
			
			if (source[index] === '"')
				return readString(source, index, length, tokens);

			return readSymbol(source, index, length, tokens);
		},
		readWhitespace: function(source, index, length, tokens) {
			var end = index;
			while(end < length && (source[end]!==' ' || source[end]!=='\n' || source[end]!=='\r' || source[end]!=='\t') {
				end++;
			}

			return end;
		},
		intial: function(source) {
			var tokens = [];
			var length = source.length;
			var index = readWhitespace(source, index, length, tokens);

			while(index < length) {
				index = readToken(source, index, length, tokens);
				index = readWhitespace(source, index, length, tokens);
			}

			return tokens;
		}
	};

	return function(source) {

	};
});