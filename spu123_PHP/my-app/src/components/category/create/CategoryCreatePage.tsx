import {useNavigate} from "react-router-dom";
import {ICategoryCreate} from "./types";
import {useFormik} from 'formik';
import http_common from "../../../http_common";

const CategoryCreatePage = () => {

    const navigate = useNavigate();
    const init : ICategoryCreate = {
        name: "",
        image: "",
        description: ""
    };
    const formikSubmit = async (values: ICategoryCreate) => {
        //console.log("Submit Form ", values);
        try {
            const result = await http_common.post("api/category", values);
            navigate("/");
        }
        catch {
            console.log("Error server");
        }
    }

    const formik = useFormik({
       initialValues: init,
       onSubmit: formikSubmit
    });
    const {values, handleSubmit, handleChange} = formik;
    return (
        <>
            <h1 className={"text-center"}>Додати категорію</h1>
            <form className={"col-md-8 offset-md-2"} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Назва</label>
                    <input type="text" className="form-control" id="name" name={"name"}
                        value={values.name}
                        onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Фото</label>
                    <input type="text" className="form-control" id="image" name={"image"}
                           value={values.image}
                           onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Опис</label>
                    <input type="text" className="form-control" id="description" name={"description"}
                           value={values.description}
                           onChange={handleChange}/>
                </div>

                <button type="submit" className="btn btn-primary">Додати</button>
            </form>
        </>
    );
}
export default CategoryCreatePage;