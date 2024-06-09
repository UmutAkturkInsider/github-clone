<template>
  <div class="mt-4 mb-2 md:hidden">
    <span class="text-sm">
      {{ description }}
    </span>
    <div class="my-2">
      <a v-for="(item, index) in links" :key="index" :href="item.href" class="flex items-center mb-1 text-sm font-semibold text-gray-600 hover:underline">
        <svg v-if="item.icon" :class="item.iconClass" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
          <path :d="item.iconPath" />
        </svg>
        {{ item.text }}
      </a>
      <div class="flex">
        <a v-for="(item, index) in stats" :key="index" :href="item.href" class="flex items-center mb-1 text-sm font-medium text-gray-700 hover:underline hover:text-blue-500">
          <svg v-if="item.icon" :class="item.iconClass" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
            <path :d="item.iconPath" fill-rule="evenodd" />
          </svg>
          {{ item.text }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MobileHeader',
    data() {
      return {
        description: 'A utility-first CSS framework for rapid UI development.',
        links: [
          {
            href: '#',
            text: 'tailwindcss.com/',
            icon: true,
            iconClass: 'w-4 h-4 mr-2 text-gray-700',
            iconPath: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
          },
          {
            href: '',
            text: 'MIT License',
            icon: true,
            iconClass: 'w-4 h-4 mr-2 text-gray-700 fill-current',
            iconPath: 'M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z',
          },
          {
            href: '',
            text: '24.1k stars',
            icon: true,
            iconClass: 'w-4 h-4 mr-2 fill-current',
            iconPath: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
          },
          {
            href: '',
            text: '1.1k forks',
            icon: true,
            iconClass: 'w-4 h-4 mr-1 fill-current',
            iconPath: 'M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z',
          },
        ],
        stats: [
          {
            href: '',
            text: '24.1k stars',
            icon: true,
            iconClass: 'w-4 h-4 mr-2 fill-current',
            iconPath: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
          },
          {
            href: '',
            text: '1.1k forks',
            icon: true,
            iconClass: 'w-4 h-4 mr-1 fill-current',
            iconPath: 'M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z',
          },
        ],
      }
    }
  }
</script>
