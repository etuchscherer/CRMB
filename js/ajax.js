// JavaScript Document

$(function(){
	
	$("ul.services li").click(function(e){	
			id = e.target.id;									   
		$('<div id="newWriteup" />').load('serviceDescription.html #' + id , function(){
			$('#serviceWriteUp').children().hide();
			$(this).hide()
				.appendTo('#serviceWriteUp')
				.show();
				});
		return false;
									   
	});
});