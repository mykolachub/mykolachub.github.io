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
        MainNickname = document.getElementById('nickname__content'),
        ModeLight = document.getElementById('mode__light'),
        ModeDark = document.getElementById('mode__dark'),
        SidebarNickname = document.getElementById('sidebar__nickname_cont');

    
    
    GreetingInput.value = '';


    if (localStorage.getItem('Nickname') != null && localStorage.getItem('User Image') != null) {
        GreetingContainer.style.display = 'none';
        MainPage.style.display = 'grid';
        SidebarNickname.innerText = localStorage.getItem('Nickname');


        RenderingCurrentTime();

        // selecting website's mode
        SelectingMode();
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
    
    function SelectingMode() {
        ModeDark.addEventListener('click', function() {
            ModeDark.classList.toggle('mode__dark-off');
            ModeLight.classList.toggle('mode__light-off');
        });

        ModeLight.addEventListener('click', function() {
            ModeDark.classList.toggle('mode__dark-off');
            ModeLight.classList.toggle('mode__light-off');
        });
    };


    function RenderingCurrentTime() {
        let interval = setInterval(() => {
            let CurrentTime = new Date();
            MainNickname.innerHTML = CurrentTime.getHours()+ ':'+CurrentTime.getMinutes()+':'+CurrentTime.getSeconds();
        }, 1000);
    }
        
        
});