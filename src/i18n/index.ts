import i18NextInstance, { InitOptions } from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en-GB'
import sk from './sk-SK'

const debug = process.env.NODE_ENV === 'development'

const config: InitOptions = {
  resources: {
    'en-GB': en,
    'sk-SK': sk,
  },
  debug,
  lng: 'sk-SK',
  fallbackLng: 'sk-SK',
  keySeparator: '.',
  interpolation: {
    escapeValue: false
  },
  saveMissing: debug,
}

i18NextInstance.use(initReactI18next).init(config)

export const i18n = i18NextInstance
