import { Route } from 'react-router-dom';
import { pages } from './index';

const renderRoutes = () => {

    return pages.map((page) => {
        let elementToRender = page.element

        return <Route path={page.path} element={elementToRender} key={page.id} />
    })

}

export default renderRoutes
