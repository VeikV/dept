// import { axiosApi } from 'api/common/axiosApi'
// import { Config } from 'api/common/types'
import mockConfig from 'api/mocks/configMock.json'

export const getConfig = async () => {
  /** example with real api
    const response = await axiosApi.get<Config>('/posts')
    return response.data
  **/
  return mockConfig
}
