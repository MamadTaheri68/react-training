import React from 'react';
import {useForm} from "react-hook-form";
import {nullProduct} from "../../globalData/initialData";

const ProductInfo = ({categories, product = nullProduct}) => {
    // console.log(product);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
        // useForm({defaultValues: {...product}});
    const submitForm = data => {
        console.log(data);
        console.log(watch("id"));
    }
    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <div className="mb-3">
                <label>کد محصول</label>
                <input type="text" className="form-control" name="id" {...register("id", { required: true })} />
                {errors.id && <small className="form-text text-danger">کد اجباری می باشد</small>}
            </div>
            <div className="mb-3">
                <label>عنوان محصول</label>
                <input type="text" className="form-control" name="title" {...register("title", { required: true })} />
                {errors.title && <small className="form-text text-danger">عنوان اجباری می باشد</small>}
            </div>
            <div className="mb-3">
                <label>گروه محصول</label>
                <select name="categoryId" {...register("categoryId")} className="form-select" >
                    <option value="0">انتخاب کنید</option>
                    {categories.map((item, index) => <option key={item.id} value={item.id}>{item.title}</option>)}
                </select>
            </div>
            <div className="mb-3">
                <label>قیمت</label>
                <input type="text" name="price" {...register("price", { pattern: /\d+/ })} className="form-control" />
                {errors.price && <small className="form-text text-danger">مقدار عددی وارد کنید</small>}
            </div>
            <button type="submit" className="btn btn-primary">ذخیره</button>

        </form>
    );
};

export default ProductInfo;