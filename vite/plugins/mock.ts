import { viteMockServe } from 'vite-plugin-mock'

export default function setupMock(isBuild: boolean) {
  return viteMockServe({
    mockPath: 'src/mock',
    localEnabled: !isBuild,
    prodEnabled: isBuild,
    injectCode: `
      import { setupProdMockServer } from './mockProdServer';
      setupProdMockServer();
    `
  })
}
