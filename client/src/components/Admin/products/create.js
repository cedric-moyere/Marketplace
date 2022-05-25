import React from "react";
import { useDispatch } from "react-redux";
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
        <i className="icon text-danger fas fa-exclamation-circle"></i> {JSON.stringify(error)}
      </p>
    </div>
  )) || <></>;

const defaultValues = {
  name: "",
  description: "",
  price: "",
  image: "",
  category: "",
};
const FORM_NAME = "createProduct";

const Create = ({ history }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const { errors, formValues, validate, handleOnChange, isValid } = useFormValidation({
    formName: FORM_NAME,
    defaultValues: defaultValues,
  });
  const { name, description, price, inStock, image, category } = formValues[FORM_NAME] ?? {};
  var created;
  React.useEffect(() => {
    validate(formValues[FORM_NAME] ?? {});
  }, [formValues]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    const product = {
      name: data.name,
      description: data.description,
      price: data.price,
      inStock: data.inStock,
      category: data.category,
    };
    formData.append("product", JSON.stringify(product));
    dispatch(createProduct(formData));
  };

  const abort = (e) => {
    e.preventDefault();
    reset({ ...defaultValues, inStock: false });
  };
  return (
    <>
      <div className="card mx-auto d-flex" style={{ maxWidth: "520px", marginTop: "140px" }}>
        <article className="card-body">
          <header className="mb-4">
            <h4 className="card-title">Create product</h4>
          </header>
          <ErrorMessage error={errors} />
          <Alert isVisible={!!created} />
          <form name={FORM_NAME}>
            <div className="form-row">
              <Input.Text
                label="Name"
                value={name}
                onChange={handleOnChange}
                formref={{ ...register("name") }}
              />
              <Input.Text
                label="Category"
                value={category}
                onChange={handleOnChange}
                formref={{ ...register("category") }}
              />
            </div>
            <div className="form-row">
              <Input.Text
                label="Description"
                value={description}
                onChange={handleOnChange}
                formref={{ ...register("description") }}
              />
            </div>
            <div className="form-row align-items-center">
              <Input.Number
                label="Price"
                value={price}
                onChange={handleOnChange}
                formref={{ ...register("price") }}
              />
              <Input.File
                label="Image"
                value={image}
                onChange={handleOnChange}
                required={true}
                formref={{ ...register("image") }}
              />
            </div>
            <div className="form-row">
              <Input.Checkbox
                label="In stock"
                value={inStock}
                onChange={handleOnChange}
                formref={{ ...register("inStock") }}
              />
            </div>
            <div className="form-row">
              <button
                className="btn btn-success btn-block"
                title="Add product"
                disabled={!isValid}
                onClick={handleSubmit(onSubmit)}
              >
                Add product
              </button>
              <button className="btn btn-primary btn-block" title="Abort" onClick={(e) => abort(e)}>
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
