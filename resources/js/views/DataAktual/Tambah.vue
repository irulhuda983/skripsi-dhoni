<template>
    <div>
        <div class="w-full flex justify-between items-center mb-8 border-b py-3">
            <h1 class="text-2xl">Tambah Data</h1>
            <!-- <button>Kembali</button> -->
        </div>

        <form @submit.prevent="simpanData">
        <div class="form">
            <div class="mb-5">
                <label for="kode_barang" class="block mb-2">Barang</label>
                <input id="kode_barang" v-model="payload.barang_id" type="text" class="w-full border bg-transparent rounded p-3 border border-gray-200" placeholder="Masukkan Kode Barang">
            </div>

            <div class="mb-5">
                <label for="kode_barang" class="block mb-2">Tahun</label>
                <input id="kode_barang" v-model="payload.tahun" type="text" class="w-full border bg-transparent rounded p-3 border border-gray-200" placeholder="Masukkan Nama Barang">
            </div>

            <div class="mb-5">
                <label for="kode_barang" class="block mb-2">Bulan</label>
                <input id="kode_barang" v-model="payload.bulan" type="text" class="w-full border bg-transparent rounded p-3 border border-gray-200" placeholder="Masukkan Harga">
            </div>

            <div class="mb-5">
                <label for="kode_barang" class="block mb-2">Stok</label>
                <input id="kode_barang" v-model="payload.stok" type="text" class="w-full border bg-transparent rounded p-3 border border-gray-200" placeholder="Masukkan Harga">
            </div>

            <div class="mb-5">
                <label for="kode_barang" class="block mb-2">Terjual</label>
                <input id="kode_barang" v-model="payload.terjual" type="text" class="w-full border bg-transparent rounded p-3 border border-gray-200" placeholder="Masukkan Harga">
            </div>

            <div class="mb-5">
                <label for="kode_barang" class="block mb-2">Sisa</label>
                <input id="kode_barang" v-model="payload.sisa" type="text" class="w-full border bg-transparent rounded p-3 border border-gray-200" placeholder="Masukkan Harga">
            </div>

            <div class="mb-5">
                <label for="kode_barang" class="block mb-2">Kondisi</label>
                <input id="kode_barang" v-model="payload.kondisi" type="text" class="w-full border bg-transparent rounded p-3 border border-gray-200" placeholder="Masukkan Harga">
            </div>

            <div class="mb-5">
                <button type="submit" class="border border-green-500 bg-green-500 text-xs font-semibold px-4 py-2 rounded hover:bg-transparent hover:text-green-500">Simpan</button>
                <button @click.prevent="$router.go(-1)" type="button" class="border border-red-500 bg-red-500 text-xs font-semibold px-4 py-2 rounded hover:bg-transparent hover:text-red-500">Kembali</button>
            </div>
        </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            payload: {
                barang_id: '',
                tahun: '',
                tahun: '',
                stok: '',
                terjual: '',
                sisa: '',
                kondisi: '',
            }
        }
    },

    methods: {
        async simpanData(){
            try {
                let res = await axios.post('aktual/store', this.payload)

                if(res.status == 200){
                    this.$router.push({ name: 'dataAktual' })
                }
            }catch(e){
                console.log(e)
            }
        },
    }
}
</script>