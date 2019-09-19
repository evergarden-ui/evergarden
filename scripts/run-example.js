const { spawnSync } = require('child_process')

const example = process.argv.slice(2)[0]

if (!example) {
  console.log('No example')
  process.exit(1)
}

spawnSync('yarn', ['poi', '-s', `packages/ui/src/${example}/example.js`], {
  stdio: 'inherit'
})