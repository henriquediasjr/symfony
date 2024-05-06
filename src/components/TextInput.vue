<template>
    <div class="relative mt-5">
        <label class="label absolute block bg-input top-0 ltr:ml-3 rtl:mr-3 px-1 rounded font-heading uppercase" :for="name">{{ label }}:</label>
        <input 
            :type="type" 
            :name="name" 
            :id="name" 
            :placeholder="placeholder" 
            :value="value" 
            @input="updateValue($event.target.value)"
            class="form-control mt-2 pt-5"
        >
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
</style>
