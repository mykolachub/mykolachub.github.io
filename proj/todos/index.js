'use strict';

document.addEventListener('DOMContentLoaded', () =>{
console.log('kok is here');

    let input = document.getElementById('input'),
        list = document.getElementById('list'),
        enter = document.getElementById('button');

    // first ver
    /*input.addEventListener('change', ()=>{
        let ListItem = document.createElement("li");
        ListItem.innerHTML = input.value;
        list.appendChild(ListItem);
    })*/

    
    
    let ListItemsContainer = {
        ListArray: []
    };

    if (localStorage.getItem('List') != null) {
        
        let ListStorage = localStorage.getItem('List');
        ListStorage = JSON.parse(ListStorage);
        console.log(typeof(ListStorage) );
        console.log('ListStorage: ', ListStorage);

        for (let i = 0; i < ListStorage.length; i++) {
            
            let ListItem = document.createElement("li");
            ListItem.innerHTML = ListStorage[i];
            list.appendChild(ListItem);
        }
    }

    // sec ver
    /*input.addEventListener('input', () =>{
        let ListItem = document.createElement("li");
        ListItem.innerHTML = input.value.trim();
        list.appendChild(ListItem);

        ListItemsContainer.push(`${ListItem.innerHTML}`);

        localStorage.setItem('List', ListItemsContainer);
    });*/

    enter.addEventListener('click', ()=>{
        let res = input.value;
        if (res != '') {
            console.log('Внутри: ' + res);

            let ListItem = document.createElement("li");
            ListItem.innerHTML = res.trim();
            list.appendChild(ListItem);


            ListItemsContainer.ListArray.push(`${ListItem.innerHTML}`);
            console.log(ListItemsContainer.ListArray);

            localStorage.setItem('List', JSON.stringify(ListItemsContainer.ListArray));
        } else{
            return;
        }
    });

    for (let i = 1; i < list.childNodes.length; i++) {
        ListItemsContainer.ListArray.push(`${list.childNodes[i].innerHTML}`);


    }

});