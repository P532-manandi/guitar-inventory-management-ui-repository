document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('guitarForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        const jsonData = JSON.stringify(data, null, 2);
        alert(`Form Data:\n${jsonData}`);
    });
});