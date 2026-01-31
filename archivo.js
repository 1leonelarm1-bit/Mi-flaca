function lanzarCorazonesGlobal(event) {
    for (let i = 0; i < 8; i++) {
        const corazon = document.createElement('span');
        
        // ESTA CLASE DEBE SER IGUAL EN EL CSS
        corazon.className = 'corazon-animado'; 
        corazon.innerText = ["❤️" , "❤️" , "❤️"]; 
        
        // Posicionamiento absoluto respecto a la página
        corazon.style.left = event.pageX + 'px';
        corazon.style.top = event.pageY + 'px';
        
        // Un poco de dispersión aleatoria
        const rX = (Math.random() * 60 - 30) + 'px';
        corazon.style.marginLeft = rX;

        document.body.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 1500);
    }
}
function lanzarFestejo(event) {
    const emojisFestejo = ['🎉','🎈'];
    
    for (let i = 0; i < 25; i++) { // Aumentamos a 25 para que sea más espectacular
        const span = document.createElement("span");
        span.className = "corazon-animado";
        span.innerText = emojisFestejo[Math.floor(Math.random() * emojisFestejo.length)];
        
        // Posición inicial (el centro del clic)
        const x = event.pageX;
        const y = event.pageY;
        
        // Calculamos una dirección aleatoria (360 grados)
        const destinoX = (Math.random() - 1) * 200; // Se expanden hasta 300px a los lados
        const destinoY = (Math.random() - 1) * 200; // Se expanden hasta 300px arriba/abajo
        
        span.style.left = x + "px";
        span.style.top = y + "px";
        span.style.fontSize = (Math.random() * 20 + 100) + "px"; // Más grandes
        
        // Aplicamos la expansión mediante CSS dinámico
        span.style.setProperty('--x', `${destinoX}px`);
        span.style.setProperty('--y', `${destinoY}px`);
        
        // Le damos un estilo de transición único
        span.style.transition = "all 1.5s ease-out";
        
        document.body.appendChild(span);

        // Iniciamos la animación de expansión un instante después de crearlos
        setTimeout(() => {
            span.style.transform = `translate(${destinoX}px, ${destinoY}px) scale(0) rotate(${Math.random() * 360}deg)`;
            span.style.opacity = "0";
        }, 10);

        setTimeout(() => { span.remove(); }, 1500);
    }
}