const ulLibros = document.querySelector('.libros');

document.addEventListener('DOMContentLoaded', function(){
    getLibros();
})

async function getLibros(){
    const url = "libros.json";
    const response = await fetch(url);
    const result = await response.json();
    result.forEach(libro => {
        const liLibro = document.createElement('LI');
        const aLibro = document.createElement('A');
        const headerLibro = document.createElement('DIV'); 
        const imgLibro = document.createElement('IMG');
        const bodyLibro = document.createElement('DIV');
        const tituloLibro = document.createElement('DIV');
        const pTitulo = document.createElement('P');
        const autorLibro = document.createElement('DIV');
        const pAutor = document.createElement('P');

        liLibro.classList.add('libro');
        headerLibro.classList.add('header-libro');
        bodyLibro.classList.add('body-libro');
        tituloLibro.classList.add('titulo');
        autorLibro.classList.add('autor');

        imgLibro.src = libro.img

        headerLibro.appendChild(imgLibro);

        pTitulo.textContent = libro.titulo;
        tituloLibro.appendChild(pTitulo);

        pAutor.textContent = libro.autor;
        autorLibro.appendChild(pAutor);

        bodyLibro.appendChild(tituloLibro);
        bodyLibro.appendChild(autorLibro);

        aLibro.href = libro.url;

        aLibro.appendChild(headerLibro);
        aLibro.appendChild(bodyLibro);

        liLibro.appendChild(aLibro);

        ulLibros.appendChild(liLibro);
    });
}