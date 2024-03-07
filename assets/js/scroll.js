// Initialize medium zoom.


document.addEventListener('DOMContentLoaded', function () {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    var scrollToBottomBtn = document.getElementById('scrollToBottomBtn');

    // Show/hide buttons based on scroll position
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = 'block';
            scrollToBottomBtn.style.display = 'none';
        } else {
            scrollToTopBtn.style.display = 'none';
            scrollToBottomBtn.style.display = 'block';
        }
    };

    // Scroll to top function
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Scroll to bottom function
    function scrollToBottom() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }
});
