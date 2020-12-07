export const fetcher = async <T>(args: RequestInfo): Promise<T> => {
  const res = await fetch(args);

  return res.json();
};
