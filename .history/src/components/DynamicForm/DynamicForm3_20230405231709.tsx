import * as yup from "yup";
import { useForm } from "../../hooks/useForm";

function DynamicForm3() {
  const schema = yup.object().shape({
    name: yup.string().required("Field is required"),
    age: yup
      .number()
      .required("Field is required")
      .integer("Must be an integer"),
  });

  const formFields = {
    name: {
      label: "Name",
      type: "text",
      initialValue: "",
    },
    age: {
      label: "Age",
      type: "number",
      initialValue: "",
    },
    rememberMe: {
      label: "RememberMe",
      type: "checkbox",
      initialValue: false,
    },
  };

  const { values, errors, handleChange, handleSubmit } = useForm(formFields);
  console.log(errors);

  return (
    <form onSubmit={(event) => handleSubmit(event, schema, console.log)}>
      {Object.entries(formFields).map(([name, field]) => (
        <div key={name}>
          <label htmlFor={name}>{field.label}:</label>
          {field.type === "text" && (
            <input
              type="text"
              id={name}
              name={name}
              value={values[name as keyof typeof values].initialValue as string}
              onChange={handleChange}
            />
          )}
          {field.type === "password" && (
            <input
              type="password"
              id={name}
              name={name}
              value={values[name as keyof typeof values].initialValue as string}
              onChange={handleChange}
            />
          )}
          {field.type === "checkbox" && (
            <input
              type="checkbox"
              id={name}
              name={name}
              checked={
                values[name as keyof typeof values].initialValue as boolean
              }
              onChange={handleChange}
            />
          )}
          {field.type === "number" && (
            <input
              type="number"
              id={name}
              name={name}
              value={
                values[name as keyof typeof values].initialValue as
                  | string
                  | number
              }
              onChange={handleChange}
            />
          )}
          {errors[name as keyof typeof errors] && (
            <span>{errors[name as keyof typeof errors]}</span>
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default DynamicForm3;
