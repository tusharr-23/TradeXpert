import { toast } from "react-toastify";

const config = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
};

export const showSuccess = (message) => {
  toast.success(message || "Your request was completed successfully", config);
};

export const showError = (message) => {
  toast.error(message || "Something went wrong. Please try again", config);
};
