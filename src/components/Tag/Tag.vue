<template>
  <span :class="getClassName">
    <slot/>
    {{ remove }}
    <a href="#" class="tag-addon" @click.prevent="$emit('remove')" v-if="hasRemove">
      <icon icon="x"/>
    </a>
  </span>
</template>

<script>
import Icon from '../Icon'

export default {
    name: 'tag',
    props: {
        /**
         * Rounded tag
         */
        rounded: {default: false},

        /**
         * Tag color
         */
        color: {default: '', type: String},

        /**
         * Removable
         */
        remove: {default: false}
    },

    components: {
      Icon
    },

    computed: {
        /**
         * Generates classes for tag
         * @returns {{}}
         */
        getClassName() {
            let c = {tag: true}

            if (!!this.rounded) c['tag-rounded'] = true

            if (this.color !== '') {
              c[`tag-${this.color}`] = true
            }

            return c
        },

        /**
         * Returns true if remove is defined and otherwise false
         * @returns {boolean}
         */
        hasRemove() {
            return this.remove !== false
        }
    }
}
</script>
