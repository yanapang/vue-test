// https://vite.dev/config/
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [
      vue(),
    ],

    // ----------------------------
    // 경로 별칭 (가장 많이 쓰임)
    // ----------------------------
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@api': path.resolve(__dirname, 'src/api'),
      },
    },

    // ----------------------------
    // 개발 서버
    // ----------------------------
    server: {
      port: 5173,
      host: true,          // docker / k8s 대응
      strictPort: true,
      open: false,
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },

    // ----------------------------
    // 빌드
    // ----------------------------
    build: {
      target: 'es2018',
      sourcemap: mode !== 'production',
      outDir: 'dist',
      emptyOutDir: true,

      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue', 'vue-router', 'pinia'],
          },
        },
      },
    },

    // ----------------------------
    // 환경변수
    // ----------------------------
    envPrefix: 'VITE_',

    // ----------------------------
    // 최적화
    // ----------------------------
    optimizeDeps: {
      include: ['axios'],
    },
  }
})
