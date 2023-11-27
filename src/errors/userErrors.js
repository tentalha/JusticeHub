export const IdentifyErrorForAuth = (error) => {
  switch (error.errType) {
    case "UN-AUTHORIZED":
      return "Email or Password is invalid!";
    case "CONFLICT-ERROR":
      return "A User is already logged in!";
    case "INTERNAL-SERVER-ERROR":
      return "Some server side error occurred!";
    case "VALIDATION-ERROR":
      return "Some error or missing field in Input";
    case "RESOURCE-ALREADY-EXIST":
      return "Resource already exists";
    default:
      return "Something went wrong. Please try again later.";
  }
};
