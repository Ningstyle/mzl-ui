<template>
  <div :class="['mzl-breadcrumb-item', customClass]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'mBreadcrumbItem'
}
</script>

<script setup>
const props = defineProps({
  customClass: String
})
</script>

<style lang="scss" scoped></style>
