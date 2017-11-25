var icon           = document.querySelector('#icon');
var dropdown       = document.querySelector('#dropdown');
var dropdownSocial = document.querySelector('#dropdown-social');
var isOn = false;

icon.addEventListener('click', function(){
    icon.classList.toggle('active');
    if(isOn){
        dropdown.style.display = 'none';
        dropdownSocial.style.display = 'none';        
    }else{
        dropdown.style.display = 'block';
        dropdownSocial.style.display = 'block';        
    }
    isOn = !isOn;    
})
