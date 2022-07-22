import React from 'react';
import Navbar from '../components/navbar/Navbar';

const SettingsPage = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <div className="p-settings">Settings</div>
        </>
    );
};

export default SettingsPage;
