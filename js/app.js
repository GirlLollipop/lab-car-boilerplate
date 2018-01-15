// La funcionalidad de tu proyecto
//mapa//
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 19.420316 , lng:-99.163117 },
          zoom: 8
        });
      }
//menu//
$(document).ready(main);

var contador = 1;

function main(){
	$('.menu_bar').click(function(){
		// $('nav').toggle();

		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}

	});

};


function mostrar(){
document.getElementById('oculto').style.display = 'block';}
