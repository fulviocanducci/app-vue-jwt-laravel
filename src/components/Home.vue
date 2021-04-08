<template>
  <div>
    <div>Home</div>
    <div>{{items.length}}</div>
  </div>

</template>

<script>
import http from '../http';
export default {
  data() {
    return {
      items: []
    }
  },
  mounted() {
        http.get('http://localhost:8000/api/v1/todo')
            .then(result => {
                if (result.status === 200) {
                    this.items = result.data;
                }
            })
    }
}
</script>

<style>

</style>