import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
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
  (error && <p className="text-danger">{error.message}</p>) || <></>;

const Create = ({ history }) => {
  const [fileName, setFileName] = React.useState("Image");
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
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
    reset({
      name: "",
      description: "",
      price: "",
      image: "",
      category: "",
      inStock: false,
    });
  };

  console.log(watch("name"));
  return (
    <>
      <div className="card mx-auto d-flex" style={{ maxWidth: "520px" }}>
        <article className="card-body">
          <header className="mb-4">
            <h4 className="card-title">Create product</h4>
          </header>
          {<Alert isVisible={!!isSubmitSuccessful} />}
          <form>
            <div className="form-row">
              <Input.Text
                className="form-label"
                label="Name"
                formref={{ ...register("name", { required: "Name is required" }) }}
                children={<ErrorMessage error={errors.name} />}
              />
              <Input.Text
                label="Category"
                formref={{ ...register("category", { required: "Category is required" }) }}
                children={<ErrorMessage error={errors.category} />}
              />
            </div>
            <div className="form-row">
              <Input.Text
                label="Description"
                formref={{ ...register("description", { required: "Description is required" }) }}
                children={<ErrorMessage error={errors.description} />}
              />
            </div>
            <div className="form-row">
              <Input.Number
                min="1"
                label="Price"
                formref={{ ...register("price", { required: "Price is required" }) }}
                children={<ErrorMessage error={errors.price} />}
              />
            </div>
            <div className="form-row px-1">
              <Input.File
                accept="image/*"
                label={fileName}
                formref={{ ...register("image", { required: "Image is required" }) }}
                children={<ErrorMessage error={errors.image} />}
                onChange={(e) => setFileName(e.target.files[0]?.name)}
              />
            </div>
            <div className="form-row">
              <Input.Checkbox label="In stock" formref={{ ...register("inStock") }} />
            </div>
            <div className="form-row">
              <button
                className="btn btn-success btn-block"
                title="Add product"
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
