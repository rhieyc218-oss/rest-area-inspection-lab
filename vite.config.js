import { defineConfig } from 'vite'

// JSX를 자동(automatic) 방식으로 변환 → 각 파일에서 `import React`가 없어도 동작
export default defineConfig({
  esbuild: { jsx: 'automatic' },
})
