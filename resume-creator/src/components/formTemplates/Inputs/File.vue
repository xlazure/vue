<template>
    <div>
        <input type="file" accept="image/*" @change="handleFileUpload" />
        <img v-if="imageData" :src="imageData" alt="Uploaded Image" />
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            imageData: null,
        };
    },
    methods: {
        handleFileUpload(event) {
            const file = event.target.files[0];
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.imageData = e.target.result;
                };
                reader.readAsDataURL(file);
            } else {
                alert('Please select a valid image file.');
            }
        },
    },
};
</script>