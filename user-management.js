// Mock user database
const usersDatabase = [
    { username: "admin", password: "admin123", role: "Admin" },
    { username: "user", password: "user123", role: "Registered User" },
    { username: "client", password: "client123", role: "Client" }
];

// Simulate logged-in user
let currentUser = usersDatabase[0]; // Assuming "admin" is logged in

// Display the main menu based on the logged-in user's role
document.getElementById("user-role").textContent = `You are logged in as: ${currentUser.role}`;

const menuOptions = document.getElementById("menu-options");
menuOptions.innerHTML = '';

if (currentUser.role === "Admin") {
    menuOptions.innerHTML = ''; // Remove any redundant buttons in the main menu
    document.getElementById("manage-users").addEventListener("click", showUserManagement);
    document.getElementById("view-reports").addEventListener("click", () => alert("Viewing Reports..."));

    // Ensure that the "User Management" section is shown
    document.getElementById("user-management-functions").style.display = "block";
}

// Show User Management Section for Admin
function showUserManagement() {
    // Add User list
    const userListContainer = document.getElementById("user-list");
    userListContainer.innerHTML = '';  // Clear existing list
    usersDatabase.forEach(user => {
        const userItem = document.createElement("div");
        userItem.className = "user-item";
        userItem.innerHTML = `
            <span>${user.username} (${user.role})</span>
            <button onclick="deleteUser('${user.username}')">Delete</button>
            <button onclick="editUser('${user.username}')">Edit</button>
        `;
        userListContainer.appendChild(userItem);
    });

    // Add functionality to Add New User
    document.getElementById("add-user").addEventListener("click", () => {
        const username = prompt("Enter new username:");
        const password = prompt("Enter password:");
        const role = prompt("Enter role (Admin, Registered User, Client):");

        // Add to database
        usersDatabase.push({ username, password, role });
        alert(`${username} added successfully!`);
        showUserManagement();  // Refresh user list
    });
}

// Delete user from database (Admin only)
function deleteUser(username) {
    const index = usersDatabase.findIndex(user => user.username === username);
    if (index !== -1) {
        usersDatabase.splice(index, 1);
        alert(`${username} has been deleted.`);
        showUserManagement();  // Refresh user list
    }
}

// Edit user details (Admin only)
function editUser(username) {
    const user = usersDatabase.find(user => user.username === username);
    if (user) {
        const newUsername = prompt("Enter new username:", user.username);
        const newRole = prompt("Enter new role (Admin, Registered User, Client):", user.role);

        // Update user information
        user.username = newUsername;
        user.role = newRole;
        alert(`${user.username}'s details have been updated.`);
        showUserManagement();  // Refresh user list
    }
}

// Handle logout
document.getElementById("logout").addEventListener("click", logout);

function logout() {
    alert("You have been logged out.");
    // In a real app, you would redirect to the login page here
    location.reload(); // Reload page to simulate logout
}
