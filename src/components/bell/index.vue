<template>
  <el-date-picker
    v-model="ringTime"
    type="datetime"
    placeholder="选择响铃时间"
    value-format="x"
    :disabled="started"
  />
  <el-button type="success" :disabled="started" @click="start">确定</el-button>
</template>

<script lang="ts">
import { Ref, defineComponent, ref } from "vue";
import { TextToSpeech } from "../../utils/index";

export default defineComponent({
  components: {},

  setup() {
    // 响铃时间
    const ringTime = ref(0);
    let timer: Ref<NodeJS.Timer | undefined> = ref();
    let started = ref(false);

    const handle = () => {
      console.log("handle 执行了");
      // 当前时间大于/等于响铃时间则响铃
      if (Date.now() >= ringTime.value) {
        console.log("响铃啦~");
        // const audio = document.createElement('audio')
        // audio.autoplay = true
        // audio.src = 'https://other-web-nf01-sycdn.kuwo.cn/934895110ac2c890b9a1bfceb8971c66/627f6511/resource/n2/55/36/3027403034.mp3'
        // document.body.append(audio)
        TextToSpeech.textToSpeech("xxxx");

        clearInterval(timer.value);
        timer.value = undefined;
        started.value = false;
      }
    };

    const start = () => {
      console.log(ringTime.value);
      if (!timer.value) {
        started.value = true;
        timer.value = setInterval(handle, 1000);
      }
    };

    return {
      started,
      timer,
      start,
      ringTime,
    };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
