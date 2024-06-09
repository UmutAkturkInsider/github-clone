<template>
  <div v-for="file in files" :key="file.title" class="flex px-4 py-2 text-sm hover:bg-gray-200">
    <div class="flex w-1/4">
      <svg class="w-6 h-6 text-blue-500" fill="#54aeff" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path></svg>
      <p class="ml-2 cursor-pointer hover:underline hover:text-blue-500">{{ file.title }}</p>
    </div>
    <p class="w-1/2 text-left cursor-pointer hover:underline hover:text-blue-500">{{ file.description }}</p>
    <p class="w-1/4 ml-2 text-right">{{ file.dateUpdated }}</p>
  </div>
</template>

<script>
export default {
  name: 'GhFolders',
  data() {
    return {
      files: [
        {
          title: 'src',
          description: 'Source code for the project',
          dateUpdated: '3 months ago'
        },
        {
          title: 'dist',
          description: 'Distributed files for the project',
          dateUpdated: '2 months ago'
        },
        {
          title: 'docs',
          description: 'Documentation for the project',
          dateUpdated: '1 month ago'
        },
        {
          title: 'tests',
          description: 'Unit tests for the project',
          dateUpdated: 'Just now'
        },
        {
          title: 'scripts',
          description: 'Scripts for the project',
          dateUpdated: '2 months ago'
        },
        {
          title: 'styles',
          description: 'CSS styles for the project',
          dateUpdated: '3 months ago'
        },
        {
          title: 'images',
          description: 'Images for the project',
          dateUpdated: '1 month ago'
        },
        {
          title: 'videos',
          description: 'Videos for the project',
          dateUpdated: '2 months ago'
        },
        {
          title: 'audio',
          description: 'Audio files for the project',
          dateUpdated: 'Just now'
        },
        {
          title: 'fonts',
          description: 'Fonts for the project',
          dateUpdated: '3 months ago'
        },
        {
          title: 'icons',
          description: 'Icons for the project',
          dateUpdated: '2 months ago'
        },
        {
          title: 'README.md',
          description: 'README file for the project',
          dateUpdated: '1 month ago'
        },
        {
          title: 'CONTRIBUTING.md',
          description: 'Contributing guidelines for the project',
          dateUpdated: '2 months ago'
        },
        {
          title: 'CHANGELOG.md',
          description: 'Change log for the project',
          dateUpdated: '3 months ago'
        },
        {
          title: 'LICENSE',
          description: 'License for the project',
          dateUpdated: 'Just now'
        }
      ]
    }
  }
}
</script>
