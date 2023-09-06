import { reactive, ref } from 'vue'
import { getAllCountries } from '../services/countriesApi/controller/countries' // Import your API function

interface Country {
  name: string
}
interface Column {
  name: string
}

interface Columns {
  [key: string]: Country[] // Define an index signature for dynamic keys
}


// Define the store state
const state = reactive({
  columns: {
    columnA: [] as Column[],
    columnB: [] as Column[],
    columnC: [] as Column[],
  } as Columns,
  countries: [] as Country[], // Initialize with an empty array
  loading: false,
  error: null as string | null // Initialize with null
})

const getters = {
  getCountries: () => state.countries,
  getColumn: (id:string) => state.columns[id],

}

const mutations = {
  // deleteColumnC: (item: Country) => {
  //   const index = state.columnC.indexOf(item)
  //   if (index !== -1) {
  //     state.columnC.splice(index, 1)
  //   }
  // },
  // deleteColumnB: (item: Country) => {
  //   const index = state.columnB.indexOf(item)
  //   if (index !== -1) {
  //     state.columnB.splice(index, 1)
  //   }
  // },

  setColumnA: (item: Country) => {
    state.columns.columnA.push(item)
  },
  setColumnC: (item: Country) => {
    state.columns.columnC.push(item)
  },

  setColumnB: (item: Country) => {
    state.columns.columnB.push(item)
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

  async addItemToColumn(columnName: string, item: any) {
    // Check if the columnName exists in state.columns
    if (columnName in state.columns) {
      // Initialize the array if it doesn't exist
      if (!Array.isArray(state.columns[columnName])) {
        state.columns[columnName] = []
      }
      // Push the item into the array
      state.columns[columnName].push(item)
    } else {
      // Handle the case where columnName doesn't exist
      console.error(`Column '${columnName}' does not exist in state.columns.`)
    }

    console.log(state)
  },
  async fetchCountries() {
    try {
      mutations.setLoading(true)

      const response = await getAllCountries()

      const limitedResponse = response.slice(0, 20)

      const form = limitedResponse.map((item:any) => ({"data": item, "isChecked": false}))
      mutations.setColumnA(form)
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
}
