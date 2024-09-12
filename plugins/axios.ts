import axios from "axios"
export default defineNuxtPlugin((nuxtApp) => {
  const defaultUrl = "https://99687ed324b27e81.mokky.dev"

  let api = axios.create({
    baseURL: defaultUrl,
    headers: {
      common: {},
    },
  })
  return {
    provide: {
      api: api,
    },
  }
})