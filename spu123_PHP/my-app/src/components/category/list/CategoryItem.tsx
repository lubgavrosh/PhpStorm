import {ICategoryItem} from "./types";
import React, {FC} from "react";

const CategoryItem: FC<ICategoryItem> = ({id, name, image, description}) => {

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{image}</td>
            <td>{description}</td>
        </tr>
    );
};

export default CategoryItem;