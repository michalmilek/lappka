import React from "react";
import DynamicForm from "../components/DynamicForm/DynamicForm";
import * as Yup from "yup";
import { FieldValues } from "react-hook-form";

/* type Field = {
  name: string;
  label: string;
  type: string;
  [key: string]: any;
};

interface DynamicFormProps {
  fields: Field[];
  onSubmit: (data: FieldValues) => void;
  title?: string;
} */

const data = {
  fields: [
    { name: "email", label: "email", type: "text" },
    { name: "password", label: "password", type: "password" },
    { name: "rememberMe", label: "rememberMe", type: "checkbox" },
  ],
  onSubmit: () => console.log("test"),
  title: "TEST",
};

const TestSite = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Password should have min 5 letters."),
  });

  return (
    <div>
      <DynamicForm
        fields={data.fields}
        onSubmit={data.onSubmit}
        title={data.title}
        validationSchema={validationSchema}
      />
    </div>
  );
};

export default TestSite;
