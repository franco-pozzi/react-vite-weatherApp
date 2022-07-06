export const addDaysToDate = (days: number) => {
  const res = new Date();
  res.setDate(res.getDate() + days);
  return res;
};
