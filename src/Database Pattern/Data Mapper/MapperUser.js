const MapperAbstract = require('./MapperAbstract');
const User = require('@src/Tools/dto/user')

class MapperUser extends MapperAbstract {
  constructor() {
    super(User);
  };
};

module.exports = MapperUser;
