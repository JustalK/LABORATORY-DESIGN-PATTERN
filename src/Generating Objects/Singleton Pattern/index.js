let _instance = null;

const _createInstance = () => {
  return {
    print: () => {
      return 'I am a Singleton Pattern.';
    }
  }
}

module.exports = {
  getInstance: () => {
    if (!_instance) {
      _instance = _createInstance();
    }

    return _instance;
  }
}
