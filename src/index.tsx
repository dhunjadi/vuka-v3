import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {PersistGate} from 'redux-persist/es/integration/react';
import NewsPage from './pages/NewsPage';
import LoginPage from './pages/LoginPage';
import {persistor, store} from './store/store';
import './styles/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/news" element={<NewsPage />} />
                    </Routes>
                </Router>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
