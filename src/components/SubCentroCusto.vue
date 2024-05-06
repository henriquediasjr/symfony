<template>
    <div class="relative mt-5">
        <label class="label absolute block bg-input top-0 ltr:ml-3 rtl:mr-3 px-1 rounded font-heading uppercase">{{ label }}:</label>
      <input 
        type="number"      v-model="subCentroCusto"             class="form-control mt-2 pt-5"
        :placeholder="placeholder">
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: String,
        default: 'Sub Centro de Custo:'
      },
      placeholder: {
        type: String,
        default: 'Enter sub centro de custo'
      }
    },
    data() {
      return {
        subCentroCusto: null 
      };
    }
  };
  </script>
  
  <style>
  /* Add any custom styles here */
  </style>
  