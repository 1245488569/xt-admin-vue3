import Icons from 'unplugin-icons/vite'

export default function setupIcons() {
  return Icons({
    compiler: 'vue3',
    autoInstall: true,
    scale: 1,
    defaultStyle: `
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
      `
  })
}
