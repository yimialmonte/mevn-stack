<template>
  <div class="my-32">
    <h1 v-if="!auth" class="text-center text-brown">
      Mevn Auth
    </h1>
    <h1 v-else class="text-center text-brown">Welcome {{ user.name }}</h1>
  </div>
</template>
