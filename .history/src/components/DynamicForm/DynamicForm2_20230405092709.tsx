import React, { useState } from "react";

type FormField = {
  label: string;
  name: string;
  type: "text" | "email" | "password" | "number" | "date";
  required?: boolean;
};

type Props = {
  title?: string;
  fields: FormField[];
  onSubmit: (data: Record<string, string>) => void;
};

const DynamicForm = ({ title, fields, onSubmit }: Props) => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      {title && <h2>{title}</h2>}
      <form onSubmit={handleSubmit}>
        {fields.map(({ label, name, type, required = false }) => (
          <div key={name}>
            <label htmlFor={name}>{label}</label>
            <input
              type={type}
              id={name}
              name={name}
              value={formData[name] ?? ""}
              required={required}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DynamicForm;
