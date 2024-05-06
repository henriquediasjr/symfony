<template>
    <div class="relative mt-5">
        <label class="label absolute block bg-input top-0 ltr:ml-3 rtl:mr-3 px-1 rounded font-heading uppercase">{{ label }}</label>
      <input 
        type="text" 
        v-model="formattedValue" 
        @input="handleInput"
        class="form-control mt-2 pt-5"
        :placeholder="placeholder"
      >
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: String,
        default: 'Number Input:'
      },
      placeholder: {
        type: String,
        default: 'Enter number'
      }
    },
    data() {
      return {
        formattedValue: ''
      };
    },
    methods: {
      handleInput(event) {
        // Remove non-digit characters
        let newValue = event.target.value.replace(/\D/g, '');
        // Limit length to 10 digits
        if (newValue.length > 10) {
          newValue = newValue.slice(0, 10);
        }
        this.formattedValue = newValue;
      }
    }
  };
  </script>
  
  <style>
  /* Add any custom styles here */
  </style>
  