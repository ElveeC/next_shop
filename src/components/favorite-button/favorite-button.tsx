"use client";

import { FC, useCallback, useTransition } from "react";
import { handleFavorite } from "./handle-favorite";

type FavoriteProps = {
  isFavorite: boolean;
  productId: number;
}


const FavoriteButton: FC<FavoriteProps> = ({ isFavorite, productId }: FavoriteProps) => {

  const [isPending, startTransition] = useTransition();

  const handleFavoriteClick = useCallback(async ({ isFavorite, productId }: FavoriteProps) => {

    startTransition(async () => {

      await handleFavorite({ isFavorite, productId });
    });

  }, []);


  return (
    <button
      type="button"
      onClick={() => handleFavoriteClick({ isFavorite, productId })}
      disabled={isPending}
    >
      {isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
    </button>
  );
}

export default FavoriteButton;
