
function encriptar() {
	const texto = document.getElementById("texto").value;

	if (texto.length === 0) {

		return;
	}
	let textoCifrado = texto
		.replace(/e/gi, "enter")
		.replace(/i/gi, "imes")
		.replace(/a/gi, "aki")
		.replace(/o/gi, "ober")
		.replace(/u/gi, "ufat");


	mostrarResultado(textoCifrado);
}

function desencriptar() {
	const texto = document.getElementById("texto").value;

	if (texto.length === 0) {

		return;
	}
	let textoCifrado = texto
		.replace(/enter/gi, "e")
		.replace(/imes/gi, "i")
		.replace(/aki/gi, "a")
		.replace(/ober/gi, "o")
		.replace(/ufat/gi, "u");



	mostrarResultado(textoCifrado);

}

function mostrarResultado(texto) {
	const divEncriptado = document.getElementById("encriptado");
	divEncriptado.style.justifyContent = "start";
	divEncriptado.innerHTML = `
		<div class="mensaje-encriptado" id="mensaje-encriptado">
			<p class="mensaje-e">${texto}</p>
			<button class="btn-desencriptar2" onclick="copiarAlPortapapeles()">Copiar</button>
		</div>
	`;

}

function copiarAlPortapapeles() {
    const texto = document.querySelector(".mensaje-e").innerText;
    navigator.clipboard.writeText(texto)
        .then(() => alert("Texto copiado al portapapeles"))
        .catch(err => console.error("Error al copiar texto:", err));
}


document.addEventListener('DOMContentLoaded', () => {
	if (window.VANTA) {
		window.VANTA.BIRDS({
			el: "body",
			mouseControls: true,
			touchControls: true,
			gyroControls: false,
			minHeight: 200.00,
			minWidth: 200.00,
			scale: 1.00,
			scaleMobile: 1.00,
			backgroundColor: 0xfc0000,
			color1: 0xef0505,
			color2: 0xff0d,
			birdSize: 1.30,
			wingSpan: 27.00,
			separation: 85.00,
			alignment: 44.00,
			cohesion: 50.00,
			quantity: 4.00,
			backgroundAlpha: 0.00
		});
	} else {
		console.error('VANTA not found');
	}
});