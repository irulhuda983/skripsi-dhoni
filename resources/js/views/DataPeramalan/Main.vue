<template>
    <div class="w-full box-border">
        <Loader v-show="loading" />
        <div class="w-full box-border flex justify-between items-center mb-8">
            <div class="w-full mb-5">
                <label for="" class="block mb-3">Pilih Barang</label>
                <select name="" id="" @change.prevent="getData" v-model="barang" class="w-full border bg-transparent rounded p-3 border border-gray-200">
                    <option value="" class="bg-black">Pilih Barang</option>
                    <option v-for="(item, i) in optBarang" :key="i" :value="item.id" class="bg-black">{{ item.kode_barang}} - {{ item.nama_barang }}</option>
                </select>
            </div>
        </div>

        <div class="w-full box-border" v-if="barang != ''">
            <table class="w-full box-border table-auto border-collapse">
                <thead>
                    <tr class="bg-slate-800">
                        <th class="px-4 py-2 border-b border-t border-slate-600 text-left">No</th>
                        <th class="px-4 py-2 border-b border-t border-slate-600 text-left">Bulan</th>
                        <th class="px-4 py-2 border-b border-t border-slate-600 text-left">Tahun</th>
                        <th class="px-4 py-2 border-b border-t border-slate-600 text-left">Aktual</th>
                        <th class="px-4 py-2 border-b border-t border-slate-600 text-left">WMA</th>
                        <th class="px-4 py-2 border-b border-t border-slate-600 text-left">Error</th>
                        <th class="px-4 py-2 border-b border-t border-slate-600 text-left">MSE</th>
                        <th class="px-4 py-2 border-b border-t border-slate-600 text-left">MAD</th>
                        <th class="px-4 py-2 border-b border-t border-slate-600 text-left">MAPE</th>
                    </tr>
                </thead>

                <tbody v-if="peramalan.length == 0">
                    <tr>
                        <td colspan="9" class="px-4 py-3 border-b border-t border-slate-600 text-center italic">Tidak ada data</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr v-for="(item, i) in peramalan" :key="i">
                        <td class="px-4 py-2 border-b border-t border-slate-600 text-left">{{ i + 1 }}</td>
                        <td class="px-4 py-2 border-b border-t border-slate-600 text-left">{{ item.bulan }}</td>
                        <td class="px-4 py-2 border-b border-t border-slate-600 text-left">{{ item.tahun }}</td>
                        <td class="px-4 py-2 border-b border-t border-slate-600 text-left">{{ item.aktual }}</td>
                        <td class="px-4 py-2 border-b border-t border-slate-600 text-left">{{ item.wma }}</td>
                        <td class="px-4 py-2 border-b border-t border-slate-600 text-left">{{ item.error }}</td>
                        <td class="px-4 py-2 border-b border-t border-slate-600 text-left">{{ item.mse }}</td>
                        <td class="px-4 py-2 border-b border-t border-slate-600 text-left">{{ item.mad }}</td>
                        <td class="px-4 py-2 border-b border-t border-slate-600 text-left">{{ item.mape }}</td>
                    </tr>

                    <tr>
                        <td class="px-4 py-2 border-b border-t border-slate-600 text-center" colspan="5">Jumlah</td>
                        <td class="px-4 py-2 border-b border-t border-slate-600 text-left">{{ error.total }}</td>
                        <td class="px-4 py-2 border-b border-t border-slate-600 text-left">{{ mse.total }}</td>
                        <td class="px-4 py-2 border-b border-t border-slate-600 text-left">{{ mad.total }}</td>
                        <td class="px-4 py-2 border-b border-t border-slate-600 text-left">{{ mape.total }}</td>
                    </tr>

                </tbody>
            </table>

            <div class="w-full mt-8" v-if="hasil">
                <p>Hasil Peramalan Stok pada periode <span class="font-bold underline">{{ periode }}</span> adalah <span class="font-bold underline">{{ hasil }}</span> dan jika di bulatkan menjadi <span class="font-bold underline">{{ Math.round(hasil) }}</span></p>
            </div>
        </div>


        <!-- modal hapus -->
        <div v-show="modalDelete" class="w-full h-full fixed top-0 left-0 right-0 bottom-0 bg-slate-800/10 backdrop-blur-md flex items-center justify-center">
            <div class="w-[550px] box-border bg-slate-900 rounded-lg p-6">
                <div class="flex space-x-8">
                    <div class="flex-none w-24 h-24 rounded bg-red-700 text-white flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </div>
                    
                    
                    <div class="flex-1">
                        <div class="mb-5 text-base font-semibold">Apakah Anda yakin ingin menghapus data ?</div>
                        <div class="mb-5">
                            Data yang dihapus tidak bisa akan hilang secara permanen, apa anda ingin melanjutkan ?
                        </div>

                        <div class="flex justify-end items-center space-x-5">
                            <button @click.prevent="deleteData()" class="px-4 py-2 rounded bg-green-500 text-white text-xs font-semibold border border-green-500 hover:bg-transparent hover:text-green-500">Ya, hapus</button>
                            <button @click.prevent="closeModalDelete()" class="px-4 py-2 rounded bg-red-500 text-white text-xs font-semibold border border-red-500 hover:bg-transparent hover:text-red-500">Batal</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end modal hapus -->
    </div>
</template>

<script>
const Loader = () => import('@/components/Loader.vue')
export default {
    components: { Loader },
    data(){
        return {
            loading: false,
            optBarang: [],
            peramalan: [],
            error: {},
            mad: {},
            mse: {},
            mape: {},
            hasil: null,
            periode: null,
            barang: '',
            modalDelete: false,
            id_aktual: null,
        }
    },

    mounted(){
        this.getBarang()
    },

    methods: {
        async getBarang(){
            this.loading = true
            try{
                let { data } = await axios.get('barang/opt')

                this.optBarang = data
                this.loading = false
            }catch(e){
                console.log(e)
                this.loading = false
            }
        },

        async getData(){
            try{
                let res = await axios.get(`peramalan/get-wma?barang_id=${this.barang}`)

                this.peramalan = res.data.data
                this.error = res.data.error
                this.mad = res.data.mad
                this.mse = res.data.mse
                this.mape = res.data.mape
                this.hasil = res.data.hasil
                this.periode = res.data.periode
            }catch(e){
                if(e.response.status == 404){
                    this.peramalan = []
                    this.error = {}
                    this.mad = {}
                    this.mse = {}
                    this.mape = {}
                    this.hasil = null
                    this.periode = null
                }
                if(e.response.status == 401){
                    this.$store.dispatch('auth/clear')
                }


            }
        },

        openModalDelete(id){
            this.id_aktual = id
            this.modalDelete = true
        },

        closeModalDelete(){
            this.id_aktual = null
            this.modalDelete = false
        },

        async deleteData(){
            try{
                let res = await axios.delete(`aktual/${this.id_aktual}/delete`)

                if(res.status == 200){
                    this.getData()
                    this.id_aktual = null
                    this.modalDelete = false
                }
            }catch(e){
                this.id_aktual = null
                this.modalDelete = false
            }
        }
    }
}
</script>