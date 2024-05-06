<template>
  <div class="relative mt-5">
    <label class="label absolute block bg-input top-0 ltr:ml-3 rtl:mr-3 px-1 rounded font-heading uppercase">{{ label }}:</label>
    <input 
      type="text" 
      :value="formattedValue" 
      @input="handleInput"
      class="form-control mt-2 pt-5"
      placeholder="12345-678"
      maxlength="9"
    >
  </div>
</template>

<script>
export default {
  props: ['label', 'value'],
  computed: {
    formattedValue() {
      // Format the value as a CEP mask
      if (this.value) {
        let cep = this.value.replace(/\D/g, ''); // Remove non-numeric characters
        cep = cep.substring(0, 8); // Limit length to 8 digits
        cep = cep.replace(/^(\d{5})(\d{3})$/, '$1-$2'); // Apply CEP mask
        return cep;
      } else {
        return '';
      }
    }
  },
  methods: {
    handleInput(event) {
      // Remove non-numeric characters
      let newValue = event.target.value.replace(/\D/g, '');
      // Limit length to 8 digits
      if (newValue.length > 8) {
        newValue = newValue.slice(0, 8);
      }
      // Emit the formatted value
      this.$emit('update:value', newValue);
    }
  }
};
</script>

<style>
/* Add any custom styles here */
</style>
