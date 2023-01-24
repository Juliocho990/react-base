import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

function requireAll(requireContext: __WebpackModuleApi.RequireContext) {
  return requireContext.keys().map(requireContext)
}

i18next.use(initReactI18next).init({
  lng: 'es',
  supportedLngs: ['es', 'en'],
  fallbackLng: 'en',
  initImmediate: false
})

if (process.env.NODE_ENV !== 'test') {
  requireAll(require.context('..', true, /i18n\.(js|ts)$/))
}

export default i18next
