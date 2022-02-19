const parseTime = (fullTime: string) => {
  const time = new Date(fullTime).toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  return time
}

export default parseTime