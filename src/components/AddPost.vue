<template>
  <div class="container">
    <h3>Upload your story</h3>
    <form v-bind:class="{'max-char':wordCount==30}">
      <textarea type="text" v-model="description" name="description" placeholder="Add Description..." maxlength="30" cols="15"></textarea>
      <p>{{wordCount}}/30</p>
      <input type="file" @change="onFileChange($event.target.files)" style="display:none" ref="fileInput">
      <a class="btn-image" @click="$refs.fileInput.click()">Image</a>
    </form>
    <div v-if="imageError" class="Error">
      <p>{{imageErrorInfo}}</p>
    </div>
    <a class="btn-submit" @click=addNewPost>Submit</a>
    <div v-if="argumentsError" class="Error">
      <p>{{ argumentsErrorInfo }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import {Watch} from 'vue-property-decorator';
import posts from '@/store/modules/Post';

@Component({
    name: "AddPost",
})
export default class AddPost extends Vue {
  description = '';
  wordCount = 0;
  selectedFile: string|Blob = "";
  maxSize = 1024;
  fileName = "";
  argumentsError = false;
  argumentsErrorInfo = "";
  imageError = false;
  imageErrorInfo = "";

  @Watch('description')
  onDescriptionChange(value: string) {
    this.wordCount = value.length;
  }

  async addNewPost() {
    if (this.description != "" && this.selectedFile != ""){
      const fd = new FormData();
      fd.append('image', this.selectedFile, this.fileName);
      fd.append('description', this.description);
      await posts.addPostAct(fd);
      this.description = '';
      this.fileName = '';
      this.selectedFile = '';
      this.argumentsError = false;
      this.argumentsErrorInfo = "";
    }else{
      this.argumentsError = true;
      this.argumentsErrorInfo = "Error: Description not provided \n or not selected image!";
    }
  }

  onFileChange(file: FileList) {
    const { maxSize } = this;
    const imageFile = file[0];
    if (file.length > 0) {
      const size = imageFile.size / maxSize / maxSize;
      if (!imageFile.type.match('image.*')) {
        this.imageError = true;
        this.imageErrorInfo = "Wrong extension, only JPEG/PNG."
        return;
      } else if (size > 1) {
        this.imageError = true;
        this.imageErrorInfo = "Image too big. Max 1MB."
        return;
      } else {
        this.selectedFile = imageFile;
        this.fileName = imageFile.name;
        this.imageError = false;
        this.imageErrorInfo = "";
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-size: 1.7rem;
    }
  }
  
  %btn-shared {
    display: inline-block;
    transition: all 0.5s;
    border: none;
    cursor: pointer;
    border-radius: 10px;
  }

  .btn {
    &-submit {
      @extend %btn-shared;
      margin-top: 5px;
      padding: 0.2rem 3.5rem;
      color: #fff;
      background-color: #ff7c92;
      font-size: 1.5rem;

      &:hover {
        background-color: #ff002b;
      }
    }

    &-image {
      @extend %btn-shared;
      padding: 0.2rem 1.5rem;
      color: #fff;
      background-color: rgb(104, 103, 103);
      font-size: 0.8rem;
      &:hover {
        background-color: #333;
      }
    }
  }

  form {
    
    textarea {
      height: 100px;
      width: 175px;
      border: 2px solid #ccc;
      border-radius: 4px;
      resize: none;
    }

    p {
      padding-left: 8rem;
    }
  }

  .max-char {
    textarea {
      border: 2px solid red;
    }

    p {
      color: red;
      font-weight: bold;
    }
  }

  .Error {
    p {
      margin: 5px 20px 5px auto;
      font-size: 15px;
    }
  }

  @media (max-width: 800px) {

    .btn {

      &-submit {
        padding: 0.2rem 6rem;
      }

    }

    form {

      textarea {
        width: 250px;
        height: 150px;
      }

      p {
        padding-left: 13rem;
      }
    }

    .Error {
      margin: 2px;
      font-size: 8rem;
    }
  }

</style>