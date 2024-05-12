import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {media} from "sanity-plugin-media"
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'McLean Mylymok Backend ',

  projectId: 'i19fgqzy',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), media()],

  schema: {
    types: schemaTypes,
  },
})
