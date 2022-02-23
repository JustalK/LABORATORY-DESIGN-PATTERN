export default SingletonPattern = () => {
  let _instance = null;

  const _createInstance: () => {
    return {
      print: () => {
        console.log('I am a Singleton Pattern.');
      }
    }
  }

  return {
    getInstance: () => {
      if (!_instance) {
        _instance =
      }

      return _instance;
    }
  }
}
