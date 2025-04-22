import { tokenStore } from '../store/token'

type RequestBody = undefined | Record<string, unknown> | FormData

class ApiService {
  private baseUrl: string

  constructor() {
     this.baseUrl = 'http://192.168.0.110:8000/api/v2'
  }

  private async request<T>(
    endpoint: string,
    method: string = 'GET',
    body: RequestBody = undefined,
    headers: Record<string, string> = {}
  ): Promise<T> {
    const url = `${this.baseUrl}/${endpoint.startsWith('/') ? endpoint.slice(1) : endpoint}`
    const mainHeader = new Headers(headers)
    const token = tokenStore.getAccessToken()

    if (token) {
      mainHeader.set('Authorization', `Bearer ${token}`)
    }

    const options: RequestInit = {
      method,
      headers: mainHeader
    }

    if (body) {
      if (body instanceof FormData) {
        options.body = body
        // Do not set content-type manually, let the browser handle it
      } else {
        options.body = JSON.stringify(body)
        mainHeader.set('Content-Type', 'application/json')
      }
    }

    try {
      const response = await fetch(url, options)

      // Optional: Handle HTTP error status codes
      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse?.message || 'API request failed')
      }

      return response.json()
    } catch (error) {
      console.error('API request error:', error)
      throw error
    }
  }

  get<T>(endpoint: string, headers: Record<string, string> = {}): Promise<T> {
    return this.request<T>(endpoint, 'GET', undefined, headers)
  }

  post<T>(
    endpoint: string,
    body: RequestBody,
    headers: Record<string, string> = {}
  ): Promise<T> {
    return this.request<T>(endpoint, 'POST', body, headers)
  }

  put<T>(
    endpoint: string,
    body: RequestBody,
    headers: Record<string, string> = {}
  ): Promise<T> {
    return this.request<T>(endpoint, 'PUT', body, headers)
  }

  delete<T>(
    endpoint: string,
    headers: Record<string, string> = {}
  ): Promise<T> {
    return this.request<T>(endpoint, 'DELETE', undefined, headers)
  }
}

export const apiService = new ApiService()
