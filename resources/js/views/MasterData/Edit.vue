<template>
    <div>
        <Loader v-show="loading"/>
        <div class="w-full flex justify-between items-center mb-8 border-b py-3">
            <h1 class="text-2xl">Ubah Barang</h1>
            <!-- <button>Kembali</button> -->
        </div>

        <form @submit.prevent="simpanData">
        <div class="form">
            <div class="mb-5">
                <label for="kode_barang" class="block mb-2">Kode Barang</label>
                <input id="kode_barang" v-model="payload.kode_barang" type="text" class="w-full border bg-transparent rounded p-3 border border-gray-200" placeholder="Masukkan Kode Barang">
            </div>

            <div class="mb-5">
                <label for="kode_barang" class="block mb-2">Nama Barang</label>
                <input id="kode_barang" v-model="payload.nama_barang" type="text" class="w-full border bg-transparent rounded p-3 border border-gray-200" placeholder="Masukkan Nama Barang">
            </div>

            <!-- <div class="mb-5">
                <label for="kode_barang" class="block mb-2">Harga</label>
                <input id="kode_barang" v-model="payload.harga" type="text" class="w-full border bg-transparent rounded p-3 border border-gray-200" placeholder="Masukkan Harga">
            </div> -->

            <div class="mb-5">
                <button type="submit" class="border border-green-500 bg-green-500 text-xs font-semibold px-4 py-2 rounded hover:bg-transparent hover:text-green-500">Simpan</button>
                <button @click.prevent="$router.go(-1)" type="button" class="border border-red-500 bg-red-500 text-xs font-semibold px-4 py-2 rounded hover:bg-transparent hover:text-red-500">Kembali</button>
            </div>
        </div>
        </form>
    </div>
</template>

<script>
const Loader = () => import('@/components/Loader.vue')
export default {
    components: { Loader },
    data(){
        return {
            loading: false,
            payload: {
                kode_barang: '',
                nama_barang: '',
                // harga: '',
            }
        }
    },

    mounted(){
        this.getData()
    },

    methods: {
        async getData(){
            this.loading = true
            try {
                let res = await axios.get(`/barang/${this.$route.params.id}/show`)

                let data = res.data.data

                console.log(data)

                if(res.status == 200){
                    this.loading = false
                    this.payload = {
                        kode_barang: data.kode_barang,
                        nama_barang: data.nama_barang,
                        // harga: data.harga,
                    }
                }
            }catch(e){
                this.loading = false
                if(e.response.status == 401){
                    console.log(e)
                }
            }
        },

        async simpanData(){
            try {
                let res = await axios.post(`/barang/${this.$route.params.id}/update`, this.payload)

                if(res.status == 200){
                    this.$router.push({ name: 'masterData'})
                    this.$notify({
                        group: "notif",
                        title: "Berhasil",
                        type: 'success',
                        text: 'Berhasil update data'
                    })
                }
            }catch(e){
                if(e.response.status == 401){
                    console.log(e)
                }
            }
        },
    }
}
</script>