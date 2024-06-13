import path from 'path'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { viteBundler } from '@payloadcms/bundler-vite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload/config'
import seo from '@payloadcms/plugin-seo'
import computeBlurhash from 'payload-blurhash-plugin'

import * as Collections from './collections'
import * as Globals from './globals'

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  debug: process.env.NODE_ENV !== 'production',
  admin: {
    user: Collections.Users.slug,
    bundler: viteBundler(),
  },
  editor: lexicalEditor({}),
  collections: Object.values(Collections),
  globals: Object.values(Globals),
  typescript: {
    outputFile: path.resolve(__dirname, '../types.d.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  rateLimit: {
    trustProxy: true,
    skip(req) {
      return req.user
    }
  },
  upload: {
    limits: {
      fileSize: 20000000,
    },
  },
  plugins: [
    seo({
      collections: ['pages'],
      globals: ['settings'],
      uploadsCollection: 'images',
      // generateTitle: ({ doc }) => `${doc?.title?.value} | ${process.env.PAYLOAD_PUBLIC_SITE_NAME}`,
      tabbedUI: true,
    }),
    computeBlurhash(),
  ],
})
