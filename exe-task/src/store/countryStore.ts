import { reactive, ref } from 'vue'
import { getAllCountries } from '../services/countriesApi/controller/countries' // Import your API function

interface Country {
  name: string
}
const countries1: any = ref([])
const columnB1: any = ref([])
const columnC1: any = ref([])
// Define the store state
const state = reactive({
  columnA: [] as Country[],
  columnB: [] as Country[],
  columnC: [] as Country[],
  countries: [] as Country[], // Initialize with an empty array
  loading: false,
  error: null as string | null // Initialize with null
})

const getters = {
  getCountries: () => state.countries
}

const mutations = {
  deleteColumnC: (item: Country) => {
    const index = state.columnC.indexOf(item)
    if (index !== -1) {
      state.columnC.splice(index, 1)
    }
  },
  deleteColumnB: (item: Country) => {
    const index = state.columnB.indexOf(item)
    if (index !== -1) {
      state.columnB.splice(index, 1)
    }
  },

  setColumnC: (item: Country) => {
    state.columnC.push(item)
  },

  setColumnB: (item: Country) => {
    state.columnB.push(item)
  },

  setCountries: (countries: Country[]) => {
    state.countries = countries
  },

  setLoading: (loading: boolean) => {
    state.loading = loading
  },

  setError: (error: string | null) => {
    state.error = error
  }
}

const actions = {
  removeItemToColumnB(item: any) {
    mutations.deleteColumnB(item)
  },
  removeItemToColumnC(item: any) {
    mutations.deleteColumnC(item)
  },
  appendItemToColumnB(item: any) {
    mutations.setColumnB(item)
  },

  appendItemToColumnC(item: any) {
    mutations.setColumnC(item)
  },

  async fetchCountries() {
    try {
      mutations.setLoading(true)

      const response = await getAllCountries()

      const limitedResponse = response.slice(0, 20)
      console.log('ss')
      mutations.setCountries(limitedResponse)
      mutations.setLoading(false)
    } catch (error: any) {
      mutations.setError(error.message)
      mutations.setLoading(false)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  countries1,
  columnB1,
  columnC1
}
