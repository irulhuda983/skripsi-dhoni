<template>
    <div class="w-full min-h-screen box-border bg-slate-800 text-slate-400 flex justify-between text-sm">
        <notifications group="notif" />
        <div class="w-64 h-screen flex-none box-border overflow-x-hidden overflow-y-auto">
            <Sidebar />
        </div>
        <div class="flex-1 w-full box-border pl-3 px-6">
            <div class="w-full box-border mb-3">
                <Topbar />
            </div>
            <div class="w-full box-border bg-slate-900 rounded-2xl p-6 text-slate-200 relative">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
const Sidebar = () => import('@/components/Sidebar.vue')
const Topbar = () => import('@/components/Topbar.vue')
export default {
    components: { Sidebar, Topbar },
}
</script>