const truncate = (string) => {
  return string?.length > 150 ? string.substr(0, 149) + "......" : string;
};
export default truncate
