import { createContext, useContext } from "react";
import { useState } from "react";

type SheetType = "login" | "signup" | "register-resend-verify-email" | "forgot-password" | null;

interface SheetContextProps {
  isOpen: boolean;
  sheetType: SheetType;
  openSheet: (type: SheetType) => void;
  closeSheet: () => void;
  setIsOpen: (type: boolean) => void;
}

const SheetContext = createContext<SheetContextProps | undefined>(undefined);

export const SheetProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sheetType, setSheetType] = useState<SheetType>(null);

  const openSheet = (type: SheetType) => {
    setIsOpen(true);
    setSheetType(type);
  };

  const closeSheet = () => {
    setIsOpen(false);
    setSheetType(null);
  };

  return (
    <SheetContext.Provider value={{ isOpen, sheetType, openSheet, setIsOpen, closeSheet }}>
      {children}
    </SheetContext.Provider>
  );
};

export const useSheet = () => {
  const context = useContext(SheetContext);
  if (!context) {
    throw new Error("useSheet must be used within a SheetProvider");
  }
  return context;
};
