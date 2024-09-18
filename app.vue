<template>
  <body class="bg-black w-screen min-h-screen text-white">
    <NuxtPage />
  </body>
  <NuxtRouteAnnouncer />
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap');

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
