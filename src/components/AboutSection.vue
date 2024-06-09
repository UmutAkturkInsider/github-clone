<template>
  <div class="ml-4 md:w-1/4">
    <div class="hidden md:block">
      <p class="text-base font-semibold text-black">About</p>
      <div class="pb-2 mt-4 border-b">
        <span class="text-sm lg:text-base">
          A utility-first CSS framework for rapid UI development.
        </span>
        <div class="my-4">
          <a class="flex items-center mb-2 text-base font-semibold text-blue-600 hover:underline" href="#">
            <svg class="w-4 h-4 mr-2 text-gray-700" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
            </svg>
            tailwindcss.com/
          </a>
          <div class="flex flex-wrap gap-2 my-4">
            <template v-for="(tag, index) in tags" :key="index">
              <a :href="tag.href" class="px-2 py-1 text-xs leading-none text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200">
                {{ tag.text }}
              </a>
            </template>
          </div>
          <AboutDetails />

        </div>
      </div>
    </div>
    <div class="px-6 py-6 -mx-10 border-b md:mx-0 md:px-0">
      <p class="text-base font-semibold text-black">Latest release</p>
      <div class="flex mt-4 text-sm font-semibold text-black">
        <svg class="w-4 h-4 mt-1 mr-2 text-green-600" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
        </svg>
        <div>
          v3.4.4 <br>
          <span class="text-xs text-gray-600">4 days ago</span>
          <span class="ml-2 text-xs rounded-2xl border border-green-600 text-green-600 p-1 ">Latest</span>
        </div>
      </div>
      <div class="mt-4 text-xs text-blue-600">+ 211 releases</div>
    </div>
    <div class="px-6 py-6 -mx-10 border-b md:mx-0 md:px-0">
      <p class="text-base font-semibold text-black">Used by
        <span class="w-4 h-4 px-2 py-1 ml-1 text-gray-700 text-xs bg-gray-200 rounded-full">9.6m</span>
      </p>
      <div class="flex items-center mt-4 overflow-hidden text-blue-600 cursor-pointer hover:underline">
        <template v-for="(image, index) in images" :key="index">
          <img :src="image.src" class="inline-block object-cover w-10 h-10 text-white border-2 border-gray-400 rounded-full shadow-sm" alt="" />
        </template>
        <p class="pl-2 text-sm font-medium text-blue-600">+ 49,635</p>
      </div>
    </div>
    <div class="px-6 py-6 -mx-10 border-b md:mx-0 md:px-0">
      <p class="text-base font-semibold text-black">Contributors
        <span class="w-4 h-4 px-2 py-1 ml-1 text-xs bg-gray-300 rounded-full">285</span>
      </p>
      <div class="flex flex-wrap items-center mt-4 -mx-2 overflow-hidden">
        <template v-for="(contributor, index) in contributors" :key="index">
          <img :src="contributor.src" class="object-cover w-10 h-10 mx-2 mt-2 text-white border-2 border-gray-400 rounded-full shadow-sm cursor-pointer md:mt-0" alt="" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import AboutDetails from './AboutDetails.vue'

export default {
  name: 'AboutSection',
  components: {
    AboutDetails
  },

  data() {
    return {
      tags: [
        { text: 'tailwindcss', href: '#' },
        { text: 'css', href: '#' },
        { text: 'css-framework', href: '#' },
        { text: 'postcss', href: '#' },
        { text: 'functional-css', href: '#' },
        { text: 'utility-classes', href: '#' },
        { text: 'responsive', href: '#' }
      ],
      images: [
        { src: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
        { src: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
      ],
      contributors: [
        { src: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
        { src: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
      ]
    }
  }
}
</script>
