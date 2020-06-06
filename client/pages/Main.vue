<template>
  <div>
    <div class="h-2 w-full bg-gold-light"></div>
    <div class="w-full h-12  flex items-center justify-between px-6 mt-1">
      <router-link to="/" class="text-gold no-underline">Mevn</router-link>
      <div v-if="!auth" class="mt-3">
        <router-link class="text-brown no-underline" to="/auth/login"
          >Sign In</router-link
        >
        <router-link
          class="text-brown no-underline border-2 border-brown px-2 py-1 hover:text-brown-darkest hover:border-brown-darkest rounded-full ml-3"
          to="/auth/register"
          >Join Now</router-link
        >
      </div>
      <div v-else>
        <span
          class="cursor-pointer text-brown hover:text-brown-darkest"
          @click="unsetAuth"
          >Logout</span
        >
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
