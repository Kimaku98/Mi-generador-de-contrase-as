let cantidad = document.getElementById('cantidad');
let botonGenerar = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let botonLimpiar = document.getElementById('Limpiar'); // Asegúrate de que el ID coincida

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar() {
    let numerodigitado = parseInt(cantidad.value);

    if (numerodigitado < 8) {
        alert("La cantidad de caracteres debe ser mayor que 8");
        return;
    }
    
    let password = '';    
    for (let i = 0; i < numerodigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);
        password += caracterAleatorio;
    }
    
    contrasena.value = password;

    let fuerza = evaluarFuerzaContrasena(password);
    alert(`LA CONTRASEÑA GENERADA ES ${fuerza}`);
}

function evaluarFuerzaContrasena(contrasena) {
    let fuerza = '';

    if (contrasena.length >= 15) {
        fuerza = "FUERTE";
    } else if (contrasena.length >= 10) {
        fuerza = "MEDIA, se recomienda usar a partir de 15 o más caracteres para aumentar la seguridad.";
    } else if (contrasena.length >= 8) {
        fuerza = "DÉBIL, se recomienda usar a partir de 10 o más caracteres.";
    }

    return fuerza;
}

function Limpiar() {
    contrasena.value = "";
}

botonLimpiar.addEventListener('click', Limpiar);
