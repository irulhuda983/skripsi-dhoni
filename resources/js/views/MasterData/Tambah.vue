<template>
    <div>
        <div class="w-full flex justify-between items-center mb-8 border-b py-3">
            <h1 class="text-2xl">Tambah Barang</h1>
            <!-- <button>Kembali</button> -->
        </div>

        <div class="form">
            <div class="mb-5">
                <label for="kode_barang" class="block mb-2">Kode Barang</label>
                <input id="kode_barang" type="text" class="w-full border bg-transparent rounded p-3 border border-gray-200" placeholder="Masukkan Kode Barang">
            </div>

            <div class="mb-5">
                <label for="kode_barang" class="block mb-2">Nama Barang</label>
                <input id="kode_barang" type="text" class="w-full border bg-transparent rounded p-3 border border-gray-200" placeholder="Masukkan Nama Barang">
            </div>

            <div class="mb-5">
                <label for="kode_barang" class="block mb-2">Harga</label>
                <input id="kode_barang" type="text" class="w-full border bg-transparent rounded p-3 border border-gray-200" placeholder="Masukkan Harga">
            </div>

            <div class="mb-5">
                <button type="submit" class="border border-green-500 bg-green-500 text-xs font-semibold px-4 py-2 rounded hover:bg-transparent hover:text-green-500">Simpan</button>
                <button @click.prevent="$router.go(-1)" type="button" class="border border-red-500 bg-red-500 text-xs font-semibold px-4 py-2 rounded hover:bg-transparent hover:text-red-500">Kembali</button>
            </div>
        </div>
    </div>
</template>