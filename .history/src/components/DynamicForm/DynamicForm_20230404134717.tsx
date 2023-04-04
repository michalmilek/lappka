import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import * as Yup from "yup";

type Field = {
  name: string;
  label: string;
  type: string;
  [key: string]: any;
};

interface Field1 extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: string;
}

interface DynamicFormProps {
  fields: Field[];
  onSubmit: (data: FieldValues) => void;
  title?: string;
  validationSchema: Yup.ObjectSchema<
    {
      email: string;
      password: string;
    },
    Yup.AnyObject,
    {
      email: undefined;
      password: undefined;
    },
    ""
  >;
}

const DynamicForm = ({
  fields,
  onSubmit,
  title,
  validationSchema,
}: DynamicFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(validationSchema),
    mode: "all",
  });

  const submitHandler = async (data: FieldValues) => {
    try {
      onSubmit(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="formContainer"
      onSubmit={handleSubmit(submitHandler)}>
      {title && <h2 style={{ gridArea: "title" }}>{title}</h2>}
      {fields.map(({ name, type, label, ...rest }: Field) => (
        <div
          className="flex flex-col justify-center items-center gap-2"
          key={name}
          style={{ gridArea: name }}>
          <label htmlFor={name}>{label}</label>
          <input
            type={type}
            id={name}
            {...register(name)}
            {...rest}
          />
          {errors[name] && <p>{errors[name]?.message as string}</p>}
        </div>
      ))}
      <button
        style={{ gridArea: "submit" }}
        type="submit">
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
