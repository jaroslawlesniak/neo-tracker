export const withTruthy =
  <T, Q>(sideEffect: (data: T) => Q) =>
    (data: T | null) => {
      if (data) {
        return sideEffect(data);
      }

      return null;
    };
