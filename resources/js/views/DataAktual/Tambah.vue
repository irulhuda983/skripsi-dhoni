<template>
    <div>
        <div class="w-full flex justify-between items-center mb-8 border-b py-3">
            <h1 class="text-2xl">Tambah Data</h1>
            <!-- <button>Kembali</button> -->
        </div>

        <form @submit.prevent="simpanData">
        <div class="form">
            <div class="w-full mb-5">
                <label for="" class="block mb-3">Pilih Barang</label>
                <select name="" id="" v-model="payload.barang_id" class="w-full border bg-transparent rounded p-3 border border-gray-200">
                    <option value="" class="bg-black">Pilih Barang</option>
                    <option v-for="(item, i) in optBarang" :key="i" :value="item.id" class="bg-black">{{ item.kode_barang}} - {{ item.nama_barang }}</option>
                </select>
            </div>

            <div class="mb-5">
                <label for="kode_barang" class="block mb-2">Tahun</label>
                <input id="kode_barang" v-model="payload.tahun" type="text" class="w-full border bg-transparent rounded p-3 border border-gray-200" placeholder="Masukkan Nama Barang">
            </div>

            <div class="mb-5">
                <label for="kode_barang" class="block mb-2">Bulan</label>
                <select name="" id="" v-model="payload.bulan" class="w-full border bg-transparent rounded p-3 border border-gray-200">
                    <option value="" class="bg-black">Pilih Bulan</option>
                    <option value="1" class="bg-black">Januari</option>
                    <option value="2" class="bg-black">Februari</option>
                    <option value="3" class="bg-black">Maret</option>
                    <option value="4" class="bg-black">April</option>
                    <option value="5" class="bg-black">Mei</option>
                    <option value="6" class="bg-black">Juni</option>
                    <option value="7" class="bg-black">Juli</option>
                    <option value="8" class="bg-black">Agustus</option>
                    <option value="9" class="bg-black">September</option>
                    <option value="10" class="bg-black">Oktober</option>
                    <option value="11" class="bg-black">November</option>
                    <option value="12" class="bg-black">Desember</option>
                </select>
            </div>

            <div class="mb-5">
                <label for="kode_barang" class="block mb-2">Stok</label>
                <input id="kode_barang" v-model="payload.stok" type="number" class="w-full border bg-transparent rounded p-3 border border-gray-200" placeholder="Masukkan Harga">
            </div>

            <div class="mb-5">
                <label for="kode_barang" class="block mb-2">Terjual</label>
                <input id="kode_barang" v-model="payload.terjual" type="number" class="w-full border bg-transparent rounded p-3 border border-gray-200" placeholder="Masukkan Harga">
            </div>

            <div class="mb-5">
                <label for="kode_barang" class="block mb-2">Sisa</label>
                <input id="kode_barang" v-model="payload.sisa" type="number" class="w-full border bg-transparent rounded p-3 border border-gray-200" placeholder="Masukkan Harga">
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
            optBarang: [],
            payload: {
                barang_id: '',
                tahun: '',
                bulan: '',
                stok: '',
                terjual: '',
                sisa: '',
                kondisi: '',
            }
        }
    },

    mounted(){
        this.getBarang()
    },

    methods: {
        async getBarang(){
            try{
                let { data } = await axios.get('barang/opt')

                this.optBarang = data
            }catch(e){
                console.log(e)
                if(e.response.status == 401){
                    this.$store.dispatch('auth/clear')
                }
            }
        },
        async simpanData(){
            try {
                let res = await axios.post('aktual/store', this.payload)

                if(res.status == 200){
                    this.$router.push({ name: 'dataAktual' })
                    this.$notify({
                        group: "notif",
                        title: "Berhasil",
                        type: 'success',
                        text: 'Berhasil tambah data'
                    })
                }
            }catch(e){
                console.log(e)
                if(e.response.status == 401){
                    this.$store.dispatch('auth/clear')
                }
            }
        },
    }
}
</script>