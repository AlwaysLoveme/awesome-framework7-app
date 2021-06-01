<template>
  <transition
    :enter-active-class="`animate__animated animate__${animation}`"
    :leave-active-class="`animate__animated animate__${animates[animation]}`"
  >
    <div class="custom-modal" v-if="show" @click="closeModal">
      <div class="custom-modal-body" :style="{ width, height }" @click.stop>
        <slot name="header">
          <div class="custom-modal-body-header">
            <p
              class="custom-modal-body-header-title"
              :style="{ textAlign: titleAlign }"
            >
              {{ title }}
            </p>
            <f7-icon
              f7="multiply"
              v-if="closeable"
              @click.stop="$emit('update:show', false)"
            ></f7-icon>
          </div>
        </slot>

        <div class="custom-modal-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
  <div class="backdrop" v-if="show"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import animates from "@/shared/animates";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "标题",
    },
    closeable: {
      type: Boolean,
      default: false,
    },
    show: {
      type: Boolean,
      default: false,
    },
    clickBackDropClose: {
      type: Boolean,
      default: true,
    },
    width: {
      type: String,
      default: "262px",
    },
    height: {
      type: String,
      default: "225px",
    },
    titleAlign: {
      type: String,
      default: "center",
    },
    animation: {
      type: String,
      default: "scaleIn",
    },
  },
  emits: ["update:show"],
  setup(props, { emit }) {
    const closeModal = () => {
      if (props.clickBackDropClose) emit("update:show", false);
    };

    return {
      animates,
      closeModal,
    };
  },
});
</script>

<style scoped lang="less">
:deep(.custom-cell) {
  min-height: 35px;
}
.animate__animated {
  animation-duration: 0.3s;
}
@keyframes scaleIn {
  0% {
    transform: scale(1.2);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes scaleOut {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}
.animate__scaleIn {
  animation: scaleIn 0.25s linear forwards;
}
.animate__scaleOut {
  animation: scaleOut 0.25s linear forwards;
}
.custom-modal {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  &-body {
    width: 50%;
    height: 50%;
    background: #fff;
    border-radius: 8px;
    &-header {
      position: relative;
      font-size: 16px;
      &-title {
        margin-top: 10px;
      }
      .f7-icons {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        font-size: 20px;
      }
    }
  }
}
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background: rgba(0, 0, 0, 0.7);
}
</style>
