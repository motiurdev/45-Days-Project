var boxes = document.querySelectorAll('.box');

window.addEventListener("scroll", checkBoxes)

function checkBoxes(){
    var windowsHeight = window.innerHeight / 5 *4;
    boxes.forEach(box => {
        var boxTop = box.getBoundingClientRect().top;
        
        if(boxTop < windowsHeight){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}