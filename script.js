// Sample Data
let projects = ["Website Redesign", "Mobile App", "Marketing Campaign"];
let teams = ["Frontend Team", "Backend Team", "Design Team"];
let tasks = [
    { name: "Design UI", project: "Website Redesign", team: "Design Team", status: "Pending" },
    { name: "Setup Backend", project: "Mobile App", team: "Backend Team", status: "In Progress" },
    { name: "Social Media Ads", project: "Marketing Campaign", team: "Frontend Team", status: "Completed" }
];

// Show section
function showSection(id) {
    document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
    document.getElementById(id).style.display = 'block';
    if(id === 'dashboard') updateDashboard();
    if(id === 'projects') updateProjects();
    if(id === 'teams') updateTeams();
    if(id === 'tasks') updateTasks();
}

// Dashboard update
function updateDashboard() {
    document.getElementById('total-projects').innerText = projects.length;
    document.getElementById('total-tasks').innerText = tasks.length;
    const completed = tasks.filter(t => t.status === "Completed").length;
    document.getElementById('completed-tasks').innerText = completed;
}

// Projects
function updateProjects() {
    const list = document.getElementById('project-list');
    list.innerHTML = '';
    projects.forEach(p => {
        const li = document.createElement('li');
        li.innerText = p;
        list.appendChild(li);
    });
}

function addProject() {
    const name = prompt("Enter project name:");
    if(name) {
        projects.push(name);
        updateProjects();
        updateDashboard();
    }
}

// Teams
function updateTeams() {
    const list = document.getElementById('team-list');
    list.innerHTML = '';
    teams.forEach(t => {
        const li = document.createElement('li');
        li.innerText = t;
        list.appendChild(li);
    });
}

function addTeam() {
    const name = prompt("Enter team name:");
    if(name) {
        teams.push(name);
        updateTeams();
    }
}

// Tasks
function updateTasks() {
    const tbody = document.querySelector('#task-table tbody');
    tbody.innerHTML = '';
    tasks.forEach(task => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${task.name}</td><td>${task.project}</td><td>${task.team}</td><td>${task.status}</td>`;
        tbody.appendChild(tr);
    });
}

function addTask() {
    const name = prompt("Enter task name:");
    const project = prompt("Enter project name:");
    const team = prompt("Enter team name:");
    const status = prompt("Enter status (Pending/In Progress/Completed):");
    if(name && project && team && status) {
        tasks.push({ name, project, team, status });
        updateTasks();
        updateDashboard();
    }
}

// Initialize
showSection('dashboard');