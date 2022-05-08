import { Routes, Route, Navigate } from 'react-router-dom';
import { NavPage, PageNotFound, ProjectList, ProjectDetail, AboutMePage, Login, ContactMe } from './pages';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/main" element={<NavPage />}>
                    <Route index element={<Navigate to="aboutme" />} />
                    <Route path="aboutme" element={<AboutMePage />} />
                    <Route path="project" element={<ProjectList />} />
                    <Route path="project/:id" element={<ProjectDetail />} />
                    <Route path="contact" element={<ContactMe />} />
                </Route>
                <Route path="404" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
