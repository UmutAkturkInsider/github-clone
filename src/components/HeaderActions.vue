<template>
  <div class="hidden md:block md:flex md:justify-between">
    <div class="flex text-center border rounded-lg md:border-none" v-for="(action, index) in actions" :key="index">
      <div class="flex items-center px-2 py-1 border-gray-400 cursor-pointer md:rounded-l-lg md:border-t md:border-l md:border-b hover:bg-gray-300">
        <svg v-if="action.icon" class="w-4 h-4 mr-1 text-gray-700" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
          <path :d="action.iconPath" />
        </svg>
        <span class="self-center text-sm font-medium">{{ action.text }}</span>
        <svg v-if="action.icon && action.iconPath2" class="w-3 h-3 ml-1 text-gray-700 fill-current" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
          <path :d="action.iconPath2" />
        </svg>
      </div>
      <div class="px-2 py-1 text-sm font-semibold border border-t border-gray-400 rounded-r-lg cursor-pointer hover:text-blue-600">{{ action.count }}</div>
    </div>
  </div>
  <div class="flex justify-between md:hidden">
    <button type="button" v-for="(action, index) in actions" :key="index" class="flex justify-center w-1/2 py-1 mr-2 text-center bg-gray-100 border border-gray-400 rounded-lg focus:outline-none hover:bg-gray-200">
      <div class="flex items-center px-2">
        <svg v-if="action.icon" class="w-4 h-4 mr-1 text-gray-700" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
          <path :d="action.iconPath" />
        </svg>
        <span class="self-center text-sm font-medium">{{ action.text }}</span>
      </div>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'HeaderActions',
    data() {
      return {
        actions: [
          {
            text: 'Unstar',
            icon: true,
            iconPath: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z',
            count: '24.1k',
          },
          {
            text: 'Watch',
            icon: true,
            iconPath: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z',
            iconPath2: 'M19 9l-7 7-7-7',
            count: '423',
          },
          {
            text: 'Fork',
            icon: true,
            iconPath: 'M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z',
            count: '1.1k',
          },
        ],
      }
    }
  }
</script>
