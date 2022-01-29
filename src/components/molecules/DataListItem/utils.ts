type TEntity = {
  id: string;
  name: string;
};

export const getNameById = (
  data: Array<TEntity>,
  id: string
): string | undefined => data.find((it) => it.id === id)?.name;
