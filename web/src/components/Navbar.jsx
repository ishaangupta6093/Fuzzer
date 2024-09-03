import React from 'react';
import { AppBar, Toolbar, Button, Container } from '@mui/material';

const Navbar = ({ token, setToken }) => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                {/* Empty div with flex-grow to push buttons to the right */}
                <div style={{ flexGrow: 1, fontWeight:'bold' }}>WebFuzzForge</div>
                {token ? (
                    <Button color="inherit" onClick={handleLogout}>Logout</Button>
                ) : (
                    <>
                        <Button color="inherit" href="/login">Login</Button>
                        <Button color="inherit" href="/signup">Signup</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

const Dashboard = ({ token }) => {
    return (
        <Container>
            <h1>Welcome to the Dashboard</h1>
            {/* Add Report Generation component here */}
        </Container>
    );
};

export { Navbar, Dashboard };
