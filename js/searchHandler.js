document.addEventListener("DOMContentLoaded", function () {
    fetch('media/dummy.json')
        .then(response => response.json())
        .then(guitars => {
            const form = document.getElementById('searchForm');
            form.addEventListener('submit', function (event) {
                event.preventDefault(); // Prevent the default form submission

                const builder = document.getElementById('guitarBuilder').value.toLowerCase();
                const model = document.getElementById('guitarModel').value.toLowerCase();
                const type = document.getElementById('guitarType').value.toLowerCase();
                const backWood = document.getElementById('guitarBackWood').value.toLowerCase();
                const topWood = document.getElementById('guitarTopWood').value.toLowerCase();

                const results = guitars.filter(guitar =>
                    (!builder || guitar.builder.toLowerCase().includes(builder)) &&
                    (!model || guitar.model.toLowerCase().includes(model)) &&
                    (!type || guitar.type.toLowerCase().includes(type)) &&
                    (!backWood || guitar.backWood.toLowerCase().includes(backWood)) &&
                    (!topWood || guitar.topWood.toLowerCase().includes(topWood))
                );

                const resultsTableBody = document.getElementById('resultsTable').querySelector('tbody');
                resultsTableBody.innerHTML = ''; // Clear previous results

                results.forEach(guitar => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${guitar.serialNumber}</td>
                        <td>${guitar.price}</td>
                        <td>${guitar.builder}</td>
                        <td>${guitar.model}</td>
                        <td>${guitar.type}</td>
                        <td>${guitar.backWood}</td>
                        <td>${guitar.topWood}</td>
                    `;
                    resultsTableBody.appendChild(row);
                });

                form.reset(); // Clear the form fields
            });
        })
        .catch(error => console.error('Error fetching guitars data:', error));
});