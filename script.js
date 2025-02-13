function showBook() {
    document.querySelector('.main-page').classList.add('hidden');
    document.querySelector('.book-container').classList.remove('hidden');
    const pages = document.querySelectorAll('.page');
    let currentPage = 0;

    function flipPage() {
        if (currentPage < pages.length - 1) {
            pages[currentPage].style.transform = 'rotateY(-180deg)';
            currentPage++;
        }
    }

    document.addEventListener('click', flipPage);
}
