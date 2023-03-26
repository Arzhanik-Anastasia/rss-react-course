export const checkedDate = (value: string): boolean => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dob = new Date(value);
  const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
  let age = today.getFullYear() - dob.getFullYear();
  if (today < dobnow) {
    age = age - 1;
  }
  return age >= 18 ? true : false;
};

export const getToday = (): string => {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(
    today.getDate()
  ).padStart(2, '0')}`;
};

export const validateFirstName = (name: string) => {
  return name.length > 4 ? true : false;
};

export const validateLastName = (name: string) => {
  return name.length > 4 ? true : false;
};

export const validateZipCode = (code: string) => {
  return code.length >= 6 ? true : false;
};
