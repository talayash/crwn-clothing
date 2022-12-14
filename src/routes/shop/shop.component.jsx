import './shop.styles.scss';
import CategoriesPreview from "../categroies-preview/categories-preview.component";

import {Routes, Route} from "react-router-dom";
import Category from "../category/category.component";
import {useEffect} from "react";
import {getCategoriesAndDocument} from "../../utils/firebase/firebase.utils";
import {setCategories} from "../../store/categories/category.action";
import {useDispatch} from "react-redux";

// Shop component
const Shop = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getCategories = async () => {
            const categoriesArray = await getCategoriesAndDocument();
            dispatch(setCategories(categoriesArray));
        };
        getCategories();
    }, []);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
}
export default Shop;