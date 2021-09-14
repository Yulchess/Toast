// import ReactDom from "react-dom";
// import { useToastPortal } from "../../Hooks/useToastPortal";
// import { ToastElement } from "./styles";
// import { useState } from "react";
// export const ToastPortal = () => {
//   const { loaded, portalId } = useToastPortal();
//   const [toast, setToast] = useState([]);
//   return loaded ? (
//     ReactDom.createPortal(
//       <ToastElement>{toast.map(t =>(<div key= {t.id }></div>))}</ToastElement>,
//       document.getElementById(portalId)
//     )
//   ) : (
//     <></>
//   );
// };
