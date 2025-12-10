// document.addEventListener('click', function(event) {
//     if (event.target.classList.contains('lang')) {
//         console.log('click');
//         changeLanguageLink();
//     }
// });

document.addEventListener('click', function(event) {
    // Check if the clicked target is a <p> within a <div> of class 'lang'
    console.log('click');
    if (event.target.closest('.lang')) {
        changeLanguageLink();
    }
});

function changeLanguageLink() {
    let link = window.location.href;
    console.log(link);
    let new_link = "";
    if (link.includes('/En/')) {
        console.log('en');

        new_link = link.replace('/En/', '/Ar/');
        window.open(new_link,'_self');
    } else if (link.includes('/Ar/')) {
        console.log('ar');
        new_link = link.replace('/Ar/', '/En/');
        window.open(new_link,'_self');
    }
   else{
    console.log('no');
     return;
   }
}
