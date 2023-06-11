document.addEventListener('DOMContentLoaded', function() {
    function checkHash() {
        const hash = window.location.hash.substring(1); 

        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.style.display = 'none';
        });

        const targetModal = document.getElementById(hash);
        if (targetModal) {
            targetModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    checkHash();

    window.addEventListener('hashchange', checkHash);

    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.querySelector('.close').addEventListener('click', function() {
            window.location.hash = "";
        });

        modal.addEventListener('click', function(event) {
            if (event.target == this) {
                window.location.hash = "";
            }
        });
    });
});
