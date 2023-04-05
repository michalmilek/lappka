import React, { useState } from "react";

export type FormField = {
  label: string;
  name: string;
  type: "text" | "email" | "password" | "number" | "date" | "checkbox";
  required?: boolean;
};

export type Props = {
  title?: string;
  fields: FormField[];
  onSubmit: (data: Record<string, string | number | boolean>) => void;
  initialValues?: Record<string, string | number | boolean>;
};

const DynamicForm = ({
  title,
  fields,
  onSubmit,
  initialValues = {},
}: Props) => {
  const [formData, setFormData] =
    useState<Record<string, string | number | boolean>>(initialValues);
  //initial values

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
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
                checked={formData[name] ?? false}
                required={required}
                onChange={handleChange}
              />
            ) : (
              <input
                type={type}
                id={name}
                name={name}
                value={formData[name] ?? ""}
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
