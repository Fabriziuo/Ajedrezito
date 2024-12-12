var centesimas = 0;
		var segundos = 0;
		var minutos = 0;
		var horas = 0;
        
	function inicio () {
		control = setInterval(cronometro,10);
		document.getElementById("inicio").disabled = true;
		document.getElementById("parar").disabled = false;
		document.getElementById("continuar").disabled = true;
		document.getElementById("reinicio").disabled = false;
	}
	function parar () {
		clearInterval(control);
		document.getElementById("parar").disabled = true;
		document.getElementById("continuar").disabled = false;
	}
	function reinicio () {
		clearInterval(control);
		centesimas = 0;
		segundos = 0;
		minutos = 0;
		horas = 0;
		Centesimas.innerHTML = ":00";
		Segundos.innerHTML = ":00";
		Minutos.innerHTML = ":00";
		Horas.innerHTML = "00";
		document.getElementById("inicio").disabled = false;
		document.getElementById("parar").disabled = true;
		document.getElementById("continuar").disabled = true;
		document.getElementById("reinicio").disabled = true;
	}
	function cronometro () {
		if (centesimas < 99) {
			centesimas++;
			if (centesimas < 10) { centesimas = "0"+centesimas }
			Centesimas.innerHTML = ":"+centesimas;
		}
		if (centesimas == 99) {
			centesimas = -1;
		}
		if (centesimas == 0) {
			segundos ++;
			if (segundos < 10) { segundos = "0"+segundos }
			Segundos.innerHTML = ":"+segundos;
		}
		if (segundos == 59) {
			segundos = -1;
		}
		if ( (centesimas == 0)&&(segundos == 0) ) {
			minutos++;
			if (minutos < 10) { minutos = "0"+minutos }
			Minutos.innerHTML = ":"+minutos;
		}
		if (minutos == 59) {
			minutos = -1;
		}
		if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
			horas ++;
			if (horas < 10) { horas = "0"+horas }
			Horas.innerHTML = horas;
		}
	}



    var centesimas_2 = 0;
		var segundos_2 = 0;
		var minutos_2 = 0;
		var horas_2 = 0;
    
        
	function inicio_2 () {
		control_2 = setInterval(cronometro_2,10);
		document.getElementById("inicio_2").disabled = true;
		document.getElementById("parar_2").disabled = false;
		document.getElementById("continuar_2").disabled = true;
		document.getElementById("reinicio_2").disabled = false;
	}
	function parar_2 () {
		clearInterval(control_2);
		document.getElementById("parar_2").disabled = true;
		document.getElementById("continuar_2").disabled = false;
	}
	function reinicio_2 () {
		clearInterval(control_2);
		centesimas_2 = 0;
		segundos_2 = 0;
		minutos_2 = 0;
		horas_2 = 0;
		Centesimas_2.innerHTML = ":00";
		Segundos_2.innerHTML = ":00";
		Minutos_2.innerHTML = ":00";
		Horas_2.innerHTML = "00";
		document.getElementById("inicio_2").disabled = false;
		document.getElementById("parar_2").disabled = true;
		document.getElementById("continuar_2").disabled = true;
		document.getElementById("reinicio_2").disabled = true;
	}
	function cronometro_2 () {
		if (centesimas_2 < 99) {
			centesimas_2++;
			if (centesimas_2 < 10) { centesimas_2 = "0"+centesimas_2 }
			Centesimas_2.innerHTML = ":"+centesimas_2;
		}
		if (centesimas_2 == 99) {
			centesimas_2 = -1;
		}
		if (centesimas_2 == 0) {
			segundos_2 ++;
			if (segundos_2 < 10) { segundos_2 = "0"+segundos_2 }
			Segundos_2.innerHTML = ":"+segundos_2;
		}
		if (segundos_2 == 59) {
			segundos_2 = -1;
		}
		if ( (centesimas_2 == 0)&&(segundos_2 == 0) ) {
			minutos++;
			if (minutos_2 < 10) { minutos_2 = "0"+minutos_2 }
			Minutos_2.innerHTML = ":"+minutos_2;
		}
		if (minutos_2 == 59) {
			minutos_2 = -1;
		}
		if ( (centesimas_2 == 0)&&(segundos_2 == 0)&&(minutos_2 == 0) ) {
			horas_2 ++;
			if (horas_2 < 10) { horas = "0"+horas_2 }
			Horas_2.innerHTML = horas_2;
		}
    }