export const userTypes = ["citizen", "operator", "investigator", "admin"];

export const registerRequiredFeilds = ["name", "email", "password", "role"];

export const USER_ALREADY_EXIST = {
  type: "USER-ALREADY-EXIST",
  message: "User with this email already exists!",
};

export const PASSWORD_REQUIRED = "Password field is required.";

export const PASSWORD_INVALID = "Password must be at least 8 characters long.";

export const EMAIL_REQUIRED = "Email field is required.";

export const EMAIL_INVALID = "Please enter a valid email address.";

export const EMAIL_EXISTS =
  "Email already exists. Please choose a different email.";

export const EMAIL_NOT_EXIST = "USER NOT FOUND";

export const NAME_REQUIRED = "Name field is required.";

export const NAME_INVALID = "Invalid name. Please enter a valid name.";

export const ROLE_REQUIRED = "Role field is required.";

export const ROLE_INVALID = "Invalid role. Please choose a valid role";
