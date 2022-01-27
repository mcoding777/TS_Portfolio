import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, NavPage, PageNotFound, ProjectPage, ProjectDetailPage, AboutMePage } from './pages';

import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './utils/styles/global-styles';

//라우팅 및 전체 css 적용
function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                {/* <Route path="*" element={<Navigate to="404" />} /> */}
                <Route path="/" element={<HomePage />}></Route>
                <Route path="login" element={<p>로그인</p>}></Route>
                <Route path="signup" element={<p>회원가입</p>}></Route>
                <Route path="intro" element={<p>만든 사람들</p>}></Route>
                <Route path=":id" element={<NavPage />}>
                    <Route path="" element={<Navigate to="aboutme" />} />
                    <Route path="aboutme" element={<AboutMePage />} />
                    <Route path="project" element={<ProjectPage />} />
                    <Route path="project/:id" element={<ProjectDetailPage />} />
                    <Route path="contact" element={<p>contact</p>} />
                    <Route path="mypage" element={<p>mypage</p>} />
                    <Route path="detail" element={<p>settings</p>} />
                </Route>
                <Route path="404" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
