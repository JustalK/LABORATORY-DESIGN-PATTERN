const Orm = require('../../Tools/orm');

class MapperAbstract {
  constructor(model) {
    if (this.constructor === MapperAbstract) {
      throw new TypeError('Abstract class "MapperAbstract" cannot be instantiated directly');
    };

    this.orm = new Orm(model);
  }

  get() {
    return this.orm.get();
  }

  add() {
    return this.orm.add();
  }

  delete() {
    return this.orm.delete();
  }

  search() {
    return this.orm.search();
  }
}

module.exports = MapperAbstract;
