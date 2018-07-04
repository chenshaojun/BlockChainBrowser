<template>
  <div class="block">
    <input placeholder="高度" v-model.lazy="height">
  </div>
</template>

<script>
export default {
  name: 'Block',
  data () {
    return {
      height: 0,
      blockInfo: {}
    }
  },
  methods: {
  }
}
</script>
