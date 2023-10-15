<script setup lang="ts">
  import TextInput from '@/components/TextInput.vue';
  import { ref } from 'vue';


  const userData = ref({firstName: '',
                        lastName: '',
                        email: ''})
  
 
  userData.value.firstName = localStorage.getItem('firstname') || '' ;
  userData.value.lastName = localStorage.getItem('lastname') || '';
  userData.value.email = localStorage.getItem('email') || '';


  function handleSubmit(){
    console.log(userData)
    localStorage.setItem('firstname', userData.value.firstName)
    localStorage.setItem('lastname', userData.value.lastName )
    localStorage.setItem('email', userData.value.email )
  }
 
</script>
<template>
  <div class="form-container">
    <form class="form" @submit.prevent="handleSubmit()">
      <TextInput  v-model="userData.firstName" :placeholder="'نام خود را وارد کنید'" :label="'نام'" :type="'text'"/>
      <TextInput v-model="userData.lastName" :placeholder="'نام خانوادگی را وارد کنید'" :label="'نام خانوادگی'" :type="'text'"/>
      <TextInput v-model="userData.email" :placeholder="'آدرس ایمیل معتبر وارد کنید'" :label="'ایمیل'" :type="'email'"/>
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
