import { Routes, Route, Navigate } from 'react-router-dom';
import { NavPage, PageNotFound, ProjectPage, ProjectDetail, AboutMePage, Login, ContactMe } from './pages';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/main" element={<NavPage />}>
                    <Route index element={<Navigate to="aboutme" />} />
                    <Route path="aboutme" element={<AboutMePage />} />
                    <Route path="project" element={<ProjectPage />} />
                    <Route path="project/:id" element={<ProjectDetail />} />
                    <Route path="contact" element={<ContactMe />} />
                </Route>
                <Route path="404" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
