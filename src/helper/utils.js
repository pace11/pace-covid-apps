/**
 *
 * @param {Number} params
 */
const digit = (params) => {
  let string = params.toString(),
    rest = string.length % 3,
    value = string.substr(0, rest),
    thousands = string.substr(rest).match(/\d{3}/g),
    separator = ''

  if (thousands) {
    separator = rest ? ',' : ''
    value += separator + thousands.join(',')
  }
  return value
}

export default {
  digit: digit,
}
