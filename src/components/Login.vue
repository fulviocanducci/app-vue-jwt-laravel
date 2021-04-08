<template>
 <b-container>
   <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="E-mail"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="E-mail:"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.password"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>      

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>    
 </b-container>
</template>

<script>
import http from '../http';

export default {
    data() {
      return {
        form: {
          email: '',
          password: '',         
        }
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        http.post('auth/login', this.form)
          .then(result => {
            if (result.status === 200) {
              this.$store.commit('setToken', result.data.access_token);
              this.$router.push('/');
            }
          })
      },
      onReset(event) {
        event.preventDefault();        
        this.form.email = '';
        this.form.password = '';
      }
    }
  }
</script>

<style>

</style>