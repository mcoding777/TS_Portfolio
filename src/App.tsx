import { Routes, Route, } from 'react-router-dom';
import {
    NavPage,
    PageNotFound,
    ProjectPage,
    ProjectDetailPage,
    AboutMePage,
    Login,
    ContactMe,
} from './pages';
import { BrowserRouter } from 'react-router-dom';
import { CustomNavigate } from './components/nav';
import React from 'react';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/main" element={<NavPage />}>
                    <Route index element={<CustomNavigate />} />
                    <Route path="aboutme" element={<AboutMePage />} />
                    <Route path="project" element={<ProjectPage />} />
                    <Route path="project/:id" element={<ProjectDetailPage />} />
                    <Route path="project/add" element={<ProjectDetailPage />} />
                    <Route path="contact" element={<ContactMe />} />
                </Route>
                <Route path="404" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
