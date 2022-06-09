/*let menu_json = JSON.parse(menus);
let menus = "";

for (let i=0; i < menu_json.length;i++){
    menus += "<p>" + "Descripción: " + menu_json[i].descripcion + "<p>";
}

document.getElementsByClassName('lista_menu')[0].innerHTML = lista;*/


console.log('Menus')

function getData(){
    let menus_json = JSON.parse(rym)
    return menus_json;
}

function displayData(data){
    let menus_html = '';

    for( var i = 0; i < data.length; i++){
        menus_html += menus_tohtml(data[i])
        if(i<data.length-1 && data[i].season !=data[i+1].season){
            menus.html += "<h2>Menus</h2>";
        }

    }
    document.querySelector('content').innerHTML = menus_html;
}

function displaySeason(data, season){
    let menu_html = '';

    for(var i = 0; i < data.length; i++){}
}



