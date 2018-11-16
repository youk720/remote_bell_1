// 参考サイト
// https://www.webopixel.net/javascript/91.html

'use strict';
$(document).ready(function () {
      setInterval(function(){
        $.getJSON("/sw", function(data){
          $("#sw_now").html(data.sw);
  			});
      }, 10);
			// $.getJSON("/sw", function(data){
			// 	console.log(data);
			// });

		});
