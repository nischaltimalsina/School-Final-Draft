import { v4 as uuidv4 } from "uuid";
import Class from "../pages/Class";
import Dashboard from '../pages/Dashboard';
import Reports from '../pages/Reports';
import Tasks from '../pages/Tasks';
import Modules from '../pages/Modules';

export const AdminRoutes = [
    { id: { uuidv4 }, path: "/", component:<Dashboard/>},
    { id: { uuidv4 }, path: "/reports", component:<Reports/> },
    { id: { uuidv4 }, path: "", component:<Class/> },
    { id: { uuidv4 }, path: "", component:<Tasks/> },
    { id: { uuidv4 }, path: "", component:<Modules/> },
    { id: { uuidv4 }, path: "", component:{} },
];
export const StaffRoutes = [{}];
export const StudentRoutes = [{}];
