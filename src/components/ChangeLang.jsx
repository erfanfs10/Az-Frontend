import React from "react";
import { Button } from "@chakra-ui/react";

const ChangeLang = () => {
  return (
    <Button
      variant="outline"
      size={{
        base: "sm",
        sm: "sm",
        md: "md",
        lg: "md",
        xl: "md",
      }}
    >
      Eng / Fa
    </Button>
  );
};

export default ChangeLang;
