chef1_json = {"chef":"Joan Roca","foto":"https://media.revistavanityfair.es/photos/61dd9aa07a73c0abdc133e75/16:9/w_2560%2Cc_limit/C-Joan-pujol-Creus-16880087o.jpg"},{"chef":"Alberto Chicote","foto":"https://www.emprendedores.es/wp-content/uploads/2019/06/alberto-chicote-1560754235-e1600168287565-1024x576.jpg"},{"chef":"Ferran Adrià","foto":"https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2018/06/21/15295684197771.jpg"},{"chef":"Karlos Arguiñano","foto":"https://phantom-marca.unidadeditorial.es/3e6a1b3cd46ec4c7b0f887eb24b0b3e9/resize/1320/f/jpg/assets/multimedia/imagenes/2021/01/29/16119128891397.jpg"},{"chef":"Dani Garcia","foto":"https://s03.s3c.es/imag/_v0/770x420/1/d/9/dani-garcia-2.jpg"},{"chef":"Nusret Gökçe","foto":"https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/11/09/618a8bb08ebd9.jpeg"},{"chef":"Jordi Cruz","foto":"https://thinkingheads.com/wp-content/uploads/2021/04/jodri-cruz-mas-masterchef-chef-thinking-heads-conferenciante.jpg"},{"chef":"Gordon Ramsay","foto":"https://www.cocinayvino.com/wp-content/uploads/2017/07/CroppedFocusedImage96050049-42-Chef-Whites.jpg"}

chef1_html =  chef_toHtml(chef1_json);

document.querySelector('content').innerHTML = (chef1_html);


/*
    <article class = "chef1 foto1">
        <header></header><h2>Joan Roca</h2>
        <img src="" alt="">
    </article>
*/