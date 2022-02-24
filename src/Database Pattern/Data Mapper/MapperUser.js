const MapperAbstract = require('./MapperAbstract');
const Orm = require('../../Tools/orm');
const User = require('../../Tools/dto/user')

class MapperUser extends MapperAbstract {
  constructor() {
    super(User);
  };
};

module.exports = MapperUser;
