<template>
    <div class="w-full box-border grid grid-cols-4 gap-4">
        <Loader v-show="loading" />
        <!-- <div class="w-full col-span-1">

            <div class="w-full bg-slate-300/10 box-border p-6 rounded-lg flex items-center mb-5">
                <div class="flex-none w-14 h-14 box-border flex items-center justify-center mr-4 bg-green-400 rounded-lg text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                </div>

                <div class="flex-1">
                    <div class="font-semibold text-slate-300 text-sm">Total Barang</div>
                    <div class="font-semibold text-slate-300">
                        <span class="text-2xl font-bold">{{ total.barang }}</span>
                        <span class="text-xs"> Buah</span>
                    </div>
                </div>
            </div>

            <div class="w-full bg-slate-300/10 box-border p-6 rounded-lg flex items-center mb-5">
                <div class="flex-none w-14 h-14 box-border flex items-center justify-center mr-4 bg-green-400 rounded-lg text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                        <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                    </svg>
                </div>

                <div class="flex-1">
                    <div class="font-semibold text-slate-300 text-sm">Jumlah Stok</div>
                    <div class="font-semibold text-slate-300">
                        <span class="text-2xl font-bold">{{ total.stok }}</span>
                        <span class="text-xs"> Buah</span>
                    </div>
                </div>
            </div>

            <div class="w-full bg-slate-300/10 box-border p-6 rounded-lg flex items-center mb-5">
                <div class="flex-none w-14 h-14 box-border flex items-center justify-center mr-4 bg-green-400 rounded-lg text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div class="flex-1">
                    <div class="font-semibold text-slate-300 text-sm">Barang Terjual</div>
                    <div class="font-semibold text-slate-300">
                        <span class="text-2xl font-bold">{{ total.terjual }}</span>
                        <span class="text-xs"> Barang</span>
                    </div>
                </div>
            </div>

        </div> -->

        <div class="w-full col-span-4 grid grid-cols-3 gap-4">
            <div class="w-full bg-slate-300/10 box-border p-6 rounded-lg flex items-center mb-5">
                <div class="flex-none w-14 h-14 box-border flex items-center justify-center mr-4 bg-green-400 rounded-lg text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                </div>

                <div class="flex-1">
                    <div class="font-semibold text-slate-300 text-sm">Total Barang</div>
                    <div class="font-semibold text-slate-300">
                        <span class="text-2xl font-bold">{{ total.barang }}</span>
                        <span class="text-xs"> Buah</span>
                    </div>
                </div>
            </div>

            <!-- Stok -->
            <div class="w-full bg-slate-300/10 box-border p-6 rounded-lg flex items-center mb-5">
                <div class="flex-none w-14 h-14 box-border flex items-center justify-center mr-4 bg-green-400 rounded-lg text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                        <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                    </svg>
                </div>

                <div class="flex-1">
                    <div class="font-semibold text-slate-300 text-sm">Jumlah Stok</div>
                    <div class="font-semibold text-slate-300">
                        <span class="text-2xl font-bold">{{ total.stok }}</span>
                        <span class="text-xs"> Buah</span>
                    </div>
                </div>
            </div>

            <div class="w-full bg-slate-300/10 box-border p-6 rounded-lg flex items-center mb-5">
                <div class="flex-none w-14 h-14 box-border flex items-center justify-center mr-4 bg-green-400 rounded-lg text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div class="flex-1">
                    <div class="font-semibold text-slate-300 text-sm">Barang Terjual</div>
                    <div class="font-semibold text-slate-300">
                        <span class="text-2xl font-bold">{{ total.terjual }}</span>
                        <span class="text-xs"> Barang</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full col-span-4">
            <apexchart
                class="font-medium"
                width="100%"
                height="350"
                type="area"
                :options="options"
                :series="series"
            ></apexchart>
        </div>

    </div>
</template>

<script>
const Loader = () => import('@/components/Loader.vue')
import VueApexCharts from "vue-apexcharts";
export default {
    components: {
        apexchart: VueApexCharts,
        Loader,
    },
    data(){
        return {
            loading: false,
            total: {
                barang: 0,
                terjual: 0,
                stok: 0,
            },
            options: {
                tooltip: {
                    enabled: true,
                },
                dataLabels: {
                    enabled: false,
                },
                fill: {
                     gradient: {
                        enabled: true,
                        opacityFrom: 0.55,
                        opacityTo: 0
                    }
                },
                grid: { show: false },
                chart: {
                    id: "chartstok",
                    toolbar: { show: false },
                    zoom: {
                        enabled: false,
                    },
                    fontFamily: 'Poppins, sans-serif',
                },
                yaxis: {
                    axisBorder: {
                        show: true,
                        color: "#FFF",
                        offsetX: 0,
                        offsetY: 0,
                    },
                },
                xaxis: {
                    axisBorder: {
                        show: true,
                        color: "#FFF",
                        height: 1,
                        width: "100%",
                        offsetX: 0,
                        offsetY: 0,
                    },
                    axisTicks: { show: false },
                    categories: [],
                },
            },
            series: [{
              name: 'stok',
              data: []
            }]
        }
    },

    mounted(){
        this.getGrafik()
        this.getTotal()
    },

    methods: {
        async getGrafik(){
            this.loading = true
            try {
                let { data } = await axios.get('dashboard/grafik')

                this.options = {
                    tooltip: {
                        enabled: true,
                    },
                    dataLabels: {
                        enabled: false,
                    },
                    fill: {
                        gradient: {
                            enabled: true,
                            opacityFrom: 0.55,
                            opacityTo: 0
                        }
                    },
                    theme: {
                        mode: 'dark', 
                        palette: 'palette1', 
                        monochrome: {
                            enabled: true,
                            color: '#00E396',
                            shadeTo: 'light',
                            shadeIntensity: 0.65
                        },
                    },
                    grid: { show: false },
                    chart: {
                        id: "chartstok",
                        toolbar: { show: false },
                        zoom: {
                            enabled: false,
                        },
                        fontFamily: 'Poppins, sans-serif',
                    },
                    yaxis: {
                        axisBorder: {
                            show: true,
                            color: "#FFF",
                            offsetX: 0,
                            offsetY: 0,
                        },
                        labels: {
                            style: {
                                colors: data.colors,
                            }
                        },
                    },
                    xaxis: {
                        axisBorder: {
                            show: true,
                            color: "#FFF",
                            height: 1,
                            width: "100%",
                            offsetX: 0,
                            offsetY: 0,
                        },
                        labels: {
                            style: {
                                colors: data.colors,
                            }
                        },
                        axisTicks: { show: false },
                        categories: data.label,
                    },
                }

                this.series = [{
                    name: 'terjual',
                    data: data.terjual
                }]

                this.loading = false
                
            }catch(e){
                console.log(e)
                this.loading = false
            }
        },

        async getTotal()
        {
            try{
                let { data } = await axios.get('dashboard/total')

                this.total = {
                    barang: data.barang,
                    terjual: data.terjual,
                    stok: data.stok,
                }
            }catch(e){
                console.log(e)
            }
        }
    }
}
</script>