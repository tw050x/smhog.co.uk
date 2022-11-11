export function getMeta (vm) {
  const { metaDescription, metaKeywords, metaTitle } = vm.$options || {}

  let description = null
  let keywords = null
  let title = null

  if (metaDescription) {
    description = typeof metaDescription === 'function' ? metaDescription.call(vm) : metaDescription
  }

  if (metaKeywords) {
    keywords = typeof metaKeywords === 'function' ? metaKeywords.call(vm) : metaKeywords
  }

  if (metaTitle) {
    title = typeof metaTitle === 'function' ? metaTitle.call(vm) : metaTitle
  }

  return {
    description,
    keywords,
    title
  }
}

export function serverMetaCreatedMixin () {
  const { description, keywords, title } = getMeta(this)

  if (description) {
    this.$ssrContext.description = description
  }
  if (keywords) {
    this.$ssrContext.keywords = keywords
  }
  if (title) {
    this.$ssrContext.title = title
  }
}

export function clientMetaMountedMixin () {
  const { description, keywords, title } = getMeta(this)

  if (description) {
    // @todo
  }
  if (keywords) {
    // @todo
  }
  if (title) {
    document.title = title
  }
}
