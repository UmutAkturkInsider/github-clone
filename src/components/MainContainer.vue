<template>
  <div class="px-6 mt-4 overflow-x-hidden lg:px-10">
    <div class="flex flex-col md:flex-row md:justify-between">
      <div class="flex items-center">
        <span>
          <svg class="w-4 h-4 mr-2 text-gray-600 fill-current" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
          </svg>
        </span>
        <div class="text-xl font-medium text-blue-700 cursor-pointer hover:underline">tailwindcss</div>
        <span class="mx-1 text-xl font-medium text-gray-800">/</span>
        <div class="text-xl font-semibold text-blue-700 cursor-pointer hover:underline">tailwindcss</div>
      </div>
      <MobileHeader />
      <HeaderActions />
    </div>
    <div class="flex items-center justify-between px-10 mt-6 -mx-10 border-b select-none md:mt-4">
      <div class="flex">
        <div class="flex items-center px-4 pb-2 text-sm border-b-2 border-orange-400 cursor-pointer">
          <svg class="hidden w-5 h-5 mr-1 text-gray-700 md:block" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
          Code</div>
        <div class="flex items-center px-4 pb-2 text-sm border-b-2 border-transparent cursor-pointer hover:border-gray-300">
          <svg class="hidden w-5 h-5 mr-1 text-gray-700 md:block" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Issues
          <span class="flex items-center justify-center w-6 h-6 p-1 ml-1 text-xs bg-gray-200 rounded-full">25</span>
        </div>
        <div class="flex items-center px-4 pb-2 text-sm border-b-2 border-transparent cursor-pointer hover:border-gray-300">
          <svg class="hidden w-5 h-5 mr-1 text-gray-600 fill-current md:block" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
          </svg>
          Pull requests
          <span class="flex items-center justify-center w-6 h-6 p-1 ml-1 text-xs bg-gray-200 rounded-full">15</span>
        </div>
        <div class="flex items-center hidden px-4 pb-2 text-sm border-b-2 border-transparent cursor-pointer hover:border-gray-300 md:flex md:block">
          <svg class="hidden w-5 h-5 mr-1 text-gray-700 md:block" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
          Discussions
        </div>
        <div class="flex items-center hidden px-4 pb-2 text-sm border-b-2 border-transparent cursor-pointer hover:border-gray-300 md:block md:flex">
          <svg class="hidden w-5 h-5 mr-1 text-gray-700 md:block" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Actions
        </div>
        <div class="flex items-center hidden px-4 pb-2 text-sm border-b-2 border-transparent cursor-pointer hover:border-gray-300 lg:flex lg:block">
          <svg class="hidden w-5 h-5 mr-1 text-gray-700 md:block" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"></path></svg>
          Security
        </div>
        <div class="flex items-center hidden px-4 pb-2 text-sm border-b-2 border-transparent cursor-pointer hover:border-gray-300 lg:flex lg:block">
          <svg  class="hidden w-5 h-5 mr-1 text-gray-700 md:block" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          Insights
        </div>
      </div>
      <div class="flex items-start pb-2 cursor-pointer md:hidden">
        <svg class="w-5 h-5 text-gray-700 fill-current" fill="currentColor" viewBox="0 0 20 20"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
      </div>
    </div>
    <div class="container pb-10 mx-auto mt-8">
      <div class="md:flex">
        <div class="w-full mr-4 md:w-3/4">
          <div class="flex justify-between">
            <button type="button" class="flex items-center justify-center px-4 py-1 text-center bg-gray-100 border border-gray-400 rounded-lg focus:outline-none hover:bg-gray-300">
              <svg class="w-5 h-5 mr-1 text-gray-600 fill-current" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
              </svg>
              <span class="self-center text-sm font-medium">master</span>
              <svg class="w-3 h-3 ml-1 text-gray-700 fill-current" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="flex hidden md:block md:flex">
              <button type="button" class="flex items-center justify-center px-4 py-1 ml-2 text-center bg-gray-100 border border-gray-400 rounded-lg focus:outline-none hover:bg-gray-300">
                <span class="self-center text-sm font-medium">Go to file</span>
              </button>
              <button type="button" class="flex items-center justify-center px-4 py-1 ml-2 text-center bg-gray-100 border border-gray-400 rounded-lg focus:outline-none hover:bg-gray-300">
                <span class="self-center text-sm font-medium">Add file</span>
                <svg class="w-3 h-3 ml-1 text-gray-700 fill-current" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <button type="button" class="flex items-center justify-center px-4 py-1 ml-2 text-center text-white bg-green-600 border border-green-700 rounded-lg focus:outline-none hover:bg-green-700">
                <svg class="w-5 h-5 mr-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                <span class="self-center text-sm font-medium">Clone</span>
                <svg class="w-3 h-3 ml-1 fill-current" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            <button type="button" class="flex items-center justify-center px-6 py-1 ml-2 text-center bg-gray-100 border border-gray-400 rounded-lg md:hidden focus:outline-none hover:bg-gray-300">
              <svg class="w-5 h-5 text-gray-700 fill-current" fill="currentColor" viewBox="0 0 20 20"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
            </button>
          </div>
          <div class="my-4">
            <div class="flex justify-between px-4 py-3 bg-gray-100 border border-gray-200 rounded-t-lg">
              <div class="flex items-center shrink">
                <img class="w-6 h-6 mr-2 rounded-md" src="https://avatars.githubusercontent.com/u/1834413?v=4&size=40" alt="">
                <p class="text-sm font-semibold">RobinMalfait</p>
                <span class="ml-2 text-sm text-gray-600 hover:text-blue-500 truncate">Prepare next alpha release:</span>
                <span class="ml-2 text-sm text-gray-600 hover:text-blue-500 truncate">4.0.0-alpha.16</span>
                <span>(<span class="text-blue-500 truncate">#13810</span>)</span>
                <button class="flex justify-center items-center p-1 rounded-lg hover:bg-gray-200 transition duration-200">
                  <svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-ellipsis" viewBox="0 0 16 16" width="16" height="16" fill="#636c76" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M0 5.75C0 4.784.784 4 1.75 4h12.5c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 14.25 12H1.75A1.75 1.75 0 0 1 0 10.25ZM12 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM7 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM4 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"></path></svg>
                </button>
                <button class="flex justify-center items-center mx-2" title="Success">
                  <svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-check" viewBox="0 0 16 16" width="16" height="16" fill="#1f883d" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg>
                </button>
              </div>
              <div class="hidden md:block md:flex">
                <a href="" class="flex items-center mb-1 ml-4 text-xs font-medium text-gray-700 hidden lg:block lg:flex">
                  <span class="hover:underline hover:text-blue-500">c711903</span>
                  <span class="mx-1">·</span>
                  <span>2 days ago</span>
                </a>
                <a href="" class="items-center mb-1 ml-4 text-xs font-medium text-gray-700 hover:bg-gray-200 p-2 transition duration-200 rounded-lg hidden lg:block lg:flex">
                  <svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-history" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path></svg>
                  <span class="mx-2">5,359 Commits</span>
                </a>
              </div>
            </div>
            <div class="hidden text-center border-b border-l border-r rounded-b-lg md:block">
              <GhFolders />
              <GhFiles />
            </div>
            <div class="py-2 text-center border-b border-l border-r rounded-b-lg md:hidden">
              <p class="text-blue-600 cursor-pointer hover:underline">View code</p>
            </div>
          </div>
          <div class="py-6 border-b md:border md:rounded-lg md:px-8">
            <div class="font-semibold text-black">README.md</div>
            <div class="my-6 flex flex-col justify-center items-center">
              <img alt="Tailwind CSS" class="w-auto lg:w-6/12 my-2 lg:my-4" src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-light.svg">
              <img class="w-64" src="https://camo.githubusercontent.com/87d7034892fd41dc88f3606bb44b853f87cd2c51/68747470733a2f2f7265666163746f72696e6775692e6e7963332e63646e2e6469676974616c6f6365616e7370616365732e636f6d2f7461696c77696e642d6c6f676f2e737667" alt="">
              <p>A utility-first CSS framework for rapidly building custom user interfaces. </p>
              <div class="flex">
                <div class="flex mr-2 items-center my-4">
                  <div class="flex items-center px-2 leading-none py-1 text-white bg-gray-800 rounded-l-md cursor-pointer">
                    <span class="self-center text-xs font-medium">build</span>
                  </div>
                  <div class="px-2 text-xs font-semibold text-white leading-none py-1 bg-green-500 rounded-r-md cursor-pointer">passing</div>
                </div>
                <div class="flex mr-2 items-center my-4">
                  <div class="flex items-center px-2 leading-none py-1 text-white bg-gray-800 rounded-l-md cursor-pointer">
                    <span class="self-center text-xs font-medium">downloads</span>
                  </div>
                  <div class="px-2 text-xs font-semibold text-white leading-none py-1 bg-green-500 rounded-r-md cursor-pointer">8.7M</div>
                </div>
              </div>
              <hr>
            </div>
            <div class="mb-6">
              <div class="flex items-center pb-2 -mx-4 text-lg font-bold leading-normal text-transparent hover:text-gray-700">
                <svg class="w-4 h-4 mr-1 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                <p class="text-black">Documentation</p>
              </div>
              <hr>
              <div class="my-4">For full documentation, visit <a href="#" class="text-blue-600 hover:underline">tailwindcss.com</a></div>
            </div>
            <div class="mb-6">
              <div class="flex items-center pb-2 -mx-4 text-lg font-bold leading-normal text-transparent hover:text-gray-700">
                <svg class="w-4 h-4 mr-1 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                <p class="text-black">Community</p>
              </div>
              <hr>
              <div class="my-4">For help, discussion about best practices, or any other conversation that would benefit from being searchable:</div>
              <a href="#" class="my-4 text-blue-600 hover:underline">Discuss Tailwind CSS on GitHub</a>
              <div class="my-4">For casual chit-chat with others using the framework:</div>
              <a href="#" class="my-4 text-blue-600 hover:underline">Join the Tailwind CSS Discord Server</a>
            </div>
            <div class="mb-6">
              <div class="flex items-center pb-2 -mx-4 text-lg font-bold leading-normal text-transparent hover:text-gray-700">
                <svg class="w-4 h-4 mr-1 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                <p class="text-black">Contributing</p>
              </div>
              <hr>
              <div class="my-4">If you're interested in contributing to Tailwind CSS, please read our <a href="#" class="text-blue-600 hover:underline">contributing docs</a> <span class="font-semibold text-black">before submitting a pull request.</span></div>
            </div>
          </div>
        </div>
        <AboutSection />
      </div>
      <FooterSection />
    </div>
  </div>
</template>

<script>
import GhFiles from './GhFiles.vue'
import GhFolders from './GhFolders.vue'
import AboutSection from './AboutSection.vue'
import FooterSection from './FooterSection.vue'
import MobileHeader from './MobileHeader.vue'
import HeaderActions from './HeaderActions.vue'

export default {
  name: 'MainContainer',
  components: {
    GhFiles,
    GhFolders,
    AboutSection,
    FooterSection,
    MobileHeader,
    HeaderActions
  },
  props: {
    msg: String
  }
}
</script>
