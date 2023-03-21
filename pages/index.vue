<template>
  <Tutorial/>
</template>

<script>
export default {
  name: 'IndexPage',
  created(){
    console.log(process.env.IP)
  }
}
</script>
