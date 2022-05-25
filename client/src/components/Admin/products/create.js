import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useFormValidation } from "../../../lib/hooks/useFormValidation";
import { createProduct } from "../../../lib/state/actions/products";
import * as Input from "../../Shared/Input";

const Alert = ({ isVisible }) =>
  isVisible && (
    <div className="alert alert-info mt-3">
      <p className="icontext">
        <i className="icon text-primary fa fa-thumbs-up"></i>Product successfully created
      </p>
    </div>
  );
const ErrorMessage = ({ error }) =>
  (error && (
    <div className="alert alert-danger mt-3">
      <p className="icontext]" style={{ color: "crimson" }}>
        <i className="icon text-danger fas fa-exclamation-circle"></i> {error}
      </p>
    </div>
  )) || <></>;

const defaultValues = {
  name: "",
  description: "",
  price: "",
  inStock: false,
  imageUrl: "",
  category: "",
};
const FORM_NAME = "createProduct";
const options = ["France", "Uzbekistan", "Russia", "United States", "India", "Afganistan"];

const Create = ({ history }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { current } = useSelector((state) => ({ ...state.user }));
  const { formValues, validate, handleOnChange, isValid } = useFormValidation({
    formName: FORM_NAME,
    defaultValues: defaultValues,
  });
  const { name, description, price, inStock, imageUrl, category } = formValues[FORM_NAME] ?? {};
  var error;
  var created;
  React.useEffect(() => validate(formValues[FORM_NAME] ?? {}), [formValues]);

  const onSubmit = async (data) => {
    const product = {
      name,
      description,
      price,
      inStock,
      imageUrl,
      category,
    };
    const formData = new FormData();
    formData.append("image", data.file[0]);
    formData.append("product", JSON.stringify(product));
    dispatch(createProduct(formData));
  };
  return (
    <>
      <div className="card mx-auto d-flex" style={{ maxWidth: "520px", marginTop: "140px" }}>
        <article className="card-body">
          <header className="mb-4">
            <h4 className="card-title">Create product</h4>
          </header>
          <ErrorMessage error={error} />
          <Alert isVisible={!!created} />
          <form name={FORM_NAME} onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
              <Input.Text label="Name" name="name" value={name} onChange={handleOnChange} />
              <Input.Text
                label="Category"
                name="category"
                value={category}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-row">
              <Input.Text
                label="Description"
                name="description"
                value={description}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-row align-items-center">
              <Input.Number label="Price" name="price" value={price} onChange={handleOnChange} />
              <input type="file" {...register("file")} />
              <Input.File
                label="Image"
                name="imageUrl"
                value={imageUrl}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-row">
              <Input.Checkbox
                label="In stock"
                name="inStock"
                value={inStock}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group">
              <Input.Submit
                classNamees="btn-success btn-block"
                title="Add product"
                disabled={isValid}
              />
            </div>
            <div className="form-group">
              <button className="btn-danger btn-block" title="Abort">
                Abort
              </button>
            </div>
          </form>
        </article>
      </div>
    </>
  );
};
export default Create;
