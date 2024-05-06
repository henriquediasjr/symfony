<template>
    <div class="relative mt-5">
      <label 
        class="label absolute block bg-input top-0 ltr:ml-3 rtl:mr-3 px-1 rounded font-heading uppercase"
        :for="name">{{ label }}
      </label>
      <input 
        type="text" 
        :name="name" 
        :id="name" 
        :placeholder="placeholder" 
        :value="value" 
        @input="handleInput"
        class="form-control mt-2 pt-5"
        maxlength="6"
      >
    </div>
  </template>
  
  <script>
  export default {
    props: ['label', 'name', 'placeholder', 'value'],
    methods: {
      handleInput(event) {
        // Check if event.target.value is undefined
        if (event.target.value !== undefined) {
          // Remove non-digit characters
          let newValue = event.target.value.replace(/\D/g, '');
          // Limit length to 6 digits
          if (newValue.length > 6) {
            newValue = newValue.slice(0, 6);
          }
          this.$emit('input', newValue);
        } else {
          // If event.target.value is undefined, assign an empty string
          this.$emit('input', '');
        }
      }
    }
  };
  </script>
  
  <style>
  /* No need to define input styles here */
  </style>
  