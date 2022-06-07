let menu_json = JSON.parse(menus);
let menus = "";

for (let i=0; i < menu_json.length;i++){
    menus += "<p>" + "Descripción: " + menu_json[i].descripcion + "<p>";
}

document.getElementsByClassName('lista_menu')[0].innerHTML = lista;



