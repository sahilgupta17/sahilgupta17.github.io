export const calcDuration = (duration) => {
  const dateMap = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
  };

  const data = duration.split("-").map((time) => time.trim());
  if (data.length === 1) {
    return "1mo";
  }

  let startMonth = dateMap[data[0].split(" ")[0]];
  let startYear = parseInt(data[0].split(" ")[1]);
  let endMonth = new Date().getMonth() + 1;
  let endYear = new Date().getFullYear();

  if (data[1].toLowerCase() !== "present") {
    endMonth = dateMap[data[1].split(" ")[0]];
    endYear = parseInt(data[1].split(" ")[1]);
  }

  let diff = (endYear - startYear) * 12 + (endMonth - startMonth);

  if (diff % 12 === 0) {
    return `${diff / 12}yr`;
  }
  if (diff < 12) {
    return `${diff}mo`;
  }
  return `${diff / 12}yr ${diff % 12}mo`;
};
