export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const getCurrentNameOfMonth = () => {
  return new Date().toLocaleString("default", { month: "long" });
};
