import React, {ReactElement} from 'react';
import TasksPage from './pages/TasksPage';
import SchedulePage from './pages/SchedulePage';
import LibraryPage from './pages/LibraryPage';
import GradesPage from './pages/GradesPage';
import SettingsPage from './pages/SettingsPage';
import NewsPage from './pages/NewsPage';
import LoginPage from './pages/LoginPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles/styles.css';
import Book from './components/Book';
import StudentGradesPage from './pages/StudentGradesPage';

function App(): ReactElement {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />

                    <Route path="/news">
                        <Route index element={<NewsPage />} />
                    </Route>

                    <Route path="/tasks" element={<TasksPage />} />
                    <Route path="/schedule" element={<SchedulePage />} />

                    <Route path="/library">
                        <Route index element={<LibraryPage />} />
                        <Route path="books/:id" element={<Book />} />
                    </Route>

                    <Route path="/grades">
                        <Route index element={<GradesPage />} />
                        <Route path=":id" element={<StudentGradesPage />} />
                    </Route>
                    <Route path="/settings" element={<SettingsPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
