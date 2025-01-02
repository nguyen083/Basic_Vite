import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from './components/Welcome';
import Login from "./components/Login";

const Router = () => {
    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
    )
}
export default Router;