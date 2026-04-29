// 1. Create and Initialize variables (30 XP)
let projectName = "Scrap It App";
let tasksCompleted = 5;
let totalTasks = 12;

// 2. Display variables & Concatenate (35 XP)
const displayArea = document.getElementById('display-area');

// Concatenating two variables (Name + Status)
let statusMessage = "Project: " + projectName;

displayArea.innerHTML = `
    <p><strong>${statusMessage}</strong></p>
    <p>Tasks Finished: ${tasksCompleted}</p>
    <p>Total Requirements: ${totalTasks}</p>
`;

// 3. Perform Math (20 XP)
// Calculating percentage remaining
let tasksLeft = totalTasks - tasksCompleted;
console.log("Tasks remaining until launch: " + tasksLeft);

// 4. Function to Update variables (15 XP)
function updateStats() {
    // Updating at least three variables
    projectName = "Scrap It - Version 2.0";
    tasksCompleted = tasksCompleted + 1; 
    totalTasks = 15; // Increasing scope

    // Re-displaying the updated result
    displayArea.innerHTML = `
        <p><strong>Status: ${projectName}</strong></p>
        <p>Updated Progress: ${tasksCompleted} / ${totalTasks}</p>
        <p>New Math Result: ${totalTasks - tasksCompleted} tasks left!</p>
    `;
    
    alert("Stats updated in the dashboard!");
}