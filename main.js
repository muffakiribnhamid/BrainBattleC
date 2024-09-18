document.getElementById('rollForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get roll number input
    const rollNumber = document.getElementById('rollInput').value;
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    
    // Clear previous results and errors
    resultDiv.innerHTML = '';
    errorDiv.innerHTML = '';
    
    // Fetch JSON data
    fetch('output.json')
        .then(response => response.json())
        .then(data => {
            // Find student by form number
            const student = data.find(s => s['Form No.'] == rollNumber);
            
            if (student) {
                // Display result with rank
                resultDiv.innerHTML = `
                    <h3>Congrats! You got Rank ${student['Rank']}</h3>
                    <p>Result for ${student['Name of the Student']}</p>
                    <p>Parentage: ${student['Parentage']}</p>
                    <p>School: ${student['Name of the School']}</p>
                    <p>Centre: ${student['Name of centre']}</p>
                    <p>Grade: ${student['Grade']}</p>
                    <p>English: ${student['English']}</p>
                    <p>Math: ${student['Math']}</p>
                    <p>Science: ${student['Science']}</p>
                    <p>General Knowledge: ${student['General Knowledge']}</p>
                    <p>Logical Reasoning: ${student['Logical Reasoning']}</p>
                    <p>Total: ${student['Total']}</p>
                `;
            } else {
                // Show error if roll number not found
                errorDiv.innerHTML = 'No result found for this Roll Number.';
            }
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
            errorDiv.innerHTML = 'Error fetching results.';
        });
});
