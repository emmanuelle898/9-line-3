import {BrowserRouter} from 'react-router-dom';
import './App.css';
import AppRoutes from "./routes/routes.tsx";
import Navbar from "./components/Navbar.tsx";
export default function App() {
  return (

      <BrowserRouter>
        <Navbar/>
        <AppRoutes/>
      </BrowserRouter>
  );
}