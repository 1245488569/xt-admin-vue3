import { VitePWA } from 'vite-plugin-pwa'

export default function setupPwa(env: Record<string, string>) {
  const { VITE_APP_TITLE, VITE_APP_SHORT_TITLE } = env
  return VitePWA({
    base: './',
    manifest: {
      'name': VITE_APP_TITLE,
      'short_name': VITE_APP_SHORT_TITLE,
      'description': '基于Vue3的中后台管理系统框架',
      'display': 'standalone',
      'background_color': '#fff',
      'theme_color': '#e60000',
      'icons': [
        {
          'src': './pwa_icons/192x192.png',
          'sizes': '192x192',
          'type': 'image/png'
        },
        {
          'src': './pwa_icons/384x384.png',
          'sizes': '384x384',
          'type': 'image/png'
        }
      ]
    }
  })
}
