function formatNumbers(views) {
  views = parseInt(views);

  const formats = { 10e5: "K", 10e8: "M", 10e11: "B" };
  for (const [limit, simbol] of Object.entries(formats)) {
    if (views < 10e2) {
      return `${views}`;
    }
    if (views < limit) {
      let numberFormated = ((views / limit) * 1000).toFixed(1);
      if(numberFormated.at(-1) == 0 && numberFormated.at(-2) === '.'){numberFormated = numberFormated.split('.')[0]}
      return `${numberFormated}${simbol}`;
    }
  }
}

export { formatNumbers };
