import ViteRestart from 'vite-plugin-restart'

export default function setupRestart() {
  return ViteRestart({
    restart: [
      '.env.development'
    ]
  })
}
