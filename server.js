require('dotenv').config({ path: 'secrets.env' })

const password = process.env.PASS
console.log(password)