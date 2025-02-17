function formatTimePublished(time) {
  const timeParsed = Date.parse(time);
  const dateToday = Date.now();
  const timePostedML = dateToday - timeParsed;

  const formats = {
    year: 3.156e10,
    month: 2628202743.3266106,
    week: 604845995.8932518959,
    day: 86406570.841893151402,
    hour: 3600273.7850788808428,
    minut: 60004.563084648012591,
    second: 1000.0760514108002326,
  };
  for (const [period, limit] of Object.entries(formats)) {
    if (timePostedML > limit) {
      const value = Math.floor(timePostedML / limit);
      return { value: value, period: period };
    }
  }
}

function handlePublishedTime(time) {
  const item = formatTimePublished(time);
  return item.value > 1
    ? `${item.value} ${item.period}s ago`
    : `${item.value} ${item.period} ago`;
}

function newContent(time) {
  const item = formatTimePublished(time);
  const isNewContent =
    item.period === "year" || item.period === "month" || item.period === "week"
      ? false
      : item.period === "day" && item.value > 6
      ? false
      : true;

  return isNewContent;
}

export { formatTimePublished, handlePublishedTime, newContent };
