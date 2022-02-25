const MapperAbstract = require('./MapperAbstract');
const Orm = require('@src/Tools/orm');
const User = require('@src/Tools/dto/user')

class MapperUser extends MapperAbstract {
  constructor() {
    super(User);
  };
};

module.exports = MapperUser;
