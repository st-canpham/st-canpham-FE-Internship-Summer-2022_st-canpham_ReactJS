export const getStorage = (key) => JSON.parse(localStorage.getItem(key));
export const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}
