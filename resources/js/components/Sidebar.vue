<template>
    <div class="w-full box-border p-6">
        <router-link :to="{name: 'dashboard'}"
            class="flex items-center mb-10 text-2xl font-bold text-white"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
            </svg>
            TOKO SR
        </router-link>

        <div class="w-full box-border">
            <!-- bg-slate-600/10 -->
            <router-link :to="{name: 'dashboard'}"
                class="flex items-center rounded-xl p-4 mb-2"
                :class="$route.meta.menu == 'dashboard' ? 'bg-slate-600/10 text-white font-semibold' : 'font-medium'"
                >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                </svg>
                <span>Dashboard</span>
            </router-link>

            <router-link :to="{name: 'masterData'}"
                class="flex items-center rounded-xl p-4 mb-2"
                :class="$route.meta.menu == 'masterData' ? 'bg-slate-600/10 text-white font-semibold' : 'font-medium'"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
                <span>Data Master</span>
            </router-link>

            <router-link :to="{name: 'dataAktual'}"
                class="flex items-center rounded-xl p-4 mb-2"
                :class="$route.meta.menu == 'dataAktual' ? 'bg-slate-600/10 text-white font-semibold' : 'font-medium'"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Data Aktual</span>
            </router-link>

            <router-link :to="{name: 'dataPeramalan'}"
                class="flex items-center rounded-xl p-4 mb-2"
                :class="$route.meta.menu == 'dataPeramalan' ? 'bg-slate-600/10 text-white font-semibold' : 'font-medium'"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span>Data Peramalan</span>
            </router-link>

            <!-- <router-link :to="{name: 'transaksi'}"
                class="flex items-center rounded-xl p-4 mb-2"
                :class="$route.meta.menu == 'transaksi' ? 'bg-slate-600/10 text-white font-semibold' : 'font-medium'"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                <span>Transaksi</span>
            </router-link> -->
<!-- 
            <router-link :to="{name: 'profil'}"
                class="flex items-center rounded-xl p-4 mb-2"
                :class="$route.meta.menu == 'profil' ? 'bg-slate-600/10 text-white font-semibold' : 'font-medium'"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Profil</span>
            </router-link> -->

            <a href="#" @click.prevent="logout()" class="flex items-center font-medium rounded-xl p-4 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>Logout</span>
            </a>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "Sidebar",
    methods: {
        ...mapActions({
            signOut: "auth/signOut"
        }),
        logout(){
            this.signOut().then(() => {
                location.reload();
            })
        }, 
    }
}
</script>