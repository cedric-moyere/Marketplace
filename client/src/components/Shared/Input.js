import React from "react";

export const Text = ({
  label,
  name,
  type = "text",
  col,
  placeholder,
  value,
  style,
  children,
  onChange,
  onClick,
  formref,
}) => (
  <div className="col form-group col-md" style={style}>
    <label>{label}</label>
    <input
      type={type}
      name={name}
      className="form-control"
      placeholder={placeholder}
      defaultValue={value}
      onBlur={onChange}
      onClick={onClick}
      onKeyUp={onChange}
      onFocus={onClick}
      {...formref}
    />
    {children}
  </div>
);
export const Radio = ({ label, name, value, onChange }) => (
  <label className="custom-control custom-radio custom-control-inline">
    <input
      className="custom-control-input"
      checked={label.toLowerCase() === value}
      type="radio"
      name={name}
      defaultValue={value}
      onChange={() => null}
      onBlur={(e) => onChange(e, label)}
    />
    <span className="custom-control-label">{label}</span>
  </label>
);
export const Checkbox = ({ name, label, onChange, formref }) => (
  <div className="col form-group col-md">
    <label className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input"
        name={name}
        onClick={onChange}
        {...formref}
      />
      <div className="custom-control-label">{label}</div>
    </label>
  </div>
);
export const TextArea = ({ label, name, style, value, onChange }) => (
  <div className="form-group" style={style}>
    <label>{label}</label>
    <textarea
      className="form-control"
      rows="1"
      name={name}
      defaultValue={value}
      onChange={onChange}
    ></textarea>
  </div>
);
export const Select = ({ value, label, options, col, name, onChange, style }) => {
  return (
    <div className={`form-group col-md-${col}`} style={style}>
      <label>{label}</label>
      <select
        id={label}
        className="form-control"
        name={name}
        onChange={() => null}
        onBlur={onChange}
        defaultValue={value}
      >
        <option>Select...</option>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
};
export const Email = (props) => <Text name="email" type="email" {...props}></Text>;
export const Password = (props) => (
  <div className={`form-group col-md-${props.col}`}>
    <Text name="password" type="password" {...props} />
  </div>
);
export const ConfirmPassword = (props) => (
  <div className={`form-group col-md-${props.col}`}>
    <Text name="confirm_password" type="password" {...props} />
  </div>
);
export const Submit = (props) => (
  <button type="submit" className={`btn ${props.classNamees}`} disabled={props.disabled}>
    {props.title}
  </button>
);
export const Number = ({ col, value, label, name, onChange, formref }) => (
  <div className={`col-md-${col} form-group col-md`}>
    <label>{label}</label>
    <input
      type="number"
      name={name}
      className="form-control"
      defaultValue={value}
      onBlur={onChange}
      onInput={onChange}
      {...formref}
    />
  </div>
);
export const File = (props) => (
  <div className={`col-md-${props.col} col-md custom-file input-group mt-3`}>
    <input
      id={props.id}
      type="file"
      className="custom-file-input"
      onInput={props.onChange}
      required={props.required}
      {...props.formref}
    />
    <label htmlFor={props.id} className="custom-file-label">
      {props.label}
    </label>
  </div>
);
