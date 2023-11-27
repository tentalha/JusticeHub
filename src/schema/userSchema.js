import {
  INVALID_EMAIL,
  MISSING_REQUIRED_FIELD,
  PASSWORDS_MUST_MATCH,
  PASSWORD_MIN_LENGTH,
} from "constant";
import * as yup from "yup";

const cnicRegExp = /^\d{5}-\d{7}-\d{1}$/; // CNIC format: 12345-1234567-1
const isValidCNIC = (value) => cnicRegExp.test(value);

export const loginSchema = yup
  .object({
    email: yup.string().required(MISSING_REQUIRED_FIELD).email(INVALID_EMAIL),
    password: yup.string().required(MISSING_REQUIRED_FIELD),
  })
  .required();

export const registerSchema = yup.object().shape({
  name: yup.string().required(MISSING_REQUIRED_FIELD),
  email: yup.string().email(INVALID_EMAIL).required(MISSING_REQUIRED_FIELD),
  password: yup
    .string()
    .required(MISSING_REQUIRED_FIELD)
    .min(8, PASSWORD_MIN_LENGTH),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], PASSWORDS_MUST_MATCH)
    .required(MISSING_REQUIRED_FIELD),
  CNIC: yup
    .string()
    .required(MISSING_REQUIRED_FIELD)
    .test("valid-cnic", "Invalid CNIC format", isValidCNIC),
});

export const emailVerificationSchema = yup
  .object({
    email: yup.string().required(MISSING_REQUIRED_FIELD).email(INVALID_EMAIL),
  })
  .required();


  export const resetPasswordSchema = yup
  .object({
    password: yup
    .string()
    .required(MISSING_REQUIRED_FIELD)
    .min(8, PASSWORD_MIN_LENGTH),
    })
  .required();
