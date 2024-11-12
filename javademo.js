let namastebtn=document.querySelector('button');
namastebtn.addEventListener('click',inputMsg);
function inputMsg(){
    let name =prompt('enter name of student');
    namastebtn.textContent='roll no.1:'+name;
}
