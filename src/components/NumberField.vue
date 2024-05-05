<template>
    <div>
      <label>{{ label }}:</label>
      <input 
        type="text"
        :value="value" 
        @input="updateValue($event.target.value)"
        class="form-control"
        >
    </div>
  </template>
  
  <script>
  export default {
    props: ['label', 'value'],
    methods: {
      updateValue(newValue) {
        this.$emit('update:value', newValue);
      }
    }
  };
  </script>
  
  <style>
  </style>
  