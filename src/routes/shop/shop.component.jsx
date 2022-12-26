import './shop.styles.scss';
import CategoriesPreview from "../categroies-preview/categories-preview.component";

import {Routes, Route} from "react-router-dom";
import Category from "../category/category.component";

// Shop component
const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
}
export default Shop;