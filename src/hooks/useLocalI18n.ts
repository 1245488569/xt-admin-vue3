import { useI18n } from 'vue-i18n'

export default function useLocalI18n() {
  function generateTitle(title: string) {
    if (!title)
      return ''

    const i18n = useI18n()

    return i18n.te(title) ? i18n.t(title) : title
  }

  return {
    generateTitle,
  }
}
