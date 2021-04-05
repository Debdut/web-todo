export function faviconLink (link) {
  const url = new URL(link)

  return `${url.origin}/favicon.ico`
}

export function timeAgo (t) {
  const diff = (new Date()).getTime() - (new Date(t)).getTime()

  const seconds = diff / 1000
  if (seconds < 60) {
    return `${parseInt(seconds)}s`
  }

  const minutes = seconds / 60
  if (minutes < 60) {
    return `${parseInt(minutes)}m`
  }

  const hours = minutes / 60
  if (hours < 24) {
    return `${parseInt(hours)}h`
  }

  const days = hours / 24
  if (days < 7) {
    return `${parseInt(days)}d`
  }

  const weeks = days / 7
  if (weeks < 30 / 7) {
    return `${parseInt(weeks)}w`
  }

  const months = days / 30
  if (months < 365/30 ) {
    return `${parseInt(months)}mo`
  }

  const years = days / 365
  return `${parseInt(years)}y`
}