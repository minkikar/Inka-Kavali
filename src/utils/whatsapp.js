export const openWhatsApp = (message = "") => {
  const phone = "918605555484";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
