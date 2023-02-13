import { dateMap } from "../constants/constants";

export const calcDuration = (duration) => {
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

export const sortExperience = (data) => {
  let currDate = new Date();
  const sortedData = data.sort((a, b) => {
    const aDuration = getDurationStartAndEndDate(a.duration);
    const bDuration = getDurationStartAndEndDate(b.duration);

    if (aDuration[1].toLowerCase() === "present") {
      if (bDuration[1].toLowerCase() !== "present") {
        return -1;
      }
      let endMonth = currDate.toLocaleString("default", { month: "short" });
      let endYear = currDate.getFullYear();
      aDuration[1] = `${endMonth} ${endYear}`;
    }

    if (bDuration[1].toLowerCase() === "present") {
      if (aDuration[1].toLowerCase() !== "present") {
        return 1;
      }
      let endMonth = currDate.toLocaleString("default", { month: "short" });
      let endYear = currDate.getFullYear();
      bDuration[1] = `${endMonth} ${endYear}`;
    }

    let aStartMonth = dateMap[aDuration[0].split(" ")[0]];
    let aStartYear = parseInt(aDuration[0].split(" ")[1]);

    let aEndMonth = dateMap[aDuration[1].split(" ")[0]];
    let aEndYear = parseInt(aDuration[1].split(" ")[1]);

    let bStartMonth = dateMap[bDuration[0].split(" ")[0]];
    let bStartYear = parseInt(bDuration[0].split(" ")[1]);

    let bEndMonth = dateMap[bDuration[1].split(" ")[0]];
    let bEndYear = parseInt(bDuration[1].split(" ")[1]);

    let aStartDate = new Date(aStartYear, aStartMonth - 1);
    let aEndDate = new Date(aEndYear, aEndMonth - 1);
    let bStartDate = new Date(bStartYear, bStartMonth - 1);
    let bEndDate = new Date(bEndYear, bEndMonth - 1);

    if (aEndDate.getTime() === bEndDate.getTime()) {
      return aStartDate.getTime() < bStartDate.getTime() ? 1 : -1;
    } else {
      return aEndDate.getTime() < bEndDate.getTime() ? 1 : -1;
    }
  });

  return sortedData;
};

export const getDurationStartAndEndDate = (duration) => {
  let durationArr = duration.split("-").map((time) => time.trim());
  if (durationArr.length === 1) {
    durationArr.push(durationArr[0]);
  }
  return durationArr;
};
