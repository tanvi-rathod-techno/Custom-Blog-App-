// src/store/token.ts

export const tokenStore = {
    getAccessToken: () => localStorage.getItem('token') || undefined,
  }
  