<template>
    <div class="col-auto ">
        <div class="h2">
            Welcome to MZCHORD
        </div>
        <!-- <div class="text-center">
            Please wait while your email is being confirmed
        </div> -->
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';

const status = ref('');

onMounted(() => {
    onEmailConfirmed()
})
async function onEmailConfirmed() {
    const isDev = import.meta.env.DEV
    try {
        const options = {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'code': 'mzchord-by-franky'
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        };
        const search = new URLSearchParams(window.location.search)
        const token = search.get('token')

        let confirmLink = isDev
            ? `http://localhost:8000/api/v1/auth/confirm-email?token=${token}`
            : `https://mzchord.vercel.app/api/v1/auth/confirm-email?token=${token}`

        await fetch(confirmLink, options)
            .then(async (res) => {
                if (res.ok) {
                    setTimeout(() => {
                        window.location = '/'
                    }, 1500);
                } else {
                    const { message } = await res.json()
                    console.log('error message is: ', message)
                    alert(message)
                    // window.location = '/'
                }

            })
            .catch((data) => {
                console.log("error is: ", data.message)
            })
    } catch (error) {
        alert('There was an error with confirmation of your email. please contact support')
        window.location.replace("/")
        console.error("error is: ", error.message)
    }
}
</script>