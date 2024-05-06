<template>
    <div class="relative mt-5">
      <label class="label absolute block bg-input top-0 ltr:ml-3 rtl:mr-3 px-1 rounded font-heading uppercase" :for="name">{{ label }}</label>
      <input 
        type="text" 
        :name="name" 
        :id="name" 
        :placeholder="placeholder" 
        :value="value" 
        @input="handleInput"
        class="form-control mt-2 pt-5"
      >
    </div>
  </template>
  
  <script>
  export default {
    props: ['label', 'name', 'placeholder', 'value'],
    methods: {
      handleInput(event) {
        this.$emit('input', event.target.value);
      }
    }
  };
  </script>
  
  <style>
  /* No need to define input styles here */
  </style>
  