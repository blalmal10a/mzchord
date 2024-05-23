<template>
    <div>
        <h3>This will contain dynamic page content</h3>

        <div v-html="pageContent"></div>
    </div>
</template>
<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';
const props = defineProps(['slug', 'isDev'])
const pageContent = ref('')
onBeforeMount(() => {
    getPageData();
})
onMounted(() => {
    console.log('props is: ', props)
})

async function getPageData() {
    let baseUrl = props.isDev ? 'http://localhost:8000' : 'https://mzchord.vercel.app'
    try {
        fetch(`${baseUrl}/api/v1/pages/slug/${props.slug}`, {
            headers: {
                'code': 'mzchord-by-franky'
            }
        })
            .then(response => {
                // Handle the response here
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text(); // Or response.json() if it's JSON data
            })
            .then(data => {
                // Process the fetched data here
                pageContent.value = JSON.parse(data)?.content
                const wrapper = document.getElementById('wrapper')
                console.log('wrapper is: ', wrapper)
                wrapper.style.display = 'none';
            })
            .catch(error => {
                // Handle any errors here
                // console.error('Error:', error);
            });

    } catch (error) {

    }
}
</script>