import type { MDXComponents } from "mdx/types";
import Image from "next/image";

export const myComponents: MDXComponents = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 style={{ marginBottom: "0.25rem", lineHeight: "1.2" }}>{children}</h1>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p
      style={{
        marginBottom: "calc(var(--spacing-unit) * 0.5)",
        lineHeight: "1.6",
      }}
    >
      {children}
    </p>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote
      style={{
        paddingInline: "calc(var(--spacing-unit) * 0.5)",
        marginLeft: 0,
        marginRight: 0,
        marginBottom: "calc(var(--spacing-unit) * 0.5)",
        borderLeft: "2px solid var(--color-quote-border)",
        backgroundColor: "var(--color-blockquote-bg)",
        fontStyle: "italic",
      }}
    >
      {children}
    </blockquote>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul
      style={{
        marginBottom: "var(--spacing-unit)",
        paddingLeft: "calc(var(--spacing-unit) * 1.5)",
      }}
    >
      {children}
    </ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol
      style={{
        marginBottom: "var(--spacing-unit)",
        paddingLeft: "calc(var(--spacing-unit) * 1.5)",
      }}
    >
      {children}
    </ol>
  ),
  img: ({ src, alt }: { src: string; alt: string }) => (
    <Image
      style={{
        maxWidth: "100%",
        height: "auto",
        marginBlock: "var(--spacing-unit)",
        borderRadius: "4px",
      }}
      src={src}
      alt={alt}
    />
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre
      style={{
        fontFamily: "var(--font-mono, monospace)",
        padding: "var(--spacing-unit)",
        fontSize: "0.8em",
        borderRadius: "6px",
        border: "1px solid var(--color-primary)",
        overflowX: "auto",
        marginBottom: "var(--spacing-unit)",
      }}
    >
      {children}
    </pre>
  ),
  a: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
      href={href}
      style={{ textDecoration: "underline", color: "var(--color-primary)" }}
    >
      {children}
    </a>
  ),
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...myComponents,
  };
}
