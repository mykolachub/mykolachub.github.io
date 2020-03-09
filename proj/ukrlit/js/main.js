let a;



document.querySelector('#elastic').oninput = function() {
    let val = this.value.trim();
    val = val.toLowerCase();
    let elasticItems = document.querySelectorAll('.elastic span');

    if (val != '') {
        elasticItems.forEach(function (elem) {
            if (elem.innerText.toLowerCase().search(val) == -1) {
                elem.parentElement.parentElement.classList.add('hide');
            }
            else{
                elem.parentElement.parentElement.classList.remove('hide');
                console.log();
            }
        });
    }
    else{
        elasticItems.forEach(function (elem) {
            elem.parentElement.parentElement.classList.remove('hide');
        });
    }
}