import { AuthProvider } from 'contexts/AuthProvider';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import RequireAuth from './components/RequireAuth';
import Home from './pages/Home';
import Login from './pages/Login';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          {/* <Route path="*" element={<div>404</div>} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}
