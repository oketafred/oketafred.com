<template>
  <div class="w-full">
    <div class="px-6 xl:px-52 py-4 bg-gray-100">
      <div class="flex flex-col md:flex-row py-10">
        <div class="w-full">
          <img
            class="w-full md:w-72 rounded shadow" style="width: 400px"
            src="@/assets/images/oketafred.png"
            alt="Oketa Fred Photo"
          />
        </div>
        <div class="w-full h-64 mt-6 md:mt-0 sm:mt-0">
          <div>
            <p class="text-lg">Hello, I am</p>
            <h1 class=" text-3xl lg:text-5xl font-bold text-green-400 py-4">
              Oketa Fred
            </h1>
          </div>
          <div>
            <!-- <p class="leading-relaxed">
            A software developer building apps to make life easier and<br />
            contributing to open source. I have experience in Python,<br />
            JavaScript, TypeScript and learning ethereum (solidity).<br />
            Let me help you grow your business to the moon 🚀.
          </p> -->
            <p class="leading-relaxed text-xl py-6">
              A Full-Stack Software Engineer with 3+ years of experience in
              PHP/Laravel/Vue. I solve problems using software and I love
              learning new skills. What is yours? Let me help you grow your
              business to using the latest technologies 🚀.
            </p>
          </div>
          <div class="inline-flex space-x-4 pt-5 text-3xl">
            <div v-for="socialLink in socialLinks" :key="socialLink.name">
              <a
                :style="`color: ${socialLink.color}`"
                target="_blank"
                rel="noopener noreferrer"
                :href="socialLink.url"
                ><i :class="socialLink.icon"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="px-6 xl:px-52 py-4">
      <div class="contact w-full h-36">
        Contact Me
      </div>
      <div class="technologies h-56">
        Technologies
      </div>
    </div>

    <!-- Footer -->
    <div class="footer bg-gray-800">
      <div class="px-6 xl:px-52 py-4">
        <footer class="text-gray-200">
          <div>
            <div
              class="py-6 mx-auto flex justify-center items-center sm:flex-row flex-col"
            >
              <p class="sm:text-sm sm:ml-6 sm:mt-0 mt-4">
                &copy; {{ getCurrentYear }} - Oketa Fred - All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
    <!-- End Footer -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: true,
      socialLinks: [
        {
          name: "github",
          url: "https://github.com/oketafred",
          icon: "fab fa-github",
          color: "#171515",
        },
        {
          name: "linkedin",
          url: "https://www.linkedin.com/in/oketafred",
          icon: "fab fa-linkedin",
          color: "#0e76a8",
        },
        {
          name: "dev",
          url: "https://dev.to/oketafred",
          icon: "fab fa-dev",
          color: "#000000",
        },
        {
          name: "facebook",
          url: "https://www.facebook.com/oketa.fred",
          icon: "fab fa-facebook",
          color: "#4267B2",
        },
        {
          name: "twitter",
          url: "https://twitter.com/oketafred",
          icon: "fab fa-twitter",
          color: "#1DA1F2;",
        },
      ],
    };
  },
  computed: {
    getCurrentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>
