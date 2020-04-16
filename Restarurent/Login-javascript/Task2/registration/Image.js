const inpFile = document.getElementById("inpFile");
const previewContainer = document.getElementById("ImagePreview");
const previewimage = previewContainer.querySelector(".image-preview__image");
const previewDefaultText = previewContainer.querySelector("image-preview__default-text");

inpFile.addEventListener("change",function() {
    const file = this.File[0];
    if (file){
        const reader = new FileReader();
        previewDefaultText.style.display =' none';
        previewimage.style.display ='block';
        reader.addEventListener("load",function name() {
            console.log(this);
            previewimage.setAttribute('src',this.result);
        });
        reader.readAsDataURL(file);
    }
})