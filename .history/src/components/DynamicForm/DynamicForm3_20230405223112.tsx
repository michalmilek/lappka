import * as yup from "yup";
import { useForm } from "../../hooks/useForm";

function DynamicForm3() {
  const schema = yup.object().shape({
    // schema validation for each field
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
      initialValue: 0,
    },
    // add more fields as needed
  };

  const { values, setValues, errors, handleChange, handleSubmit } =
    useForm(formFields);

  return (
    <form onSubmit={(event) => handleSubmit(event, schema, console.log)}>
      {Object.entries(formFields).map(([name, field]) => (
        <div key={name}>
          <label htmlFor={name}>{field.label}:</label>
          <input
            type={field.type}
            id={name}
            name={name}
            value={values[name]}
            onChange={handleChange}
          />
          {errors[name] && <span>{errors[name]}</span>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default DynamicForm3;
