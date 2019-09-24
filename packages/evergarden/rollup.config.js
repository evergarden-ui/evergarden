import path from 'path'

const createConfig = ({ format }) => {
  /** @type {import('rollup').RollupOptions} */
  const config = {
    input: ['src/index.js', 'src/icons.js'],
    output: {
      dir: path.join(__dirname, 'dist', format),
      format
    },
    plugins: [
      require('rollup-plugin-babel')({
        exclude: 'node_modules/**'
      })
    ]
  }

  return config
}

export default [
  createConfig({ format: 'esm' }),
  createConfig({ format: 'cjs' })
]
