export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const getCurrentMonth = () => {
  return new Date().toLocaleString("default", { month: "long" });
};
