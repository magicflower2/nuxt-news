export function getCurrentDateAndDay() {
  const daysOfWeek = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const dayOfWeek = daysOfWeek[currentDate.getDay()];

  const formattedDate = `${year}-${month}-${day} ${dayOfWeek}`;
  return formattedDate;
}

export function getRandomNumber(min: number = 0, max: number = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
