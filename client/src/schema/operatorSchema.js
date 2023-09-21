import {
    INVALID_EMAIL,
    MISSING_REQUIRED_FIELD,
    PASSWORD_MIN_LENGTH,
  } from "constant";
  import * as yup from "yup";
  
  const cnicRegExp = /^\d{5}-\d{7}-\d{1}$/; // CNIC format: 12345-1234567-1
  const isValidCNIC = (value) => cnicRegExp.test(value);
  
  export const operatorSchema = yup.object().shape({
    name: yup.string().required(MISSING_REQUIRED_FIELD),
    email: yup.string().email(INVALID_EMAIL).required(MISSING_REQUIRED_FIELD),
    password: yup
      .string()
      .required(MISSING_REQUIRED_FIELD)
      .min(8, PASSWORD_MIN_LENGTH),
    CNIC: yup
      .string()
      .required(MISSING_REQUIRED_FIELD)
      .test("valid-cnic", "Invalid CNIC format", isValidCNIC),
    role: yup
    .string()
    .required(MISSING_REQUIRED_FIELD),


  });
  