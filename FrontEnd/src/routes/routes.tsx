import {Route, Routes} from 'react-router-dom';
import {ResponderPage} from "../pages/ResponderPage";
import {DispacherPage} from "../pages/DispacherPage";
import {RequesterPage} from "../pages/RequesterPage";

export default function AppRoutes() {
    return (

        <Routes>

            <Route path="/ResponderPage" element={<ResponderPage/>}
            />
            <Route path="/DispacherPage" element={<DispacherPage/>}
            />
            <Route path="/DispacherPage" element={<RequesterPage/>}
            />
        </Routes>
    );
}