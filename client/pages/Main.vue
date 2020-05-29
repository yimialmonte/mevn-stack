<template>
  <div>
    <div class="h-2 w-full bg-gold-light"></div>
    <div class="w-full h-12  flex items-center justify-between px-6">
      <div class="text-gold">Mevn</div>
      <div>
        <router-link class="text-brown no-underline" to="/auth/login">Sign In</router-link>
        <router-link class="text-brown no-underline border-2 border-brown p-1 rounded-full ml-3" to="/auth/register">Join Now</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
