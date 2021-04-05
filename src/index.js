import { registerApplication, start } from 'single-spa'

registerApplication("test", () => Promise.resolve({
  async bootstrap() {
    console.log('bootstrap')
  },
  async mount() {
    console.log('mount')
  },
  async unmount() {
    console.log('unmount')
  },
}), () => true)

start()