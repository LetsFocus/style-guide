import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (!user) {
    navigate('/');
    return null;
  }

  return children;
};

export default ProtectedRoute;
