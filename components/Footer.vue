<template>
  <div class="flex flex-row flex-wrap justify-between py-2">
    <div class="flex flex-col flex-none mx-3" v-for="item in items" :key="item.text">
      <div>{{item.text}}</div>
      <a class="text-orange-500 underline" :href="item.url" target="_blank">{{item.link}}</a>
    </div>
  </div>
</template>

<script>
export default {

  data(){
    return {
      items: [
        { text: '© 2020',url: 'https://pikax.me', link:"Carlos"},
        { text: 'Contact',url: 'maito:contact@hypermob.co.uk', link:"Email"},
        { text: 'Code',url: 'https://github.com/pikax', link:"Github"},
        { text: 'Social',url: 'https://www.linkedin.com/in/carlosdcrodrigues/', link:"LinkedIn"},
      ]
    }
  }
}
</script>

<style>
</style>