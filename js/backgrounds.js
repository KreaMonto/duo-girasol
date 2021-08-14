var backgrounds = [];
backgrounds[0] = "./img/header/img1.jpg";
backgrounds[1] = "./img/header/img2.jpg";
backgrounds[2] = "./img/header/img3.jpg";
backgrounds[3] = "./img/header/img4.jpg";
backgrounds[4] = "./img/header/img5.jpg";
changeHeaderImg();
function changeHeaderImg() {
    var num = aleatory(0, 4);
    document.getElementById("himg").src = backgrounds[num];
}
function aleatory(min, maxi) {
    var result;
    result = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return result;
}
