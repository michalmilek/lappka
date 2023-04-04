import React from "react";
import DynamicForm from "../components/DynamicForm/DynamicForm";

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
  return (
    <div>
      <DynamicForm
        fields={data.fields}
        onSubmit={data.onSubmit}
        title="data.title"
      />
    </div>
  );
};

export default TestSite;
