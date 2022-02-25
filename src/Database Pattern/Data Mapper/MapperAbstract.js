class MapperAbstract {
  constructor(model) {
    if (this.constructor === MapperAbstract) {
      throw new TypeError('Abstract class "MapperAbstract" cannot be instantiated directly');
    };

    this.model = model;
  }

  async get(id) {
    return this.model.find({ id });
  }

  async getAll() {
    return this.model.find();
  }

  async add(obj) {
    return this.model.create(obj);
  }
}

module.exports = MapperAbstract;
