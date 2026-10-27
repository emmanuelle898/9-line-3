import {Route, Routes} from 'react-router-dom';
import {ResponderPage} from "../pages/ResponderPage";
import {DispacherPage} from "../pages/DispacherPage";
import {RequesterPage} from "../pages/RequesterPage";

export default function AppRoutes() {
    return (

        <Routes>
            <Route path="/" element={<RequesterPage/>}
            />
            <Route path="/tasks" element={<ResponderPage/>}
            />
            <Route path="/categories" element={<DispacherPage/>}
            />

        </Routes>
    );
}