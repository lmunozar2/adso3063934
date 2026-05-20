"use client";

import { useRef, useState } from "react";
import TrashIcon from "@/components/icons/TrashIcon";
import { deleteGame } from "@/app/games/admin/Action";
import Swal from "sweetalert2";

interface Props {
  gameId: number;
  gameTitle: string;
}

export default function DeleteGameButton({ gameId, gameTitle }: Props) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    setIsPending(true);
    setError(null);

    const result = await deleteGame(gameId);

    if (!result.success) {
      setError(result.message ?? "Something went wrong.");
      setIsPending(false);
    } else {
      modalRef.current?.close();
    }
  };

  return (
    <>
      {/* Botón de la card */}
      <button
        className="btn btn-outline btn-xs btn-error gap-1"
        onClick={async () => {
  const confirm = await Swal.fire({
    icon: "warning",
    title: "Delete Game",
    text: `Are you sure you want to delete "${gameTitle}"? This action cannot be undone.`,
    showCancelButton: true,
    confirmButtonText: "Yes, delete",
    cancelButtonText: "Cancel",
    confirmButtonColor: "#e11d48",
    background: "#545454",
    color:"white"
  });

  if (confirm.isConfirmed) {
    setIsPending(true);
    const result = await deleteGame(gameId);

    if (!result.success) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: result.message ?? "Something went wrong.",
        
      });
      setIsPending(false);
    } else {
      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: `"${gameTitle}" was deleted successfully.`,
        timer: 2000,
        showConfirmButton: false,
        background: "#545454",
      color:"white"
      });
    }
  }
}}
      >
        <TrashIcon />
      </button>

      {/* Modal de confirmación */}
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Delete Game</h3>
          <p className="py-4 text-base-content/70">
            Are you sure you want to delete{" "}
            <span className="font-semibold text-base-content">{gameTitle}</span>
            ? This action cannot be undone.
          </p>

          {error && (
            <div className="alert alert-error text-sm mb-4">{error}</div>
          )}

          <div className="modal-action">
            <button
              className="btn btn-ghost"
              onClick={() => modalRef.current?.close()}
              disabled={isPending}
            >
              Cancel
            </button>
            <button
              className="btn btn-error"
              onClick={handleDelete}
              disabled={isPending}
            >
              {isPending ? (
                <span className="loading loading-spinner loading-sm" />
              ) : (
                "Yes, delete"
              )}
            </button>
          </div>
        </div>

        {/* Click fuera cierra el modal */}
        <form method="dialog" className="modal-backdrop">
          <button type="submit">close</button>
        </form>
      </dialog>
    </>
  );
}
