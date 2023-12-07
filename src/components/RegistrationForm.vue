<template>
    <form
        @submit.prevent="onSubmitForm"
        method="POST"
        style="padding-bottom: 20%; padding-top: 10vh;"
    >
        <h3 class="text-center">REGISTER</h3>
        <div class="row">
            <div class="col-lg-6">
                <div class="cs-form_field_wrap">
                    <label>Name</label>

                    <input
                        type="text"
                        id="name"
                        v-model="registration.form.name"
                        class="cs-form_field"
                    />
                </div>
                <div class="cs-height_30 cs-height_lg_30"></div>
            </div>
            <div class="col-lg-6">
                <div class="cs-form_field_wrap">
                    <label>Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        class="cs-form_field"
                        v-model="registration.form.email"
                    />
                </div>
                <div class="cs-height_30 cs-height_lg_30"></div>
            </div>
            <div class="col-lg-6">
                <div class="cs-form_field_wrap">
                    <label>Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        class="cs-form_field"
                        v-model="registration.form.password"
                    />
                </div>
                <div class="cs-height_30 cs-height_lg_30"></div>
            </div>
            <div class="col-lg-6">
                <div class="cs-form_field_wrap">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        class="cs-form_field"
                        v-model="registration.form.password"
                    />
                </div>
                <div class="cs-height_30 cs-height_lg_30"></div>
            </div>

        </div>

        <div class="px-2 row">
            <button
                :disabled="registration.loadingSubmit"
                class="cs-btn cs-btn_filed cs-accent_btn "
                type="submit"
            >
                {{ registration.loadingSubmit ? 'Loading..' : 'REGISTER' }}
            </button>


        </div>



        <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div
                id="liveToast"
                class="toast bg-dark"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
            >
                <div class="toast-header">
                    <!-- <img
                        src="..."
                        class="rounded me-2"
                        alt="..."
                    > -->
                    <strong class="me-auto">ERROR</strong>
                    <!-- <small>11 mins ago</small> -->
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="toast"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="toast-body">
                    {{ registration?.errorMessage ?? 'UNKNOWN ERROR' }}
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';

const registration = reactive({
    form: {
        name: '',
        email: '',
        password: '',
        confirm_password: '',
    },
    loadingSubmit: false,
    errorMessage: null,
})

onMounted(() => {
    // 
});


async function onSubmitForm() {
    try {
        registration.loadingSubmit = true;
        const data = {
            ...registration.form
        };

        const options = {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'code': 'mzchord-by-franky'
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        };
        const baseUrl = import.meta.env.DEV ? 'http://localhost:8000' : 'https://mzchord.vercel.app';
        await fetch(`${baseUrl}/api/v1/auth/register`, options)
            .then(async (response) => {
                if (response.ok) {
                    // 
                    window.location = '/'
                } else {
                    const { message } = await response.json();
                    registration.errorMessage = message;
                    showError()

                }
            })



        registration.loadingSubmit = false
    } catch (error) {
        console.error('error: ', error)
        // registration.loadingSubmit = false
        // console.error(error.message);

        // showError()
        // console.log('sadfasdf')

    }
}

function notifyToastListen() {
    const toastTrigger = document.getElementById('liveToastBtn')
    if (toastTrigger) {
        toastTrigger.addEventListener('click', () => {
            const notifyContext = document.getElementById('liveToast')
            const toast = new bootstrap.Toast(notifyContext, {
                delay: 7500
            })
            toast.show()
        })
    }
}

function showError() {

    try {

        const notifyContext = document.getElementById('liveToast')
        const toast = new bootstrap.Toast(notifyContext, {
            delay: 7500
        })
        toast.show()
    } catch (error) {
        console.error(error.message);
    }
}
</script>