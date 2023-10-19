type TFunc = <P extends object>(
  Component: React.ComponentType<P>,
) => React.FunctionComponent<P>;

const compose = (...funcs: TFunc[]) =>
  funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args)),
    arg => arg,
  );

export default compose;
