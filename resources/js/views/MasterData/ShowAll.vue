<template>
    <div class="w-full box-border">
        <div class="w-full box-border flex justify-between items-center mb-8">
            <div class="text-xs">Showing 10 data</div>

            <div class="flex items-center justify-center">
                <button @click.prevent="$router.push({ name: 'tambahMasterData'})" class="border border-green-500 bg-green-500 text-xs font-semibold px-4 py-2 rounded hover:bg-transparent hover:text-green-500">Tambah Barang</button>
            </div>
        </div>

        <div class="w-full box-border">
            <table class="w-full box-border table-auto border-collapse">
                <thead>
                    <tr class="bg-slate-800">
                        <th class="px-4 py-2 border-b border-t border-slate-600 text-left">No</th>
                        <th class="px-4 py-2 border-b border-t border-slate-600 text-left">Kode Barang</th>
                        <th class="px-4 py-2 border-b border-t border-slate-600 text-left">Nama Barang</th>
                        <th class="px-4 py-2 border-b border-t border-slate-600 text-left">Harga</th>
                        <th class="px-4 py-2 border-b border-t border-slate-600 text-left">Aksi</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(item, i) in barang" :key="i">
                        <td class="px-4 py-2 border-b border-t border-slate-600 text-left">{{ i + 1 }}</td>
                        <td class="px-4 py-2 border-b border-t border-slate-600 text-left">{{ item.kode_barang }}</td>
                        <td class="px-4 py-2 border-b border-t border-slate-600 text-left">{{ item.nama_barang }}</td>
                        <td class="px-4 py-2 border-b border-t border-slate-600 text-left">{{ item.harga }}</td>
                        <td class="px-4 py-2 border-b border-t border-slate-600">
                            <button @click.prevent="$router.push({ name: 'editMasterData', params: {id: 1} })" class="p-1 hover:bg-slate-200 rounded hover:text-slate-900">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg>
                            </button>
                            <button @click.prevent="openModalDelete(item.id)" class="p-1 hover:bg-slate-200 rounded hover:text-slate-900">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
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
export default {
    data(){
        return {
            barang: [],
            modalDelete: false,
            id_barang: null,
        }
    },

    mounted(){
        this.getData()
    },

    methods: {
        async getData(){
            try {
                let res = await axios.get('barang')

                this.barang = res.data.data
            }catch(e){
                console.log(e)
            }
        },

        openModalDelete(id){
            this.id_barang = id
            this.modalDelete = true
        },

        closeModalDelete(){
            this.id_barang = null
            this.modalDelete = false
        },

        async deleteData(){
            try{
                let res = await axios.delete(`barang/${this.id_barang}/delete`)

                if(res.status == 200){
                    this.getData()
                    this.id_barang = null
                    this.modalDelete = false
                }
            }catch(e){
                this.id_barang = null
                this.modalDelete = false
            }
        }
    }
}
</script>