import { IModes } from './interfaces/common.interfaces'

class API {
  private _apiBase = 'https://demo1030918.mockable.io/'

  async getModes() {
    const response = await fetch(this._apiBase)
    const modes: IModes = await response.json()

    return modes
  }
}

const api = new API()

export default api
