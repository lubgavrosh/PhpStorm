import React, {useEffect, useState} from "react";
import http_common from "../../../http_common";
import {ICategoryItem} from "./types";
import CategoryItem from "./CategoryItem";
import {Link} from "react-router-dom";

const CategoryListPage = () => {

    const [list, setList] = useState<ICategoryItem[]>([]);
    useEffect(() => {
        http_common.get<ICategoryItem[]>(`api/category`)
            .then(resp => {
                //console.log("Server result", resp);
                setList(resp.data);
            });
        //console.log("Use Effect");
    }, []);

    const mapList = list.map(item => (
        <CategoryItem key={item.id} {...item} />
    ));
    return (
        <>
            <h1 className="text-center">Категорії</h1>
            <div className="container">
                <Link to={"/category/create"} className={"btn btn-info"}>Додати категорію</Link>
                <table className={"table"}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Назва</th>
                        <th>Фото</th>
                        <th>Опис</th>
                    </tr>
                    </thead>
                    <tbody>
                    {mapList}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CategoryListPage;