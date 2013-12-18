define(["tokenizer"], function(tokenizer) {
	var exampleCProgram = 'main(){printf("Hello World");}';
	console.log(tokenizer(exampleCProgram));
});