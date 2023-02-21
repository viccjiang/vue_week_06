export function validatePhoneNumber (number) {
  const pattern = /^(09|\\+8869)\\d{8}$/
  console.log(number)
  console.log(pattern.test(number))
  return pattern.test(number)
}
