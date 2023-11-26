import {
  MISSING_REQUIRED_FIELD,
} from "constant";
import * as yup from "yup";

const cnicRegExp = /^\d{5}-\d{7}-\d{1}$/; // CNIC format: 12345-1234567-1
const isValidCNIC = (value) => cnicRegExp.test(value);

export const criminalSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .matches(/^[A-Za-z\s]+$/, "Invalid Name"),
  CNIC: yup
    .string()
    .required("CNIC is required")
    .matches(
      /^\d{5}-\d{7}-\d{1}$/,
      "CNIC must be in the format 99999-9999999-9"
    ),
  age: yup
    .string()
    .required("age is required"),
});

export const checkCriminalStatusSchema = yup.object().shape({

CNIC: yup
.string()
.required(MISSING_REQUIRED_FIELD)
.test("valid-cnic", "Invalid CNIC format", isValidCNIC),
});