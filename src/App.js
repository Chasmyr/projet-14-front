import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateEmployee from "./pages/createEmployee/CreateEmployee";
import EmployeeList from "./pages/employeeList/EmployeeList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/list" element={<EmployeeList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
