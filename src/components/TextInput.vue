<template>
  <div>
    <label :for="name">{{ label }}:</label>
    <input :type="type" :name="name" :id="name" :placeholder="placeholder" :value="value" @input="updateValue($event.target.value)">
  </div>
</template>

<script>
export default {
  props: ['label', 'type', 'name', 'placeholder', 'value'],
  methods: {
    updateValue(newValue) {
      this.$emit('input', newValue);
    }
  }
};
</script>

<style>
/* Add your input styling here */
</style>
