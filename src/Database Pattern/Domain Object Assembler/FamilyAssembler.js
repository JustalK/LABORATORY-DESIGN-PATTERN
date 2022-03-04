const User = require('@src/Tools/dto/user')

class FamilyAssembler {
  constructor(findBrother, findSister) {
    return (async () => {
      const brother = await User.findOne(findBrother)
      const sister = await User.findOne(findSister)

      this.firstnameBrother = brother.firstname
      this.lastnameBrother = brother.lastname
      this.firstnameSister = sister.firstname
      this.lastnameSister = sister.lastname

      return this;
    })();
  }
};

module.exports = FamilyAssembler;
