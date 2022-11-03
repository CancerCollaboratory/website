export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const getNameOfMonth = () => {
  return new Date().toLocaleString("default", { month: "long" });
};
