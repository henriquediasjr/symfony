<template>
    <div class="input-container">
      <label :for="name">{{ label }}</label>
      <input 
        type="text" 
        :name="name" 
        :id="name" 
        :placeholder="placeholder" 
        :value="value" 
        @input="handleInput"
        class="form-control"
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
  