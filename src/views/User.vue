<template>
  <h1>This is {{ username }}'s page</h1>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      default: "name"
    }
  }
}
</script>

<style></style>
