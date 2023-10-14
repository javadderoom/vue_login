<script setup lang="ts">
import { decodeCredential } from 'vue3-google-login'
interface keyable {
    [key: string]: any  
}
const callback = (response:any) => {
  
    const  userData:keyable = decodeCredential(response.credential)
    console.log(userData)
    
    localStorage.setItem('firstname', userData.given_name)
    localStorage.setItem('lastname', userData.family_name)
    localStorage.setItem('email', userData.email)
}
</script>

<template>
  <GoogleLogin :callback="callback"/>
</template>