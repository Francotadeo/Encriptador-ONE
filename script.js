/*
	Se ordena la lista de vocales, para mejorar el proceso de encriptar y desencriptar.
	e: enter / o: ober / i: imes / a: ai / u: ufat
*/

const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");

// ENCRIPTAR.

function btnEncriptar() {
	textoEncriptado = encriptar(textArea.value);
	mensaje.value = textoEncriptado;
	textArea.value = "";
	mensaje.style.backgroundImage = "none";
	document.getElementById("noText").style.display = "none";
	document.getElementById("withText").style.display = "flex";
}

function encriptar(stringEncriptado) {
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	stringEncriptado = stringEncriptado.toLowerCase();
	for (let i = 0; i < matrizCodigo.length; i++) {
		if (stringEncriptado.includes(matrizCodigo[i][0])) {
			stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
		}
	}
	return stringEncriptado;
}

// DESENCRIPTAR.

function btnDesencriptar() {
	const textoDesencriptado = desencriptar(textArea.value);
	mensaje.value = textoDesencriptado;
	textArea.value = "";
}

function desencriptar(stringDesencriptado) {
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	stringDesencriptado = stringDesencriptado.toLowerCase();

	for (let i = 0; i < matrizCodigo.length; i++) {
		if (stringDesencriptado.includes(matrizCodigo[i][1])) {
			stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
		}
	}
	return stringDesencriptado;
}

// COPIAR.

function copy() {
	var copyText = document.getElementById("workingText");
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(copyText.value);
}