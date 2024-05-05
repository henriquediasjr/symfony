<template>
    <div>
      <label :for="name">{{ label }}:</label>
      <input 
        type="text" 
        :name="name" 
        :id="name" 
        :placeholder="placeholder" 
        :value="formattedCnpj" 
        @input="handleInput"
        class="form-control"
        >
    </div>
  </template>
  
  <script>
  export default {
    props: ['label', 'name', 'placeholder', 'value'],
    computed: {
      formattedCnpj() {
        // Format CNPJ as mask (##.###.###/####-##)
        if (!this.value) return '';
        let cnpj = this.value.replace(/\D/g, ''); // Remove non-digit characters
        cnpj = cnpj.slice(0, 14); // Ensure only up to 14 digits are kept
        cnpj = cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5'); // Apply CNPJ format
        return cnpj;
      }
    },
    methods: {
      handleInput(event) {
        // Extract digits only and emit the input event
        const digitsOnly = event.target.value.replace(/\D/g, '').slice(0, 14);
        this.$emit('input', digitsOnly);
      }
    }
  };
  </script>
  
  <style>
  </style>
  