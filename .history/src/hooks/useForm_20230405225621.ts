import { useState } from "react";

export function useForm<T>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<keyof T, string>>(
    {} as Record<keyof T, string>
  );

  function handleChange<K extends keyof T>(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value, type } = event.target;
    const newValue =
      type === "checkbox" && event.target instanceof HTMLInputElement
        ? (event.target.checked as boolean)
        : (value as unknown as T[K]);
    setValues((prevValues) => ({ ...prevValues, [name]: newValue }));
  }

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
    validationSchema: any,
    onSubmit: (values: T) => void
  ) {
    event.preventDefault();

    validationSchema
      .validate(values, { abortEarly: false })
      .then(() => {
        onSubmit(values);
        console.log(values);
      })
      .catch((validationErrors: any) => {
        const errors: any = {};
        validationErrors.inner.forEach((err: any) => {
          errors[err.path as any] = err.message;
        });
        setErrors(errors);
      });
  }

  return { values, setValues, errors, handleChange, handleSubmit };
}
