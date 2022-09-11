import React from 'react';
import { Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import { pages } from './index';

const renderRoutes = () => {

    return pages.map((page) => {
        console.log("page", page)
        return <Route
            path={page.path}
            element={
                <ProtectedRoute permission={page.permission}>
                    {page.component}
                </ProtectedRoute>
            }
            key={page.id}
        />
    })

}

export default renderRoutes
