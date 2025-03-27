import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: 'ydmv7k8f',
  dataset: 'production',
  title: 'Personal Website',
  apiVersion: '2025-3-27',
  basePath: '/admin',
  plugins: [deskTool()]
})

export default config