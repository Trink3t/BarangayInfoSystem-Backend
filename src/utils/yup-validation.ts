import type { ValidationError } from "yup";

export const formatYupErrors = (err: ValidationError) => {
  const errors: Record<string, string> = {};
  err.inner.forEach(e => {
    if (e.path && !errors[e.path]) {
      errors[e.path] = e.message;
    }
  });
  return errors;
};