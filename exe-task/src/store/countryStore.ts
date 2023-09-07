import { reactive, ref } from 'vue'
import { getAllCountries } from '../services/countriesApi/controller/countries' // Import your API function

interface Country {
  name: string
}
interface ColumnData {
  name: string;

}
export interface Column {
  data: ColumnData
  isChecked?: boolean;
}

interface Columns {
  [key: string]: Column[] // Define an index signature for dynamic keys
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
  getColumn: (id: string) => state.columns[id],

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

  setColumnA: (item: Column) => {
    state.columns.columnA = item
  },
  setColumnC: (item: Column) => {
    state.columns.columnC = item
  },

  setColumnB: (item: Column) => {
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

  changeCheckState(columnName: string, index: number) {
    console.log('change')
    const itemToUpdate = state.columns[columnName][index]
    itemToUpdate.isChecked = !itemToUpdate.isChecked

  },
  async addItemToColumn(columnName: string, item: any) {
    if (columnName in state.columns) {
      const column = state.columns[columnName];

      const itemIndex = column.findIndex((i: ColumnData) => i.name === item.data.name);



      if (itemIndex === -1) {
        if (columnName === 'columnB') {
          this.changeCheckState(columnName, itemIndex);
        }
        column.push(item);
      } else {
        console.error(`Item with name '${item.name}' already exists in column '${columnName}'.`);
      }
    } else {
      console.error(`Column '${columnName}' does not exist in state.columns.`);
    }
  },
  removeItemFromColumn(columnName: string, item: Column) {
    if (columnName in state.columns) {
      const column = state.columns[columnName];
      const indexToRemove = column.findIndex((i: Column) => i.name === item.name);
      console.log(column, columnName, item.name, indexToRemove)

      if (indexToRemove !== -1) {
        column.splice(indexToRemove, 1);
      } else {
        console.log('ss')
      }
    } else {
      console.error(`Column '${columnName}' does not exist in state.columns.`);
    }
  },
  async fetchCountries() {
    try {
      mutations.setLoading(true)

      const response = await getAllCountries()

      const limitedResponse = response.slice(0, 20)

      const form = limitedResponse.map((item: any) => ({
        "data": item as Column['data'],
        "isChecked": false
      }));
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
