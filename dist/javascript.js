let btnDownload = document.querySelector('button');
let p = document.querySelector('p');
 
 
// Must use FileSaver.js 2.0.2 because 2.0.3 has issues.
btnDownload.addEventListener('click', () => {
    let imagePath = p.getAttribute('src');
    let fileName = getFileName(imagePath);
    saveAs(imagePath, fileName);
});
 
function getFileName(str) {
    return str.substring(str.lastIndexOf('/') + 1)
}