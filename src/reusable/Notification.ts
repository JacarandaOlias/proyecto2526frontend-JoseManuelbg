import { toast } from "react-toastify";

export const notify = (
  msg: string,
  type: "success" | "error" | "info" | "warning" = "info",
) =>{
    toast(msg, {
      type,
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    toastId: 1
    })
}