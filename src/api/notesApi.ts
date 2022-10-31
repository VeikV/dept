// import { axiosApi } from 'api/common/axiosApi'
// import { Config } from 'api/common/types'
import mockNotes from 'api/mocks/clientNotesMock.json'

export const getNotes = async () => {
  /** example with real api
    const response = await axiosApi.get<Config>('/posts')
    return response.data
  **/
  return mockNotes
}
