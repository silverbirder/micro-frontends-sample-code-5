// set up global namespace for workers-site environment
import makeServiceWorkerEnv from 'service-workers-site-mock'
declare var global: any
Object.assign(global, makeServiceWorkerEnv())
