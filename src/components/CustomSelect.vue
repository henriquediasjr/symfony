<template>
  <div class="relative mt-5">
    <label class="label absolute block bg-input top-0 ltr:ml-3 rtl:mr-3 px-1 rounded font-heading uppercase">{{ label }}</label>
    <select v-model="selectedOption" class="form-select mt-2 pt-5">
      <option v-for="(option, index) in options" :key="index" :value="option">{{ option }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Select Option:'
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectedOption: ''
    };
  }
};
</script>

<style>
/* Add any custom styles here */
</style>
