<template>
    <div class="relative mt-5">
      <label class="label absolute block bg-input top-0 ltr:ml-3 rtl:mr-3 px-1 rounded font-heading uppercase">{{ label }}</label>
      <input 
        type="text" 
        v-model="contaGerencial" 
        class="form-control mt-2 pt-5" :placeholder="placeholder">
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: String,
        default: 'Conta Gerencial:'
      },
      placeholder: {
        type: String,
        default: 'Enter conta gerencial'
      }
    },
    data() {
      return {
        contaGerencial: '' 
      };
    }
  };
  </script>
  
  <style>
  /* Add any custom styles here */
  </style>
  