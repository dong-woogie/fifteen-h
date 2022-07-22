export const displayTimeNumber = (number: number) => {
  return number < 10 ? "0" + number : number;
};
export const getDateId = (year: number, month: number, date: number) => {
  return `${year}_${month}_${date}`;
};

export const day_ko = ["일", "월", "화", "수", "목", "금", "토"];
