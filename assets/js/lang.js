document.addEventListener('click', function(event) {
    if (event.target.classList.contains('lang')) {
        console.log('click');
        changeLanguageLink();
    }
});

function changeLanguageLink() {
    let link = window.location.href;
    let new_link = link;
    if (link.includes('/Ar/')) {
        console.log(link.replace('/Ar/', '/En/'));
        window.open(new_link);
    } else {
        console.log(link.replace(/\/[^\/]*\//, '/En/'));
        window.open(new_link);
    }
   
}
