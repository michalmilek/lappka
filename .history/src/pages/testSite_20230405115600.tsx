import React from "react";
import DynamicForm, { inputType } from "../components/DynamicForm/DynamicForm";
import * as Yup from "yup";
import { FieldValues } from "react-hook-form";
import DynamicForm2, { Props } from "../components/DynamicForm/DynamicForm2";

/* interface Data {
  fields: {
    name: string;
    label: string;
    type: inputType;
  }[];
  onSubmit: () => void;
  title: string;
} */

const data: Props<string | boolean, "email" | "password" | "rememberMe"> = {
  fields: [
    { name: "email", label: "email", type: "text", required: true },
    { name: "password", label: "password", type: "password", required: true },

    { name: "rememberMe", label: "rememberMe", type: "checkbox" },
  ],
  onSubmit: () => console.log(data),
  title: "TEST",
  initialValues: {
    email: "test@example.com",
    password: "fsafsa",
    rememberMe: true,
  },
};

const TestSite = () => {
  /*   const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Password should have min 5 letters."),
  }); */

  return (
    <div>
      {/*       <DynamicForm
        fields={data.fields}
        onSubmit={data.onSubmit}
        title={data.title}
        validationSchema={validationSchema}
      /> */}
      <DynamicForm2
        fields={data.fields}
        onSubmit={data.onSubmit}
        title={data.title}
        initialValues={data.initialValues}
      />
    </div>
  );
};

export default TestSite;
