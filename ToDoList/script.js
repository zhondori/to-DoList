function hechNima() {
    let title = document.querySelector("#name").value;
    let text = document.querySelector("#commit").value;
    if(title !== '' && title !== ' ' && text !== '' && text !== ' '){
        document.querySelector(".big").innerHTML += "<div class='block alert bg-warning alert-dismissible fade show' role='alert'>" + '<h2>' + title + '</h2>' + '<p>' + text + '</p>' +  "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'>" + "</button>" +'</div>';
    }
    else {
        alert("Iltimos, Biror yozuv kiriting!")
    }
}