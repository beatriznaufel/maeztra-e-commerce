function busca(search) {
    switch (search) {
        case 'camiseta':
            alert('Camiseta encontrada')
            break;

        case 'tenis':
            alert('Tenis encontrado')
            break;

        default:
            alert('Produto nao encontrado')
            break;
    }
}

document.getElementById('busca').onclick = function () {

    var valueInputBusca = document.getElementsByClassName("campo-busca")[0].value;

    busca(valueInputBusca)
}

function closePopup() {
    document.getElementsByClassName('popup')[0].style.display = 'none';
}

document.getElementById('close').onclick = function () {
    closePopup();
}

document.getElementsByClassName('popup')[0].onclick = function () {
    closePopup();
}