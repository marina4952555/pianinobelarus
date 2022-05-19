$('.phone__number').mask("8 ( 999 ) 999 - 99 - 99");



$(document).ready(function() {

	$("form").submit(function() {
		event.preventDefault();
		if ($(this).find("input").val().length = 10) {
		$.ajax({
			type: "POST",
			url: "script/send.php",
			data: $(this).serialize(),
		})
		$(this).find("label").css('display', 'none');
		$(this).find("button").css('display', 'none');
		$(this).find(".form__message").css('display', 'block');
		return false;
		}
	});
	
});