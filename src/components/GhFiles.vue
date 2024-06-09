<template>
  <div v-for="file in files" :key="file.title" class="flex px-4 py-2 text-sm hover:bg-gray-200">
    <div class="flex w-1/4">
      <svg aria-hidden="true" focusable="false" role="img" class="color-fg-muted opacity-70" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>
      <p class="ml-2 cursor-pointer hover:underline hover:text-blue-500">{{ file.title }}</p>
    </div>
    <p class="w-1/2 text-left cursor-pointer hover:underline hover:text-blue-500">{{ file.description }}</p>
    <p class="w-1/4 ml-2 text-right">{{ file.dateUpdated }}</p>
  </div>
</template>

<script>
export default {
  name: 'GhFiles',
  data() {
    return {
      files: [
        {
          title: 'dependabot-previewcommitted',
          description: 'Drop fs-extra version to...',
          dateUpdated: '2 months ago'
        },
        {
          title: 'dist',
          description: 'Add empty .npmignore so dist files are distributed with releases',
          dateUpdated: '3 years ago'
        },
        {
          title: 'scripts',
          description: 'Don\'t generate color opacity code in color plugins if not necessary',
          dateUpdated: '3 months ago'
        },
        {
          title: 'src',
          description: 'Throw if contains a class',
          dateUpdated: 'last month'
        },
        {
          title: 'LICENSE',
          description: 'Avoid updating license every year',
          dateUpdated: '3 years ago'
        },
        {
          title: 'README.md',
          description: 'Replace logo in README',
          dateUpdated: '2 months ago'
        },
        {
          title: 'package.json',
          description: '1.4.6',
          dateUpdated: 'last month'
        }
      ]
    }
  }
}
</script>
