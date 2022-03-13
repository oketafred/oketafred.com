<template>
  <div class="bg-gray-900 text-gray-100 py-3.5 xl:px-52 sm:px-30 px-6 shadow md:flex justify-between items-center fixed w-full">
    <div class="flex items-center">
      <span class=" text-green-500 text-xl mr-1">
        <CodeIcon />
      </span>
      <router-link to="/">
        <h1 class=" text-xl">Oketa Fred</h1>
      </router-link>
    </div>
    <span @click="menuOpen()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
      <MenuAlt3Icon class="mt-2"/> 
    </span>
    <ul class="md:flex md:items-center md:px-0 px-10 md:pb-0 pb-10 md:static absolute left-0 bg-gray-900 md:w-auto w-full top-14 duration-700 ease-in" :class="[open ? 'hidden' : 'block']">
      <li class="-mx-4 md:mx-4 md:my-0 my-6" v-for="link in links" :key="link.name">
        <router-link :to="link.url" exact active-class="text-green-500" class="text-xl hover:text-green-500">{{ link.name }}</router-link>
      </li>
      <li class="-ml-4 md:ml-4">
        <a href="oketafred-cv-2022.pdf" 
        download
        class="flex bg-green-400 cursor-pointer hover:bg-green-500 duration-300 text-sm font-semibold text-white rounded py-1.5 px-4">
          <span><DownloadIcon/></span>
          Download Resume</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { MenuAlt3Icon, CodeIcon, DownloadIcon } from "@vue-hero-icons/outline"
export default {
  name: "Navbar",
  components: {
    MenuAlt3Icon,
    CodeIcon,
    DownloadIcon
  },
  data() {
    return {
      open: true,
      links: [
        { name: "Home", url: "/" },
        { name: "Projects", url: "/projects" },
      ]
    }
  },
  methods: {
    menuOpen() {
      this.open = !this.open;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>