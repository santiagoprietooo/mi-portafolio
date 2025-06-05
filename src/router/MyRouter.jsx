import { Route, Routes } from 'react-router-dom';
import HomeView from '../Views/HomeView';
import NotFoundView from '../Views/NotFoundView';

function MyRouter() {
    return (
        <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="*" element={<NotFoundView />} />
        </Routes>
    );
}

export default MyRouter;