export const checkValidData = (email, pwd) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPwdValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    pwd
  );
  if (!isEmailValid) return "Email is not valid";
  if (!isPwdValid) return "Password is not valid";
  return null;
};
