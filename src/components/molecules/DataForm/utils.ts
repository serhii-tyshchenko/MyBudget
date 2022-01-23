export const getSelectOptions = (data: { id: any; name: any }[]) =>
  data.map(({ id, name }) => ({
    value: id,
    label: name,
  }));
