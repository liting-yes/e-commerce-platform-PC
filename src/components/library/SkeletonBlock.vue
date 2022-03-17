<script setup>
defineProps({
    width: {
        type: String,
        default: '100px'
    },
    height: {
        type: String,
        default: '100px'
    },
    animeted: {
        type: Boolean,
        default: false
    },
    bg: {
        type: String,
        default: '#efefef'
    }
})
</script>

<template>
    <div class="skeletion" :style="{ width, height }" :class="{ shan: animeted }">
        <div class="block" :style="{ backgroundColor: bg }"></div>
    </div>
</template>

<style scoped lang="less">
.skeleton {
  display: inline-block;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  .block {
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }
}
.shan {
  &::after {
    content: "";
    position: absolute;
    animation: shan 1.5s ease 0s infinite;
    top: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: skewX(-45deg);
  }
}
@keyframes shan {
  0% {
    left: -100%;
  }
  100% {
    left: 120%;
  }
}
</style>