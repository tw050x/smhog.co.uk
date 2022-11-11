export default {
  componentUpdated (element, binding) {
    // count lines by calculating computed font-size * computed line-height
    const computedStyle = window.getComputedStyle(element)

    console.log(computedStyle.height.replace('px', ''))
    console.log(computedStyle.lineHeight.replace('px', ''))

    console.log(computedStyle)

    const originalLineCount = computedStyle.height.replace('px', '') / computedStyle.lineHeight.replace('px', '')

    console.log(originalLineCount)
  }
}
