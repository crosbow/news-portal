"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const Modal = ({ children }) => {
  const dialogRef = useRef();
  const router = useRouter();

  const onDismiss = () => {
    router.back();
  };

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      onDismiss();
    }
  };

  const handleClose = (e) => {
    if (e.target === dialogRef.current) {
      onDismiss();
    }
  };

  useEffect(() => {
    if (!dialogRef.current.open) {
      dialogRef.current.showModal();
    }

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onkeydown);
  }, []);
  return (
    <dialog
      ref={dialogRef}
      onClick={handleClose}
      className=" w-screen fixed  bg-zinc-800/50  overflow-y-scroll text-white  h-screen z-50 mx-auto"
    >
      <div className="max-w-5xl mx-auto bg-zinc-700 p-5">{children}</div>
    </dialog>
  );
};
export default Modal;
