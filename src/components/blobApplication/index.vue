<template>
  <el-row>
    <el-col :span="12">
      <el-form label-width="120px">
        <el-form-item label="要保存的文本">
          <el-input type="textarea" v-model="inputTextToSave" />
        </el-form-item>
        <el-form-item label="要另存为的文件名">
          <el-input v-model="inputFileNameToSaveAs" />
        </el-form-item>
        <el-form-item>
          <el-button @click="saveTextAsFile">将文本保存到文件</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="12">
      <el-form label-width="120px">
        <el-form-item label="文件内容">
          <el-input disabled type="textarea" v-model="filteContent" />
        </el-form-item>
        <el-form-item label="选择要加载的文件">
          <input type="file" ref="fileToLoad" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="loadFileAsText"
            >加载选中的文件</el-button
          >
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Ref, ref, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const inputTextToSave: Ref<string> = ref("");
    const inputFileNameToSaveAs: Ref<string> = ref("");
    const fileToLoad: Ref<any> = ref();
    const filteContent: Ref<string> = ref("");

    function saveTextAsFile() {
      var textFileAsBlob = new Blob([inputTextToSave.value], {
        type: "text/plain",
      });
      var fileNameToSaveAs = inputFileNameToSaveAs.value;

      var downloadLink = document.createElement("a");
      downloadLink.download = fileNameToSaveAs;
      downloadLink.innerHTML = "Download File";
      if (window.webkitURL != null) {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
      } else {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
      }

      downloadLink.click();
    }

    function destroyClickedElement(event: any) {
      if (!event.target) return;
      document.body.removeChild(event.target);
    }

    function loadFileAsText() {
      var file = fileToLoad.value?.files[0];
      console.log(file);
      var fileReader = new FileReader();
      fileReader.onload = function (fileLoadedEvent) {
        var textFromFileLoaded: any = fileLoadedEvent.target?.result;
        filteContent.value = textFromFileLoaded;
      };
      fileReader.readAsText(file, "UTF-8");
    }

    return {
      filteContent,
      loadFileAsText,
      inputFileNameToSaveAs,
      inputTextToSave,
      fileToLoad,
      saveTextAsFile,
    };
  },
});
</script>

<style scoped></style>
