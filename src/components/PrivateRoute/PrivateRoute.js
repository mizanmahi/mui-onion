import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Spinner from '../Spinner/Spinner';

const ProtectedRoute = ({ children, ...rest }) => {
   const { user, userLoading } = useAuth();
   const location = useLocation();

   if (userLoading) return <Spinner />;

   if (user) return children;

   return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default ProtectedRoute;
