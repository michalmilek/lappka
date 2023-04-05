import * as yup from "yup";
import { useForm } from "../../hooks/useForm";

const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().positive().integer(),
});

function App() {
  const { values, setValues, errors, handleChange, handleSubmit } = useForm({
    name: "",
    age: 0,
  });

  return (
    <form onSubmit={(event) => handleSubmit(event, schema, console.log)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={values.age}
          onChange={handleChange}
        />
        {errors.age && <span>{errors.age}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
