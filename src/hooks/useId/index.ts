import { useState } from "react";

export const useId = () => {
  const [id, setId] = useState<number>(123);

  const handleSetId = (id: number) => setId(id);

  return {
    id,
    handleSetId,
  };
};
