<template>
    
        <label :for="'javad'">{{ label }} :</label>
        <input :type="type" :name="'javad'"  :value= "modelValue" :placeholder= "placeholder" @input="$emit('update:modelValue', 
        ($event.target as HTMLInputElement).value)">
    
      
</template>
<script setup lang="ts">
   
    defineProps({
        modelValue: String,
        placeholder: String,
        label: String,
        type: String
    })
    
    
</script>
<style>
     input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-bottom: 10px;
      
    }
    label{
        margin: 5px;
    }
</style>