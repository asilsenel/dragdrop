const dropArea = document.querySelector(".drag-area"),
dragText = dropArea.querySelector("header");
const orSpan = document.getElementById("or");
const btnBrowse = document.getElementById("btnBrowse");

let file;
//if user drags file over droparea
dropArea.addEventListener("dragover", (event)=>{
    event.preventDefault();
    dropArea.classList.add("active");
    dragText.textContent = "Dosyaları Yüklemek İçin Bırakın";
});

//if user quits dragged file from droparea
dropArea.addEventListener("dragleave", ()=>{
    dropArea.classList.remove("active");
    dragText.textContent = "Dosyaları Yüklemek İçin Sürükleyip Bırakın";
});

dropArea.addEventListener("drop",(event)=>{
    dropArea.classList.remove("active");
    dragText.textContent = "Dosya yüklendi";
    orSpan.classList.add("hide");
    btnBrowse.classList.add("hide");
    window.setTimeout(function(){
        orSpan.classList.remove('hide');
        btnBrowse.classList.remove('hide');
        dragText.textContent = "Dosyaları Yüklemek İçin Sürükleyip Bırakın";
    },2500);
}); 


/*//if user drops file on droparea
dropArea.addEventListener("drop", (event)=>{
    file = event.dataTransfer.files[0];
    let fileType = file.type;
    let validExtensions = ["image/jpeg","image/jpg","image/png"];
    if(validExtensions.includes(fileType)){

    }
    else{

    }
});*/

