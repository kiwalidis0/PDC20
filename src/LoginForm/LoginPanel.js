import React from "react";
import './loginpanel.css'; // Import the CSS file

function LoginPanel({user}) {
    return (
        <div className="login-panel">
            {user.isAdmin ? (
                <div>
                    <h1>Admin Dashboard</h1>
                    <p>Welcome, {user.name} ! You are an admin</p>
                    <button> Manage Users</button>
                    <button>View Reports</button>
                </div>
            ) : (
                <div>
                    <h1>Guest Dashboard</h1>
                    <p>Welcome, {user.name}! You are not admin</p>
                    <button>View profile</button>
                    <button>Settings</button>
                </div>
            )}
        </div>
    );
}

export default LoginPanel;
