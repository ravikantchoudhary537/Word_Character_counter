let textarea = document.getElementById('textarea');
textarea.addEventListener('input',function(){
    let text = this.value;
    document.getElementById('char').innerHTML = text.length;


    text  = text.trim();
    let word = text.split(" ");
    let cleanList = word. filter(function(e){
    return e!="";
    })
    document.getElementById('word').innerHTML =cleanList.length;
});

