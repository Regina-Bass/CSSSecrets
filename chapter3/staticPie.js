function $$(selector, context) {
	context = context || document;
	var elements = context.querySelectorAll(selector);
	return Array.prototype.slice.call(elements);
}

$$('.pie').forEach(function(pie) {
	var p = pie.textContent;
	pie.style.animationDelay = '-' + parseFloat(p) + 's';
});
