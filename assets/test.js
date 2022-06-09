menu1_json = {

        "menu":"Del día 1",
        "descripcion":"Para el primer día del mes que mejor que empezar con una combinación de pescado y carne, junto con nuestra torrija al estilo tradicional hará que empiece el mes con mucha alegría y fuerza.",
        "primero":"Trucha marinada con salsa de albahaca y champiñones al ajillo",
        "imagenprimero":"https://s1.eestatic.com/2015/10/26/cocinillas/cocinillas_74502754_116219957_1100x747.jpg",
        "segundo":"Salchicha al vino con huevos escalfados",
        "imagensegundo":"https://cdn1.cocina-familiar.com/recetas/thumb/salchichas-vino-huevos-escalfados.JPG",
        "postre":"Torrija con bola de helado de vainilla",
        "imagenpostre":"https://www.lamansiondelasideas.com/wp-content/uploads/2022/03/Receta-torrijas-de-helado.jpg",
        "cafe":"Café Expresso",
        "bebidas":"Agua",
        "imagenbebida":"https://d500.epimg.net/cincodias/imagenes/2021/03/18/fortunas/1616089176_757871_1616094884_noticia_normal.jpg",
        "dia":1,
        "chef":"Gordon Ramsay",
        "imagenchef":"https://www.cocinayvino.com/wp-content/uploads/2017/07/CroppedFocusedImage96050049-42-Chef-Whites.jpg",
        "precio":15
    }

menu2_json = {
        "menu":"Del día 2",
        "descripcion":"Para el día de hoy te proponemos una combinación de berenjenas agridulces junto con su hamburguesa para hacer una gran combinación de primer plato que junto a nuestro jamón asado al horno y nuestras tortitas caseras, harán que te chupes los dedos.",
        "primero":"Berenjenas agridulces con hambburguesa de ternera a la plancha",
        "imagenprimero":"https://s1.eestatic.com/2015/10/22/cocinillas/cocinillas_73502862_116217941_1100x733.jpg",
        "segundo":"Jamon asado al horno con su salsa",
        "imagensegundo":"https://cdn1.cocina-familiar.com/recetas/thumb/jamon-asado-al-horno-con-su-salsa-receta-para-navidad.JPG",
        "postre":"Tortitas con sirope de chocolate",
        "imagenpostre":"https://www.demoslavueltaaldia.com/sites/default/files/tortitas_con_sirope_de_chocolate_casero_600x375.jpg",
        "cafe":"Café Cortado",
        "bebidas":"Coca-cola",
        "imagenbebida":"https://m.media-amazon.com/images/I/5156FefjlqL._SX425_.jpg",
        "dia":2,
        "chef":"Gordon Ramsay",
        "imagenchef":"https://www.cocinayvino.com/wp-content/uploads/2017/07/CroppedFocusedImage96050049-42-Chef-Whites.jpg",
        "precio":15
}

menu1_html = menus_toHTML(menu1_json);
document.querySelector('menus').innerHTML = menu1_html;
