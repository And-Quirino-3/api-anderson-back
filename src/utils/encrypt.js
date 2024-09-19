const bcrypt = require('bcrypt')

const encrypt = async (password) => {
    return await bcrypt.hash(password, 12)
}


module.exports = { encrypt }