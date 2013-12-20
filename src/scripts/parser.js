define(function() {

	var parseFunctionCall = function(tokens,index) {

	};

	var parseStatement = function(tokens, index) {

	};

	var parseForLoop = function(tokens, index) {

	};

	var parseExpression = function(tokens, index) {

	};

	var parseVariableDeclaration = function() {

	};

	//starts on leading {
	var parseFunctionBody = function(tokens, index) {

		while (tokens[current].token !== 'T_CLOSE_BRACE') {
			
		}
	};

	var parseFunction = function(tokens, index) {
		var returnType = tokens[index];
		var id = tokens[index+1];
		var current = index+3;
		var parameters = [];

		while (tokens[current].token !== 'T_CLOSE_BRACKETS') {
			var paramType = tokens[current];
			var paramId = tokens[current+1];
			parameters.push({ type: paramType, id: paramId });
			current += 2;
		}

		var body = parseFunctionBody(tokens, current);
	};

	var parseTopLevelDeclaration = function(tokens, index) {
		var lookAhead = tokens[index+2];

		if (lookAhead == null)
			return { error: ""};

		if (lookAhead.token === 'T_OPEN_BRACKETS') {
			return parseFunction(tokens, index);
		}
	};

	return function(tokens) {
		var parseStack = [];
		var state = 'start';
		var index = 0;
		parseStack.push('start');

		for (var i = 0; i < tokens.length; i++) {
			var lookAhead = tokens[i];
			var entry = stateTransitions[state][lookAhead.token];
			state = entry(lookAhead, parseStack);
		}
	};
});