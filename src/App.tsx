import React, {ReactElement} from 'react';
import TasksPage from './pages/tasks/TasksPage';
import SchedulePage from './pages/schedule/SchedulePage';
import LibraryPage from './pages/library/LibraryPage';
import GradesPage from './pages/grades/GradesPage';
import SettingsPage from './pages/settings/SettingsPage';
import NewsPage from './pages/news/NewsPage';
import LoginPage from './pages/login/LoginPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles/styles.css';
import Book from './components/Book';
import StudentGradesPage from './pages/grades/StudentGradesPage';
import GradesEditPage from './pages/grades/GradesEditPage';
import NewsActionsPage from './pages/news/NewsActionsPage';
import TaskActionsPage from './pages/tasks/TaskActionsPage';

function App(): ReactElement {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />

                    <Route path="/news">
                        <Route index element={<NewsPage />} />
                        <Route path="new" element={<NewsActionsPage />} />
                        <Route path="edit/:id" element={<NewsActionsPage />} />
                    </Route>

                    <Route path="/tasks">
                        <Route index element={<TasksPage />} />
                        <Route path="new" element={<TaskActionsPage />} />
                        <Route path="edit/:id" element={<TaskActionsPage />} />
                    </Route>
                    <Route path="/schedule" element={<SchedulePage />} />

                    <Route path="/library">
                        <Route index element={<LibraryPage />} />
                        <Route path="books/:id" element={<Book />} />
                    </Route>

                    <Route path="/grades">
                        <Route index element={<GradesPage />} />
                        <Route path=":id" element={<StudentGradesPage />} />
                        <Route path="edit" element={<GradesEditPage />} />
                    </Route>
                    <Route path="/settings" element={<SettingsPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
