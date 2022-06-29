<template>
    <div class="w-full min-h-screen flex items-center justify-center bg-slate-800/80 text-slate-200 box-border">
        <form @submit.prevent="logIn" class="w-1/3">
        <div class="w-full box-border bg-slate-900 rounded-lg px-12 py-6">
            <div
                class="flex justify-center items-center mb-5 text-2xl font-bold text-white"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
                </svg>
                Aplikasi
            </div>

            <div class="text-center text-sm mb-10">Login Akun Anda Untuk Melanjutkan</div>

            <div class="relative mb-5">
                <input v-model="payload.username" type="text" class="bg-slate-800 w-full border py-1 px-2 lg:py-2 lg:px-3 border-slate-800 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500/20" placeholder="Username">
            </div>

            <div class="relative mb-5">
                <input v-model="payload.password" type="password" class="bg-slate-800 w-full border py-1 px-2 lg:py-2 lg:px-3 border-slate-800 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500/20" placeholder="Password">
            </div>

            <button class="bg-orange-500 w-full px-2 py-2 font-bold text-lg rounded">Login</button>
        </div>
        </form>

    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "Login",
    data() {
        return {
            payload: {
                username: "",
                password: "",
            },
            error: null,
        };
    },

    methods: {
        ...mapActions({
            signIn: "auth/signIn",
        }),
        logIn() {
            this.signIn(this.payload)
                .then(() => {
                    this.$router.replace({ name: "dashboard" });
                    // location.reload();
                })
                .catch((e) => {
                    if (e.response?.status == 401) {
                        this.error = "Username atau password salah!";
                    }
                    if (e.response?.status == 422) {
                        this.error = "Username atau password tidak boleh kosong!";
                    }
                });
        },
    },
}
</script>