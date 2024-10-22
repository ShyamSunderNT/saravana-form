let submissionCounter = 0; // Initialize a global counter
document.getElementById('userDataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const tableBody = document.getElementById('tableBody');

    // Create a new row for the submitted data
    const newRow = document.createElement('tr');

    // Add each field to the new row
    newRow.innerHTML = `
    <td>${tableBody.rows.length + 1}</td> <!-- For submission number -->
    <td>${formData.get('name')}</td>
    <td>${formData.get('age')}</td>
    <td>${formData.get('gender')}</td>
    <td>${formData.get('email')}</td>
    <td>${formData.get('address')}</td>
    <td>${formData.get('pincode')}</td>
    <td>${formData.getAll('hobbies').join(', ') || 'None'}</td>
    <td>${formData.get('favoriteSport')}</td>
    <td>${formData.get('phone')}</td>
    <td>${formData.get('occupation')}</td>
    <td>${formData.get('country')}</td>
    <td>${formData.get('education')}</td>
    <td>${formData.get('interests') || 'None'}</td>
    <td>${formData.getAll('pets').join(', ') || 'None'}</td>
    <td>${formData.get('contactMethod')}</td>
`;

    // Append the new row to the table body
    tableBody.appendChild(newRow);

    // Reset the form
    this.reset();
});
