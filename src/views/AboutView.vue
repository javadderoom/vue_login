<script setup lang="ts">
  import TextInput from '@/components/TextInput.vue';
import { ref } from 'vue';

  const firstName = ref(localStorage.getItem('firstname') || '') ;
  const lastName = ref(localStorage.getItem('lastname') || '');
  const email = ref(localStorage.getItem('email') || '');

  function handleSubmit(){
    console.log(firstName)
    localStorage.setItem('firstname', firstName.value)
    localStorage.setItem('lastname', lastName.value)
    localStorage.setItem('email', email.value)
  }
 
</script>
<template>
  <div class="form-container">
    <form class="form" @submit.prevent="handleSubmit()">
      <TextInput  v-model="firstName" :placeholder="'نام خود را وارد کنید'" :label="'نام'" />
      <TextInput v-model="lastName" :placeholder="'نام خانوادگی را وارد کنید'" :label="'نام خانوادگی'"/>
      <TextInput v-model="email" :placeholder="'آدرس ایمیل معتبر وارد کنید'" :label="'ایمیل'"/>
      <button>ثبت</button>
    </form>
    
  </div>
</template>
<style>

  .form{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: space-evenly;
    direction: rtl;
    width: 300px;
    margin: auto;
  }
  .form input[type="text"]{
    background-color: #9b9b9b;
  }
  button{
    background-color: #41B883;
      color: white;
      padding: 10px;
      
      border-radius: 4px;
      cursor: pointer;
      font-size: 18px;
  }
</style>
