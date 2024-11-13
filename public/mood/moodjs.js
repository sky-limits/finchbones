const moodData = {
    labels: [],
    datasets: [{
        label: 'Mood Over Time',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

const ctx = document.getElementById('moodChart').getContext('2d');
const moodChart = new Chart(ctx, {
    type: 'line',
    data: moodData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                suggestedMax: 4,
                ticks: {
                    callback: function(value) {
                        return value === 1 ? '😞 Sad' : value === 2 ? '😐 Neutral' : value === 3 ? '😊 Happy' : value === 4 ? '😠 Angry' : '';
                    }
                }
            }
        }
    }
});

// Load moods from localStorage
function loadMoods() {
    const moods = JSON.parse(localStorage.getItem('moods')) || [];
    moods.forEach(mood => {
        moodData.labels.push(mood.date);
        moodData.datasets[0].data.push(mood.value);
    });
    moodChart.update();
}

document.getElementById("add-mood-button").addEventListener("click", function() {
    const moodSelect = document.getElementById("mood-select");
    if (moodSelect.value) {
        const moodValue = parseInt(moodSelect.value);
        const today = new Date().toLocaleDateString();

        // Update chart data
        moodData.labels.push(today);
        moodData.datasets[0].data.push(moodValue);
        moodChart.update();

        // Save mood to localStorage
        const moods = JSON.parse(localStorage.getItem('moods')) || [];
        moods.push({ date: today, value: moodValue });
        localStorage.setItem('moods', JSON.stringify(moods));

        moodSelect.value = ""; // Reset selection
    } else {
        alert("Please select a mood.");
    }
});

// Load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        addTaskToLog(task);
    });
}

document.getElementById("add-task-button").addEventListener("click", function() {
    const taskInput = document.getElementById("task-input");
    if (taskInput.value) {
        addTaskToLog(taskInput.value);
        taskInput.value = ""; // Reset input
    } else {
        alert("Please enter a task.");
    }
});

function addTaskToLog(task) {
    const taskLog = document.getElementById("task-log");
    const taskItem = document.createElement("div");
    taskItem.classList.add("log-item");
    taskItem.innerHTML = `
        <input type="checkbox" class="checkbox" onchange="checkTask(this)">
        <span>${task}</span>
    `;
    taskLog.appendChild(taskItem);
    
    // Save task to localStorage
    saveTasks();
}

function checkTask(checkbox) {
    const taskItem = checkbox.parentElement;
    if (checkbox.checked) {
        taskItem.style.display = "none"; // Hide the task when checked
        saveTasks();
    }
}

// Save tasks to localStorage
function saveTasks() {
    const tasks = Array.from(document.querySelectorAll("#task-log .log-item"))
        .map(item => item.querySelector('span').textContent);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Initialize app
loadMoods();
loadTasks();
