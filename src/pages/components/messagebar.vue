<template>
  <f7-page>
    <f7-navbar :title="title" back-link></f7-navbar>
    <f7-messagebar
      ref="messagebar"
      v-model:value="messageText"
      :placeholder="placeholder"
      :attachments-visible="attachmentsVisible"
      :sheet-visible="sheetVisible"
    >
      <template #inner-start>
        <f7-link
          icon-ios="f7:camera_fill"
          icon-aurora="f7:camera_fill"
          icon-md="material:camera_alt"
          @click="sheetVisible = !sheetVisible"
        />
      </template>
      <template #inner-end>
        <f7-link
          icon-ios="f7:arrow_up_circle_fill"
          icon-aurora="f7:arrow_up_circle_fill"
          icon-md="material:send"
          @click="sendMessage"
        />
      </template>
      <f7-messagebar-attachments>
        <f7-messagebar-attachment
          v-for="(image, index) in attachments"
          :key="index"
          :image="image"
          @attachment:delete="deleteAttachment(image)"
        ></f7-messagebar-attachment>
      </f7-messagebar-attachments>
      <f7-messagebar-sheet>
        <f7-messagebar-sheet-image
          v-for="(image, index) in images"
          :key="index"
          :image="image"
          :checked="attachments.indexOf(image) >= 0"
          @change="handleAttachment"
        ></f7-messagebar-sheet-image>
      </f7-messagebar-sheet>
    </f7-messagebar>

    <f7-messages>
      <f7-messages-title><b>Sunday, Feb 9,</b> 12:58</f7-messages-title>
      <f7-message
        v-for="(message, index) in messagesData"
        :key="index"
        :type="message.type"
        :image="message.image"
        :name="message.name"
        :avatar="message.avatar"
        :first="isFirstMessage(message, index)"
        :last="isLastMessage(message, index)"
        :tail="isTailMessage(message, index)"
      >
        <template #text>
          <!-- eslint-disable-next-line -->
        <span v-if="message.text" v-html="message.text"></span>
        </template>
      </f7-message>
      <f7-message
        v-if="typingMessage"
        type="received"
        :typing="true"
        :first="true"
        :last="true"
        :tail="true"
        :header="`${typingMessage.name} is typing`"
        :avatar="typingMessage.avatar"
      ></f7-message>
    </f7-messages>
  </f7-page>
</template>

<script lang="ts">
import { Dom7 as $ } from "framework7";
import {
  defineComponent,
  reactive,
  toRefs,
  computed,
  onMounted,
  ref,
} from "vue";
import { f7, f7ready } from "framework7-vue";

export default defineComponent({
  props: {
    title: String,
  },
  setup() {
    const state = reactive<any>({
      attachments: [],
      sheetVisible: false,
      typingMessage: null,
      messageText: "",
      messagesData: [
        {
          type: "sent",
          text: "您好, Kate",
        },
        {
          type: "sent",
          text: "最近怎么样?",
        },
        {
          name: "Kate",
          type: "received",
          text: "您好, 最近一切都好!",
          avatar: "https://cdn.framework7.io/placeholder/people-100x100-9.jpg",
        },
        {
          name: "Blue Ninja",
          type: "received",
          text: "我在这, 我也很好, 谢谢! 你呢?",
          avatar: "https://cdn.framework7.io/placeholder/people-100x100-7.jpg",
        },
        {
          type: "sent",
          text: "Hey, 很高兴见到你 ;)",
        },
        {
          type: "sent",
          text: "Hey, 快看, 有稀客!",
        },
        {
          type: "sent",
          image: "https://cdn.framework7.io/placeholder/cats-200x260-4.jpg",
        },
        {
          name: "Kate",
          type: "received",
          text: "漂亮!",
          avatar: "https://cdn.framework7.io/placeholder/people-100x100-9.jpg",
        },
        {
          name: "Kate",
          type: "received",
          text: "我很喜欢!",
          avatar: "https://cdn.framework7.io/placeholder/people-100x100-9.jpg",
        },
        {
          name: "Blue Ninja",
          type: "received",
          text: "酷!",
          avatar: "https://cdn.framework7.io/placeholder/people-100x100-7.jpg",
        },
      ],
      images: [
        "https://cdn.framework7.io/placeholder/cats-300x300-1.jpg",
        "https://cdn.framework7.io/placeholder/cats-200x300-2.jpg",
        "https://cdn.framework7.io/placeholder/cats-400x300-3.jpg",
        "https://cdn.framework7.io/placeholder/cats-300x150-4.jpg",
        "https://cdn.framework7.io/placeholder/cats-150x300-5.jpg",
        "https://cdn.framework7.io/placeholder/cats-300x300-6.jpg",
        "https://cdn.framework7.io/placeholder/cats-300x300-7.jpg",
        "https://cdn.framework7.io/placeholder/cats-200x300-8.jpg",
        "https://cdn.framework7.io/placeholder/cats-400x300-9.jpg",
        "https://cdn.framework7.io/placeholder/cats-300x150-10.jpg",
      ],
      people: [
        {
          name: "Kate Johnson",
          avatar: "https://cdn.framework7.io/placeholder/people-100x100-9.jpg",
        },
        {
          name: "Blue Ninja",
          avatar: "https://cdn.framework7.io/placeholder/people-100x100-7.jpg",
        },
      ],
      answers: [
        "Yes!",
        "No",
        "Hm...",
        "I am not sure",
        "And what about you?",
        "May be ;)",
        "Lorem ipsum dolor sit amet, consectetur",
        "What?",
        "Are you sure?",
        "Of course",
        "Need to think about it",
        "Amazing!!!",
      ],
      messagebar: {},
      responseInProgress: false,
    });

    // computed
    const attachmentsVisible = computed(() => state.attachments.length > 0);
    const placeholder = computed(() =>
      state.attachments.length > 0 ? "Add comment or Send" : "Message"
    );

    const isFirstMessage = function (message: any, index: number) {
      const previousMessage = state.messagesData[index - 1];
      if (message.isTitle) return false;
      if (
        !previousMessage ||
        previousMessage.type !== message.type ||
        previousMessage.name !== message.name
      )
        return true;
      return false;
    };
    const isLastMessage = function (message: any, index: number) {
      const nextMessage = state.messagesData[index + 1];
      if (message.isTitle) return false;
      if (
        !nextMessage ||
        nextMessage.type !== message.type ||
        nextMessage.name !== message.name
      )
        return true;
      return false;
    };
    const isTailMessage = function (message: any, index: number) {
      const nextMessage = state.messagesData[index + 1];
      if (message.isTitle) return false;
      if (
        !nextMessage ||
        nextMessage.type !== message.type ||
        nextMessage.name !== message.name
      )
        return true;
      return false;
    };
    const deleteAttachment = function (image: never) {
      const index = state.attachments.indexOf(image);
      state.attachments.splice(index, 1)[0]; // eslint-disable-line
    };
    const handleAttachment = function (e: any) {
      const index = $(e.target).parents("label.checkbox").index();
      const image = state.images[index];
      if (e.target.checked) {
        // Add to attachments
        state.attachments.unshift(image as never);
      } else {
        // Remove from attachments
        state.attachments.splice(state.attachments.indexOf(image as never), 1);
      }
    };
    const sendMessage = function () {
      const text = state.messageText.replace(/\n/g, "<br>").trim();
      const messagesToSend = [];
      state.attachments.forEach((attachment: never) => {
        messagesToSend.push({
          image: attachment,
        });
      });
      if (text.length) {
        messagesToSend.push({
          text,
        });
      }
      if (messagesToSend.length === 0) {
        return;
      }

      // Reset attachments
      state.attachments = [];
      // Hide sheet
      state.sheetVisible = false;
      // Clear area
      state.messageText = "";
      // Focus area
      if (text.length) messagebar.value.focus();
      // Send message
      state.messagesData.push(...messagesToSend);

      // Mock response
      if (state.responseInProgress) return;
      state.responseInProgress = true;
      setTimeout(() => {
        const answer =
          state.answers[Math.floor(Math.random() * state.answers.length)];
        const person =
          state.people[Math.floor(Math.random() * state.people.length)];
        state.typingMessage = {
          name: person.name,
          avatar: person.avatar,
        };
        setTimeout(() => {
          state.messagesData.push({
            text: answer,
            type: "received",
            name: person.name,
            avatar: person.avatar,
          });
          state.typingMessage = null;
          state.responseInProgress = false;
        }, 4000);
      }, 1000);
    };

    const messagebar = ref();
    onMounted(() => {
      f7ready(() => {
        state.messagebar = f7.messagebar.get(messagebar.value);
      });
    });

    return {
      messagebar,
      placeholder,
      isFirstMessage,
      isLastMessage,
      isTailMessage,
      deleteAttachment,
      handleAttachment,
      sendMessage,
      attachmentsVisible,
      ...toRefs(state),
    };
  },
});
</script>

<style scoped></style>
