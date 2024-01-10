import {glob} from "glob";

const path = require('path')



export default {
    root: path.resolve(__dirname, 'src'),
    build: {
        outDir: path.join(__dirname, "dist"),
        rollupOptions: {
            input: ['./src/index.html', './src/home.html'],

        },
    },
    server: {
        port: 8080
    }
}