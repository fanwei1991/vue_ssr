<template>
  <button @click="alertName"></button>
</template>

<script>
export default {
  name: 'alert-btn',
  props: {
    name: {
      type: String,
      default: '按钮'
    }
  },
  methods: {
    alertName () {
      alert(this.name)
    }
  }
}
</script>

<style scoped>

</style>
