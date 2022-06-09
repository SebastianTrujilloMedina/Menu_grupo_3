
/*Funciones página indice_menus.html*/

/*Función que obtiene los menús de la base de datos */
function getDataMenus(){
    let menus_json = JSON.parse(menus);
    return menus_json;
}

/*Función que recorre el array de menús de objetos JSON y lo muestra*/
function displayDataMenus (data){
    let menus_html = '';

    for (let i = 0; i < data.length; i++){
        menus_html += menus_toHTML(data[i]);
    }

    document.querySelector('menus').innerHTML = menus_html;
}

/*Dado un objeto JSON de menú, devuelve su correspondiente HTML*/
function menus_toHTML (menus){
    let menus_toHtml = '<article class="menu " '+ menus.menu + '>\
        <div class="presentacion">\
        <h2>Menú ' + menus.menu + '</h2>\
        <p>' + menus.descripcion + '</p>\
        </div>\
        <div class="primer_plato">\
        <img src="' + menus.imagenprimero +'" alt="'+menus.primero+'">\
        <figcaption>' + menus.primero + '</figcaption>\
        </div>\
        <div class="segundo_plato">\
        <img src="' + menus.imagensegundo +'" alt="'+menus.segundo+'">\
        <figcaption>' + menus.segundo + '</figcaption>\
        </div>\
        <div class="postre">\
        <img src="' + menus.imagenpostre +'" alt="'+menus.postre+'">\
        <figcaption>' + menus.postre + '</figcaption>\
        </div>\
        <div class="cafe">\
        <p>Café: ' + menus.cafe + '</p>\
        </div>\
        <div class="bebida">\
        <img src="' + menus.imagenbebida +'" alt="'+menus.bebidas +'">\
        <figcaption>' + menus.bebidas + '</figcaption>\
        </div>\
        <div class="info_adicional">\
        <p><b>Días disponibles</b>: ' + menus.dia + '<p>\
        <div class="chef">\
        <p><b>Chef</b><br>\
        <img src="' + menus.imagenchef +'" alt="'+menus.chef +'">\
        <figcaption>' + menus.chef + '</figcaption>\
        </div>\
        <p><b>Precio</b>: ' + menus.precio + ' €</p>\
        </article>';

        return menus_toHtml;
}

function main(){
    data = getDataMenus();
    displayDataMenus(data);
}
