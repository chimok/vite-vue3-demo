<template>
  <div>Axios</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import axios from '../utils/axios'

export default defineComponent({
  name: 'Axios',
  setup() {
    axios
      .get('/users/chimok')
      .then((res) => {
        console.log('res: ', res)
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }
})
</script>
