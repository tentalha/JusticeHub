import * as yup from "yup";

export const firSchema = yup.object().shape({
  complainantName: yup
    .string()
    .required("Name is required")
    .matches(/^[A-Za-z\s]+$/, "Invalid Name"),
  datetime: yup
    .date()
    .typeError("Invalid Date")
    .required("Date and Time is required"),
  complainantCNIC: yup
    .string()
    .required("CNIC is required")
    .matches(
      /^\d{5}-\d{7}-\d{1}$/,
      "CNIC must be in the format 99999-9999999-9"
    ),
  location: yup.string().required("Place of Incident is required"),
  applicationType: yup
    .string()
    .required("Incident Type is required")
    .matches(/^[^\d]+$/, "Incident Type cannot contain numbers"),
  complainantPhone: yup
    .string()
    .required("Phone Number is required")
    .matches(/^03\d{9}$/, "Phone Number should be like 03220000000"),
  caseNo: yup
    .string()
    .required("Case No is required")
    .matches(/^[A-Z]{3}\d{3}$/, "Case No must be like ABC123"),
  details: yup
    .string()
    .required("Details are required")
    .min(50, "Details must be at least 50 characters long"),
  suspects: yup.string(),
});
