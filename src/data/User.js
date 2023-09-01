const { v4: uuidv4 } = require('uuid');
const {hashSync} = require('bcryptjs');

const User = function ({name, surname, email, password}) {

    this.id = uuidv4();
    this.name = name.trim();
    this.surname = surname.trim();
    this.email = email.trim();
    this.password = hashSync(password,10);
    this.role = 'user';
    this.birthday = null;
    this.address = null;
    this.city = null;
    this.province = null;
    this.createAt = new Date;
}

module.exports = User