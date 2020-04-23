'use strict';

document.addEventListener('DOMContentLoaded', () =>{
    console.log(`kok's project is here`);

    let input = document.getElementById('input'),
        list = document.getElementById('list'),
        enter = document.getElementById('button');

    // first ver
    /*input.addEventListener('change', ()=>{
        let ListItem = document.createElement("li");
        ListItem.innerHTML = input.value;
        list.appendChild(ListItem);
    })*/

    // sec ver
    /*input.addEventListener('input', () =>{
        let ListItem = document.createElement("li");
        ListItem.innerHTML = input.value.trim();
        list.appendChild(ListItem);

        ListItemsContainer.push(`${ListItem.innerHTML}`);

        localStorage.setItem('List', ListItemsContainer);
    });*/
    
    
    let ListItemsContainer = {
        ListArray: []
    };

    if (localStorage.getItem('List') != null) {
        
        let ListStorage = JSON.parse(localStorage.getItem('List'));    
        console.log('%cLocalStorage is active ', 'color: lightblue', ListStorage);

        for (let i = 0; i < ListStorage.length; i++) {
            
            let ListItem = document.createElement("li");
            ListItem.innerHTML = ListStorage[i];

            // if required to remove
            if (ListItem.addEventListener('click', ()=>{
                console.log('%cLOCAL removing process was started', 'color: lightblue');
                console.log('   %c|', 'color: lightblue', 'removing of ', `${ListItem.innerHTML}`);
                console.log('   %c|', 'color: lightblue', 'its index in array', ListItemsContainer.ListArray.indexOf(ListItem.innerHTML));
                list.removeChild(ListItem);
                ListItemsContainer.ListArray.splice(ListItemsContainer.ListArray.indexOf(ListItem.innerHTML), 1);
                localStorage.setItem('List', JSON.stringify(ListItemsContainer.ListArray));
                console.log('   %c|', 'color: lightblue', 'array after removing ', ListItemsContainer.ListArray);
                console.log('   %c|', 'color: lightblue', 'LocalStorage after removing ', ListStorage);
            })){ 
            }
            // if NOT required to remove
            else{
                list.appendChild(ListItem);
            }  

        }
    }  else{
        console.log('%cLocalStorage is not active ', 'color: orange');
    }

    enter.addEventListener('click', ()=>{
        let res = input.value;
        if (res != '') {
            let ListItem = document.createElement("li");
            ListItem.innerHTML = res.trim();

            // if required to remove
            if (ListItem.addEventListener('click', ()=>{
                console.log('%cGLOBAL removing process was started', 'color: lightgreen');
                console.log('   %c|', 'color: lightgreen', 'removing of ', `${ListItem.innerHTML}`);
                console.log('   %c|', 'color: lightgreen', 'its index in array', ListItemsContainer.ListArray.indexOf(ListItem.innerHTML));
                list.removeChild(ListItem);
                ListItemsContainer.ListArray.splice(ListItemsContainer.ListArray.indexOf(ListItem.innerHTML), 1);
                console.log('   %c|', 'color: lightgreen', 'array after removing ', ListItemsContainer.ListArray);
                localStorage.setItem('List', JSON.stringify(ListItemsContainer.ListArray));
            })) {
                
            }

            // if NOT required to remove
            else{
                list.appendChild(ListItem);
                ListItemsContainer.ListArray.push(`${ListItem.innerHTML}`);
                localStorage.setItem('List', JSON.stringify(ListItemsContainer.ListArray));
            }      

            
        } 
        // if nothing was entered
        else{
            console.log('%cnothing was entered! ', 'color: orange');
            return;
        }
    });


    for (let i = 1; i < list.childNodes.length; i++) {
        ListItemsContainer.ListArray.push(`${list.childNodes[i].innerHTML}`);
    }


    

});