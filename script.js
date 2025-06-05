const USER_DATABASE = {
    "admin": { password: "admin123", role: "Admin" },
    "user": { password: "user123", role: "Registered User" },
    "client": { password: "client123", role: "Client" }
};

document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.createElement("button");
    loginButton.innerText = "Login";
    loginButton.addEventListener("click", handleLogin);
    document.querySelector("header").appendChild(loginButton);
});

function handleLogin() {
    const username = prompt("Enter username:");
    const password = prompt("Enter password:");

    if (USER_DATABASE[username] && USER_DATABASE[username].password === password) {
        alert(`Welcome, ${username}!`);
        displayMainMenu(USER_DATABASE[username].role);
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

function displayMainMenu(role) {
    const mainMenu = document.createElement("div");
    mainMenu.id = "main-menu";
    mainMenu.style.marginTop = "20px";

    const message = document.createElement("p");
    message.innerText = `You are logged in as: ${role}`;
    mainMenu.appendChild(message);

    const menuList = document.createElement("ul");
    let options = [];
    if (role === "Admin") {
        options = ["Manage Users", "View Reports", "Logout"];
    } else if (role === "Registered User") {
        options = ["View Tasks", "Collaborate with Team", "Logout"];
    } else if (role === "Client") {
        options = ["View Reports", "Contact Admin", "Logout"];
    }

    options.forEach(option => {
        const listItem = document.createElement("li");
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => handleMenuOption(option, role));
        listItem.appendChild(button);
        menuList.appendChild(listItem);
    });

    mainMenu.appendChild(menuList);
    document.querySelector("main").innerHTML = ""; // Clear main content
    document.querySelector("main").appendChild(mainMenu);
}

function handleMenuOption(option, role) {
    if (option === "Logout") {
        alert("You have been logged out.");
        document.querySelector("main").innerHTML = ""; // Clear content
    } else {
        alert(`Functionality for "${option}" as ${role} is under construction.`);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    // Add event listener to the Task Management button/link
    const taskManagementButton = document.querySelector('#task-management .nav-link button');
    if (taskManagementButton) {
        taskManagementButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            window.location.href = 'task-management.html'; // Navigate to Task Management page
        });
    }
});
