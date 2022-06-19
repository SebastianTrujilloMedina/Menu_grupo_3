/*Función que obtiene los menús de la base de datos */

function getDataChefs(){
    let chefs_json = JSON.parse(chefs)
    return chefs_json;
}

//Función que recorre un array de objetos json, lo recorre y lo muestra en el <content>

function displayDataChefs(data){
    let chefs_html = '';

    for (let i = 0; i < data.length; i++){
        chefs_html += chefs_toHtml(data[i])
    }

    document.querySelector('content').innerHTML = (chefs_html);

}

//Dado un objeto Json de un chef, devuelve su correspondiente html

function chefs_toHtml(chefs){
    let chefs_toHtml = `<article class="menu">\
                            <div class="presentacion">\
                            <a href ="#" target="_blank"> <h2>${chefs.chef}</h2></a>\
                            </div>\
                            <img  src="${chefs.imagen}" style="width:250px; height:200px">\
                        </article>`;
    return chefs_toHtml;
}

function main_chefs(){
    data = getDataChefs();
    displayDataChefs(data);
}
main_chefs()