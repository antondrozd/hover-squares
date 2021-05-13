import { IGameModes } from './interfaces/common.interfaces'

class API {
  private _apiBase = 'https://demo1030918.mockable.io/'

  async getGameModes() {
    const response = await fetch(this._apiBase)
    const modes: IGameModes = await response.json()

    return modes
  }
}

const api = new API()

export default api
