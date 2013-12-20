define(["tokenizer", "knockout-3.0.0", "jquery"], function(tokenizer, ko, $) {
	var ViewModel = function() {
		this.code = ko.observable('main(){printf("Hello World");}');
		this.output = ko.observable();
		this.tokenizeCode = function() {
			var out = tokenizer(this.code()).reduce(function(preVal, current) {
				var str = "<br/>" + current.type;
				if (current.value) {
					str += " // " + current.value;
				}
				return preVal + str;
			}, "");
			this.output(out);
		};
	};

	$(document).ready(function() {
		ko.applyBindings(new ViewModel());
	});
});