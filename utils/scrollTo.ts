export const scrollTo = (path: string) => {
  location.hash = path;
  history.replaceState(null, "", " "); // очищаем путь в адресной строке
};
