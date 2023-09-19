"use client";

import { MantineProvider } from "@mantine/core";
import { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <MantineProvider defaultColorScheme="light">{children}</MantineProvider>
  );
};

export default Provider;
