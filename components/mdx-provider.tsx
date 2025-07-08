"use client";

import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "@/mdx-components"; // Or wherever you have your components

export function MdxProvider({ children }: { children: React.ReactNode }) {
  const components = useMDXComponents({});

  return <MDXProvider components={components}>{children}</MDXProvider>;
}
