export function scrollToTop() {
  // Window can be null in non-DOM environments
  // TODO: Check if this works in IE11
  if (window) {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  }
}
