import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const repoBase = '/Virtual_Assistant/' // replace with your repo name if different

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? repoBase : '/', // GitHub Pages needs repo path; Vercel and dev use root
})