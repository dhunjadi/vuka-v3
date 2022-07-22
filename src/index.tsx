import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {PersistGate} from 'redux-persist/es/integration/react';
import NewsPage from './pages/NewsPage';
import LoginPage from './pages/LoginPage';
import {persistor, store} from './store/store';
import './styles/styles.css';
import NewsDetailsPage from './pages/NewsDetailsPage';
import TasksPage from './pages/TasksPage';
import SchedulePage from './pages/SchedulePage';
import LibraryPage from './pages/LibraryPage';
import GradesPage from './pages/GradesPage';
import SettingsPage from './pages/SettingsPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/news" element={<NewsPage />} />
                        <Route path="/news/:id" element={<NewsDetailsPage />} />
                        <Route path="/tasks" element={<TasksPage />} />
                        <Route path="/schedule" element={<SchedulePage />} />
                        <Route path="/library" element={<LibraryPage />} />
                        <Route path="/grades" element={<GradesPage />} />
                        <Route path="/settings" element={<SettingsPage />} />
                    </Routes>
                </Router>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
