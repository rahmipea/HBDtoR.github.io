let currentPage = 1;
const totalPages = document.querySelectorAll(".page").length;

function showPage(pageNumber) {
    document.querySelectorAll(".page").forEach((page) => {
        page.classList.remove("active");
    });
    document.querySelector(`.page-${pageNumber}`).classList.add("active");
}

function nextPage(current) {
    if (current < totalPages) {
        showPage(current + 1);
    }
}

function prevPage(current) {
    if (current > 1) {
        showPage(current - 1);
    }
}