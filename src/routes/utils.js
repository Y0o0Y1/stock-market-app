import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../layouts/Dashboard';
import Page404 from '../pages/Page404';
import ProtectedRoute from './../components/ProtectedRoute';
import Page403 from './../pages/Page403';
import { pages } from './index';

const renderRoutes = () => {
    return <>
        <Route path="*" name="Not Found" element={<Page404 />} permission={false} />
        <Route path="/403" name="Not Authorized" element={<React.Suspense> <Page403 /> </React.Suspense>} permission={false} />
        <Route path="/" element={<Dashboard />} >
            {pages.map((page) => {
                return <Route
                    path={page.path}
                    element={
                        <React.Suspense fallback={<>Loading...  </>}>
                            <ProtectedRoute permission={page.permission}>
                                {page.element}
                            </ProtectedRoute>
                        </React.Suspense>
                    }
                    key={page.id}
                />
            })}
        </Route>
    </>

}

export default renderRoutes
