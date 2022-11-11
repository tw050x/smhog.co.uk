import changeCase from 'change-case'

export default {
  methods: {
    format (string, target) {
      let result

      switch (target) {
      case 'camel':
        result = camelCase(string)
        break
      case 'pascal' :
        result = pascalCase(string)
        break
      case 'sentence' :
        result = sentenceCase(string)
        break
      case 'title' :
        result = titleCase(string)
        break
      default :
        result = sentenceCase(string)
      }

      return result
    }
  }
}

export function camelCase (string) {
  return changeCase.camelCase(string)
}

export function pascalCase (string) {
  return changeCase.pascalCase(string)
}

export function sentenceCase (string) {
  return changeCase.sentenceCase(string)
}

export function titleCase (string) {
  return changeCase.titleCase(string)
}
