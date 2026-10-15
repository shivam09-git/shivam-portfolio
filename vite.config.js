import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'

const resumePath = path.resolve(process.cwd(), 'resume/resume.pdf')

const resumeAsset = () => ({
  name: 'resume-asset',
  configureServer(server) {
    server.middlewares.use('/resume', (request, response, next) => {
      if (request.url !== '/resume.pdf') {
        next()
        return
      }
      response.setHeader('Content-Type', 'application/pdf')
      fs.createReadStream(resumePath).pipe(response)
    })
  },
  closeBundle() {
    const outputPath = path.resolve(process.cwd(), 'dist/resume')
    fs.mkdirSync(outputPath, { recursive: true })
    fs.copyFileSync(resumePath, path.join(outputPath, 'resume.pdf'))
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), resumeAsset()],
})
