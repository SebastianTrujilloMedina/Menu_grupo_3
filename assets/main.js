
/*Funciones página indice_menus.html*/

<<<<<<< Updated upstream
/*Función que obtiene los menús de la base de datos */
function getDataMenus(){
    let menus_json = JSON.parse(menus);
=======
console.log('Menus')

function getData(){
    let menus_json = JSON.parse(menus)
>>>>>>> Stashed changes
    return menus_json;
}

/*Función que recorre el array de menús de objetos JSON y lo muestra*/
function displayDataMenus (data){
    let menus_html = '';

<<<<<<< Updated upstream
    for (let i = 0; i < data.length; i++){
        menus_html += menus_toHTML(data[i]);
=======
    for( var i = 0; i < data.length; i++){
        menus_html += menu_tohtml(data[i])
        if(i<data.length-1 && data[i].season !=data[i+1].season){
            menus.html += "<h2>Menus</h2>";
        }

>>>>>>> Stashed changes
    }

<<<<<<< Updated upstream
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
=======
    for(var i = 0; i < data.length; i++){
        if(data[i].season == season){
            menu_html += menu_toHTML(data[i])
        }
    }
    document.querySelector('content').innerHTML = menus_html;
}

function menu_toHTML(menu){
    let menuso='<article class="menus ' + episode.season +' type_regular" id="'+menu+'">\
                <header>\
                <h2>'+menu.name+'<h2>\
                <img src="'+menu.image+'" alt="'+menu.name+'">\
                </header>\
                <content>\
                <strong>Descripcion:</strong><br />\
                <p>'+menu.summary+'</p>\
                <content>\
                </article>';

    return menuso
}

function main(){
    data = getData()
    displayData(data)
}

main();

>>>>>>> Stashed changes

function main(){
    data = getDataMenus();
    displayDataMenus(data);
}
