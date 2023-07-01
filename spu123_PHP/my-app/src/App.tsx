import React from 'react';
import './App.css';
import CategoryListPage from "./components/category/list/CategoryListPage";
import {Route, Routes} from "react-router-dom";
import CategoryCreatePage from "./components/category/create/CategoryCreatePage";

const App = () => {

    return (
        <>
            <Routes>
                <Route path={"/"}>
                    <Route index element={<CategoryListPage/>}/>
                    <Route path={"category"}>
                        <Route path={"create"} element={<CategoryCreatePage/>}/>
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
