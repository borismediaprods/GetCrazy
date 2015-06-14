/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

$('.carousel').carousel({
	interval: 5000 //changes the speed
});

$(function() {
	$('body').on('click', '.page-scroll a', function(event) {
		var $anchor = $(this);
		document.getElementById($anchor.attr('href').slice(1, $anchor.attr('href').length)).scrollIntoView();
		event.preventDefault();
	});
});