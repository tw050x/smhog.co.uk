import Vue from 'vue'

Vue.filter('css', function (styleObject) {
  const entries = Object.entries(styleObject)
  let result
  if (entries.length) {
    result = entries.reduce((styles, [ propertyName, propertyValue ]) => {
      const name = propertyName.replace(/([A-Z])/g, matches => `-${matches[0].toLowerCase()}`)
      const value = propertyValue
      return `${styles}${name}:${value};`
    }, '')
  }
  else result = ''
  return result
})
