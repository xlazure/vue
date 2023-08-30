<template>
  <div>
    <input type="file" :name="inputProps.name" accept="image/*" @change="handleFileUpload" />
    <img v-if="imageData" :src="imageData" alt="Uploaded Image" />
  </div>
</template>

<script>
export default {
  props: {
    inputProps: Object
  },
  watch: {
    imageData(imageData) {
      const elementType = this.inputProps.elementType
      this.$emit('inputEvent', { key: elementType, value: imageData })
    }
  },
  data() {
    return {
      imageData: null
    }
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0]
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.imageData = e.target.result
        }
        reader.readAsDataURL(file)
      } else {
        alert('Please select a valid image file.')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  border: 2px solid black;
  border-radius: 8px;
  display: flex;
  height: 80px;

  input {
    width: 70%;
  }

  img {
    width: 15%;
    object-fit: contain;
  }
}
</style>
