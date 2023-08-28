import { defineConfig } from 'vite';
import fs from 'fs/promises';

import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
        esbuild: {
            loader: "jsx",
            include: /src\/.*\.jsx?$/,
            // loader: "tsx",
            // include: /src\/.*\.[tj]sx?$/,
            exclude: [],
        },
        server: {
            open: true,
        },
        build: {
            outDir: 'build',
        },
        plugins: [
            react(),

        ],
        optimizeDeps: {
            esbuildOptions: {
                plugins: [
                    {
                        name: "load-js-files-as-jsx",
                        setup(build) {
                            build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
                                loader: "jsx",
                                contents: await fs.readFile(args.path, "utf8"),
                            }));
                        },
                    },
                ],
            },
        },
    };
});