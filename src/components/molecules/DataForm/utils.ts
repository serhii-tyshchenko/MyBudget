export const getSelectOptions = (data: { id: any; name: any }[]) => [
  { value: '', label: '— — —', disabled: true },
  ...data.map(({ id, name }) => ({
    value: id,
    label: name,
  })),
];
