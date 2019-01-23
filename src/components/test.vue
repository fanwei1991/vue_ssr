<template>
  <div class="test">
    <input type="text" v-model="val">
    <button @click="add">add</button>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      val: ''
    }
  },
  methods: {
    add () {
      this.val += 1
    }
  }
}
</script>

<style scoped>

</style>
