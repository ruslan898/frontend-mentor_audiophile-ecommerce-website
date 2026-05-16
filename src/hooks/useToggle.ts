import { useState } from 'react';

type useToggleProps = {
  initialValue?: boolean;
};

export type UseToggleType = {
  isOpen: boolean;
  toggleOpen: () => void;
};

export function useToggle({
  initialValue = false,
}: useToggleProps = {}): UseToggleType {
  const [isOpen, setIsOpen] = useState(initialValue);

  function toggleOpen() {
    setIsOpen((prev) => (prev === false ? true : false));
  }

  return { isOpen, toggleOpen };
}
