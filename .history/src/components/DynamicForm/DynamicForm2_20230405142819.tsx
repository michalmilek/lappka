import { useState } from "react";
import * as Yup from "yup";

export type Props<T, K extends string> = {
  fields: Field<K>[];
  onSubmit: (values: Record<K, T>) => void;
  title?: string;
  initialValues?: Record<K, T>;
  validationSchema: Yup.ObjectSchema<
    Record<string, string>,
    Yup.AnyObject,
    Record<string, undefined>,
    ""
  >;
};

export type Field<K extends string> = {
  name: K;
  label: string;
  type: InputType;
  required?: boolean;
};

export type InputType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "date"
  | "checkbox";

function DynamicForm<T, K extends string>({
  fields,
  onSubmit,
  title,
  initialValues,
  validationSchema,
}: Props<T, K>) {
  const [values, setValues] = useState<Record<K, T>>(
    initialValues || ({} as Record<K, T>)
  );
  const [errors, setErrors] = useState<Record<K, string>>(
    {} as Record<K, string>
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;
    const newValue =
      type === "checkbox" && event.target instanceof HTMLInputElement
        ? event.target.checked
        : value;
    setValues((prevValues) => ({ ...prevValues, [name]: newValue }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("test");
    try {
      const response = await validationSchema.validate(values, {
        abortEarly: false,
      });
      onSubmit(values);
      console.log(response);
    } catch (error: any) {
      const validationErrors: any = {};
      error.inner.forEach((err: any) => {
        if (err.path && typeof err.path === "string") {
          validationErrors[err.path] = err.message;
        }
      });
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {title && <h2>{title}</h2>}
      {fields.map((field) => (
        <div key={field.name}>
          <label>{field.label}</label>
          {field.type === "text" && (
            <input
              type="text"
              name={field.name}
              value={values[field.name] as string}
              onChange={handleChange}
            />
          )}
          {field.type === "password" && (
            <input
              type="password"
              name={field.name}
              value={values[field.name] as string}
              onChange={handleChange}
            />
          )}
          {field.type === "checkbox" && (
            <input
              type="checkbox"
              name={field.name}
              checked={values[field.name] as boolean}
              onChange={handleChange}
            />
          )}
          {errors[field.name] && (
            <span className="text-red-500">{errors[field.name]}</span>
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default DynamicForm;
