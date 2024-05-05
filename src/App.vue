<template>
  <div id="app">
    <TextInput label="Name" type="text" name="name" placeholder="Enter your name" v-model="name"></TextInput>
    <CnpjInput label="CNPJ" name="cnpj" placeholder="Enter your CNPJ" v-model="cnpj"></CnpjInput>
  </div>
</template>

<script>
import TextInput from './components/TextInput.vue';
import CnpjInput from './components/CnpjInput.vue';

export default {
  components: {
    TextInput,
    CnpjInput
  },
  data() {
    return {
      name: '',
      cnpj: ''
    };
  }
};
</script>

<style>
/* Add your app styling here */
</style>
