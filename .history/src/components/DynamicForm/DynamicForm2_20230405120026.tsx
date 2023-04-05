import React, { useState } from "react";

export type InputType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "date"
  | "checkbox";

export type Field<T, K extends string> = {
  name: K;
  label: string;
  type: InputType;
  required?: boolean;
  options?: { value: T; label: string }[];
};

export type Props<T, K extends string> = {
  fields: Field<T, K>[];
  onSubmit: (values: Record<K, T>) => void;
  title?: string;
  initialValues?: Record<K, T>;
};

const DynamicForm = <T extends string | number | boolean | null>({
  title,
  fields,
  onSubmit,
  initialValues = {},
}: Props<T, string>) => {
  const [formData, setFormData] = useState<Record<string, T>>(initialValues);
  //initial values
  //custom hook

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? (checked as T) : (value as T);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: newValue }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
    console.log(formData);
  };

  return (
    <div>
      {title && <h2>{title}</h2>}
      <form onSubmit={handleSubmit}>
        {fields.map(({ label, name, type, required = false }) => (
          <div key={name}>
            <label htmlFor={name}>{label}</label>
            {type === "checkbox" ? (
              <input
                type="checkbox"
                id={name}
                name={name}
                checked={(formData[name] as boolean) ?? false}
                required={required}
                onChange={handleChange}
              />
            ) : (
              <input
                type={type}
                id={name}
                name={name}
                value={(formData[name] as string | number) ?? ""}
                required={required}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DynamicForm;
