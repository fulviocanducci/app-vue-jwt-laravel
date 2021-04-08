<template>
  <div>
      <b-button variant="danger" v-on:click="exit">Sair</b-button>
  </div>
</template>

<script>
export default {
    methods: {
        exit: function () {
            this.$store.commit('removeToken');
            this.$router.push('/login');
        }
    }
}
</script>
