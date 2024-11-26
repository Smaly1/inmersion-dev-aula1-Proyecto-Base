let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar() {
    let password = '';
    let numeroDigitado = parseInt(cantidad.value);

    if (numeroDigitado < 8 || numeroDigitado <= 0) {
        alert("La cantidad de caracteres debe ser mayor a 7");
        return;
    }

    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
    }

    contrasena.value = password;
}

// Asignar la función al botón
// boton.addEventListener('click', generar);
