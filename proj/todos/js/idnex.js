'use strict';

document.addEventListener('DOMContentLoaded', () =>{
    console.log('js connected');

    // first window (modal)
    let GreetingInput = document.getElementById('input__nickname'),
        GreetingBtnStart = document.getElementById('modal__greeting-btn'),
        globalNickname,
        GreetingContainer = document.getElementById('modal__greeting'),
        GreetingNicknameBody = document.getElementById('modal__greeting_body'),
        GreetingImageBody = document.getElementById('modal__greeting_image');

    let MainPage = document.getElementById('main__page'),
        WindowNotes = document.getElementById('window-notes'),
        iconWrapper = document.getElementById('icon__wrapper'),
        IconItems = document.querySelectorAll('.icon__item'),
        input = document.getElementById('input'),
        list = document.getElementById('list__active'),
        enter = document.getElementById('button');

    let ListItemsContainer = {
        ListArray: []
    };

    
    let mousePageX,
        mousePageY,
        mouseOffsetX,
        mouseOffsetY;
    GreetingInput.value = '';


    if (localStorage.getItem('Nickname') != null && localStorage.getItem('User Image') != null) {
        GreetingContainer.style.display = 'none';
        MainPage.style.display = 'block';
        WindowInit();

        ListToDo();
    } else {

        FirstRun();
        // then page getting reloaded and runs code above
    };


    function FirstRun() {
        GreetingInput.addEventListener('input', ()=>{
            if (GreetingInput.value == 0) {
                GreetingBtnStart.style.opacity = '0';
            }
            else if(GreetingInput.value !=''){
                GreetingBtnStart.style.opacity = '1';
    
                // first step (writting a nickname)
                GreetingBtnStart.addEventListener('click', ()=>{
                    if (GreetingInput.value !='') {
                        console.log(GreetingInput.value);
                        globalNickname = GreetingInput.value;
                        localStorage.setItem('Nickname', globalNickname);
                        GreetingNicknameBody.classList.add('modal__greeting-body-off');

                        // second step (selecting an image)
                        SelectingImage();
                    } else {
                       console.error; 
                    };
                });
            }
            else {
                console.log(GreetingInput.value);
            }
        });


    };

    function SelectingImage() {
        GreetingImageBody.classList.add('modal__greeting-image-on');

        const inputImage = document.getElementById('modal__btn-select_image');
        const ImageContainer = document.getElementById('modal__image_container');
        const Image = document.getElementById('modal__image');
        const btnUpload = document.getElementById('modal__btn-upload_image');

        inputImage.addEventListener('change', function(){
            const file = this.files[0];

            if (file) {
                const reader = new FileReader();

                reader.readAsDataURL(file);

                reader.addEventListener('load', function() {
                    Image.setAttribute('src', this.result);
                    ImageContainer.classList.remove('modal__greeting-image_body-off');
                    localStorage.setItem('User Image', this.result);
                    console.log('Image successfuly uploaded');
                });
                
                btnUpload.addEventListener('click', function() {
                    document.location.reload();
                });
            };
        });
    };

    function RenderingCurrentTime() {
        let interval = setInterval(() => {
            let CurrentTime = new Date();
            HeaderTime.innerHTML = CurrentTime.getHours()+ ':'+CurrentTime.getMinutes()+':'+CurrentTime.getSeconds();
        }, 1000);
    };
        
    function WindowInit() {
        IconItems.forEach(element => {
            element.setAttribute('draggable', 'true');

            element.addEventListener('dragstart', function(event) {
               mouseOffsetX = event.offsetX;
               mouseOffsetY = event.offsetY; 
            });
            //console.log(element);
            element.addEventListener('dragend', function (event) {
                mousePageX = event.pageX;
                mousePageY = event.pageY;
                this.style.top = (mousePageY - mouseOffsetY) + 'px';
                this.style.left = (mousePageX - mouseOffsetX) + 'px';
            });

            element.addEventListener('dblclick', ()=>{
                console.log(element.dataset.window);
                document.getElementById(element.dataset.window).classList.add('window-open');

                document.getElementById(element.dataset.window + '-close').addEventListener('click', ()=>{
                    document.getElementById(element.dataset.window).classList.remove('window-open');
                });

                document.getElementById(element.dataset.window + '-help').addEventListener('click', ()=>{
                    alert('i have like nothing to help you with (:')
                });

                document.getElementById(element.dataset.window + '-drag').addEventListener('dragstart', function(event) {
                    mouseOffsetX = event.offsetX;
                    mouseOffsetY = event.offsetY; 
                });

                document.getElementById(element.dataset.window + '-drag').addEventListener('dragend', function(event) {
                    mousePageX = event.pageX;
                    mousePageY = event.pageY;
                    document.getElementById(element.dataset.window).style.top = (mousePageY - mouseOffsetY) + 'px';
                    document.getElementById(element.dataset.window).style.left = (mousePageX - mouseOffsetX) + 'px';
                });
            });
        });

        
    };

    function ListToDo(params) {
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
    };
        
});

