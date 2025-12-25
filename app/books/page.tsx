import HeaderLayout from "@/components/header-layout";

export default function Books() {
  return (
    <>
      <HeaderLayout subtitle="What I've been reading lately">
        <p>Here are some of the books that I&apos;ve read recently.</p>
      </HeaderLayout>
      <div className="books-section">
        <h2>Books</h2>
        <p>
          Currently reading <i>Harry Potter</i> by J.K. Rowling
        </p>
        <h3>Past</h3>
      </div>
    </>
  );
}
