export default {
  name: 'tag-list',
  render(createElement) {
    return createElement(
      'tbody', {
        class: {'tags': true}
      }, [
        this.$slots.default
      ])
  }
 }
