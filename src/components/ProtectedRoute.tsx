import { verifyToken } from '@/api/userApiService';
import { ReactChild, ReactNode, useEffect, useState } from 'react';
import { redirect, Route, useNavigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const verify = async () => {
      const user = await verifyToken();
      setIsAuthenticated(!!user)
    };
    verify();
  }, []);

  console.log("isAuth:??: ", isAuthenticated)
  return isAuthenticated ? children : navigate("/")
}

export default ProtectedRoute