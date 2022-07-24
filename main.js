function radiobtn (){
    var rdbtn=document.getElementsByName('gender');
    for(var i=0; i<rdbtn.length; i++){
        if(rdbtn[i].checked){
            alert('Choosen '  + i + ' element')
        }
    }
}

var fname=document.getElementById('fname');

function handleClick() {
    if (fname.value !== "") {
        err.innerText = "";
        title.innerText = fname.value
    } else {
        err.innerText = "The field is required"
    }
}

fname.addEventListener('change', handleClick)