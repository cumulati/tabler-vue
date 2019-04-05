export default {
    name: 'r-link',
    props: {
        to: {default: true},

        btn: {default: false},
        size: {default: false},
        outline: {default: false},
        type: {default: 'primary'},
    },
    template: `<router-link :class="className" :to="to"><slot>Link</slot></router-link>`,
    computed: {
        className () {
            const className = {}

            if (!!this.btn) {
                className['btn'] = true
                className[`btn-outline-${this.type}`] = this.outline
                className[`btn-${this.type}`] = !this.outline
                className[`btn-${this.size}`] = !!this.size
            }

            return className
        }
    }
}
