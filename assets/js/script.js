// used code from stack overflow
const openNewWindow = (event) => {
  event.preventDefault();
  const { href, target } = event.currentTarget;
  const features = "resizable";
  window.open(href, target, features);
};
