import { extend, configure } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
    dirty: ['is-dirty', 'is-dirty'], // multiple classes per flag!
  },
})

extend('required', {
  ...required,
  message: '{_field_} moet ingevuld worden',
})

extend('email', {
  ...email,
  message: 'Ongeldige e-mail',
})

extend('therms', {
  validate: (value) => {
    return value
  },
  message: 'Ga akkoord met de voorwaarden',
})

extend('phoneNumber', {
  validate: (value) => {
    const regex = /^\(?([+]31|0031|0)-?6(\s?|-)([0-9]\s{0,3}){8}$/
    const correctNumber = regex.test(value)
    return correctNumber
  },
  message: 'Ongeldig telefoonnummer',
})

extend('zipCode', {
  validate: (value) => {
    const regex = /^(?:NL-)?(\d{4})\s*([A-Z]{2})$/i
    const correctNumber = regex.test(value)
    if (correctNumber) {
      return true
    } else {
      return false
    }
  },
  message: 'Ongeldige postcode',
})
