import cookies from 'js-cookie'

/**
 *
 * @param {Number} number
 * format rupiah price
 */
export const rupiah = (number) => {
  let reverse = number.toString().split('').reverse().join(''),
    thousand = reverse.match(/\d{1,3}/g)
  thousand = thousand.join('.').split('').reverse().join('')
  return 'Rp ' + thousand
}

/**
 *
 * @param {String} word
 * @param {Number} length
 * to show dots ... when string to long
 */
export const truncated = (word, length) => {
  return String(word).slice(0, length) + ' ...'
}

/**
 *
 * to check when user success login
 */
export const isLoggedIn = () => {
  const email = cookies.get('user_data_email')
  return email ? true : false
}

/**
 *
 * to logut data user
 */
export const isLoggedOut = () => {
  cookies.remove('user_data_email')
  window.location.href = '/'
}
