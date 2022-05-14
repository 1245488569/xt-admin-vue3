import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

const mocks = [] as any
const mockContext = import.meta.globEager('./mock/*.ts')
Object.keys(mockContext).forEach(v => {
  mocks.push(...mockContext[v].default)
})

export function setupProdMockServer() {
  createProdMockServer(mocks)
}
