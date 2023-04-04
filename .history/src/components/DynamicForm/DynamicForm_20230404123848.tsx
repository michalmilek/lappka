import React from "react";
import { useForm, FieldValues, UseFormReturn } from "react-hook-form";

type Field = {
  name: string;
  label: string;
  type: string;
  [key: string]: any;
};

interface DynamicFormProps {
  fields: Field[];
  onSubmit: (data: FieldValues) => void;
  title?: string;
}

const DynamicForm = ({ fields, onSubmit, title }: DynamicFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  }: UseFormReturn<FieldValues> = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {title && <h2>{title}</h2>}
      {fields.map(({ name, type, label, ...rest }: Field) => (
        <div
          key={name}
          style={{ gridArea: name }}>
          <label htmlFor={name}>{label}</label>
          <input
            type={type}
            id={name}
            {...register(name)}
            {...rest}
          />
        </div>
      ))}
      <button
        type="submit"
        disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
