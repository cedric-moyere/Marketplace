import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormValidation } from "../../../lib/hooks/useFormValidation";
// import createProduct from "../../../lib/state/actions/products";
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
  (error?.error && (
    <div className="alert alert-danger mt-3">
      <p className="icontext]" style={{ color: "crimson" }}>
        <i className="icon text-danger fas fa-exclamation-circle"></i> {error?.error}
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
  const dispatch = useDispatch();
  const { current } = useSelector((state) => ({ ...state.user }));
  const { formValues, validate, handleOnChange, isValid } = useFormValidation({
    formName: FORM_NAME,
    defaultValues: defaultValues,
  });
  const { name, description, price, inStock, imageUrl, category } = formValues[FORM_NAME] ?? {};
  var error;
  React.useEffect(() => validate(formValues[FORM_NAME] ?? {}), [formValues]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { name, description, price, inStock, imageUrl, category };
    // createProduct(newProduct)
    //   .then(() => setTimeout(() => history.push("/"), 2000))
    //   .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="card mx-auto d-flex" style={{ maxWidth: "520px", marginTop: "140px" }}>
        <article className="card-body">
          <header className="mb-4">
            <h4 className="card-title">Create product</h4>
          </header>
          <ErrorMessage error={error} />
          <Alert isVisible={!!current} />
          <form name={FORM_NAME} onSubmit={handleOnSubmit}>
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
              <Input.Text label="Description" value={description} onChange={handleOnChange} />
            </div>
            <div className="form-row align-items-center">
              <Input.Number
                id="price"
                name="price"
                label="Price"
                value={price}
                onChange={handleOnChange}
              />
              <Input.File
                id="imageUrl"
                name="imageUrl"
                label="Image"
                value={imageUrl}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-row">
              <Input.Checkbox
                name="inStock"
                label="In stock"
                value={inStock}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group">
              <Input.Submit
                classNamees="btn-primary btn-block"
                title="Register"
                disabled={!isValid}
              />
            </div>
            <div className="form-group">
              <button
                className="btn-primary btn-block"
                title="Abort"
                onClick={()=>{}}>
              Abort</button>
            </div>
          </form>
        </article>
      </div>
    </>
  );
};
export default Create;
