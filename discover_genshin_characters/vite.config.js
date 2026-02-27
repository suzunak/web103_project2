import { defineConfig } from 'vite'

/*
 When we run the command 'npm run build', the resources in the 'public' directory will be output
 to the 'server/public' directory. 
 We also specify that when we try to access the '/characters' endpoint from the client,
 we want the server to access this route at 'http://localhost:3001' while in development 
*/

export default defineConfig({
    build: {
        outDir: '../server/public',
        emptytOutDir: true
    },
    server: {
        proxy: {
            '/characters': {
                target: 'http://localhost:3001',
            }
        }
    }
})
