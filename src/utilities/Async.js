const Async = generator => {
  return () => {
    const iterator = generator();

    const resolve = next => {
      if (next.done) {
        return Promise.resolve(next.value);
      }

      return Promise.resolve(next.value).then(response => {
        return resolve(iterator.next(response));
      });
    };

    return resolve(iterator.next());
  };
};

export default Async;