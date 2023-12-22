export const IdentifyErrorForFIR = (error) => {
  switch (error.errType) {
    case "UN-AUTHORIZED":
      return "Email or Password is invalid!";
    case "INTERNAL-SERVER-ERROR":
      return "Some server side error occurred!";
    case "VALIDATION-ERROR":
      return "Some error or missing field in Input";
    case "CASE-ALREADY-EXISTS":
      return "Case with this caseNo already exists!";
    default:
      return "Something went wrong. Please try again later.";
  }
};
