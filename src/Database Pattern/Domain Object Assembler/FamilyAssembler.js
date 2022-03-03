const User = require('@src/Tools/dto/user')

class FamilyAssembler {
  private constructor() {
    this.firstnameBrother = brother.firstname
    this.lastnameBrother = brother.lastname
    this.firstnameSister = sister.firstname
    this.lastnameSister = sister.lastname
  }

  static async fetchUser(findBrother, findSister) {
      const brother = await User.findOne(findBrother)
      const sister = await User.findOne(findSister)

      // Invoke the private constructor...
      return new Person(brother, sister);
  }
};

module.exports = FamilyAssembler;
