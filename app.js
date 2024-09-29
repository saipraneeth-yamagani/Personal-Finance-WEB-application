let income = 0;
let expense = 0;

function addIncome() {
    const value = parseFloat(document.getElementById('income').value);
    if (!isNaN(value)) {
        income += value;
        updateChart();

    }
}

function addExpense() {
    const value = parseFloat(document.getElementById('expense').value);
    if (!isNaN(value)) {
        expense += value;
        updateChart();
    }
}

function updateChart() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: '',
        type: 'doughnut',
                data: {
            labels: ['Income', 'Expense'],
            datasets: [{
                data: [income, expense],
                backgroundColor: ['#28a745', '#dc3545']
            }]
        }
        
    });


    myChart.update();
}
