import path from 'path'

const createConfig = ({ format }) => {
  /** @type {import('rollup').RollupOptions} */
  const config = {
    input: ['src/index.js'],
    output: {
      dir: path.join(__dirname, 'dist', format),
      format
    },
    plugins: [
      require('rollup-plugin-buble')({
        objectAssign: 'Object.assign',
        transforms: {
          dangerousForOf: true,
          templateString: false,
          dangerousTaggedTemplateString: true
        }
      })
    ]
  }

  return config
}

export default [
  createConfig({ format: 'esm' }),
  createConfig({ format: 'cjs' })
]
