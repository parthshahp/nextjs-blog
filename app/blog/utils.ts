// import path from "path";
// import fs from "fs"; // Still need fs to read directory contents
// import type { Metadata } from "@/types";

// export async function getBlogPostsMetadata() {
//   const postsDirectory = path.join(process.cwd(), "content");
//
//   const mdxFiles = fs
//     .readdirSync(postsDirectory)
//     .filter((file) => path.extname(file) === ".mdx")
//     .map((file) => path.basename(file, ".mdx"));
//
//   const allPostsMetadata = await Promise.all(
//     mdxFiles.map(async (slug) => {
//       try {
//         const { metadata } = await import(`@/content/${slug}.mdx`);
//
//         if (
//           typeof metadata !== "object" ||
//           metadata === null ||
//           !metadata.title ||
//           !metadata.date ||
//           typeof metadata.published !== "boolean"
//         ) {
//           console.warn(
//             `Skipping post with slug "${slug}" dueed to incomplete or invalid metadata.`,
//           );
//           return null;
//         }
//
//         return {
//           slug,
//           metadata: metadata as Metadata, // Ensure type conformity
//         };
//       } catch (error) {
//         console.error(
//           `Error importing or parsing metadata for ${slug}.mdx:`,
//           error,
//         );
//         return null;
//       }
//     }),
//   );
//
//   return allPostsMetadata
//     .filter(Boolean) // Removes nulls
//     .filter((post) => post!.metadata.published); // Filters by published status
// }
//
// export function formatDate(
//   dateString: string,
//   includeRelative = false,
// ): string {
//   const currentDate = new Date();
//   let targetDate: Date;
//
//   if (!dateString.includes("T")) {
//     targetDate = new Date(`${dateString}T00:00:00`);
//   } else {
//     targetDate = new Date(dateString);
//   }
//
//   if (isNaN(targetDate.getTime())) {
//     return "Invalid Date";
//   }
//
//   const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
//   const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
//   const daysAgo = currentDate.getDate() - targetDate.getDate();
//
//   let formattedRelativeDate = "";
//
//   if (yearsAgo > 0) {
//     formattedRelativeDate = `${yearsAgo}y ago`;
//   } else if (monthsAgo > 0) {
//     formattedRelativeDate = `${monthsAgo}mo ago`;
//   } else if (daysAgo > 0) {
//     formattedRelativeDate = `${daysAgo}d ago`;
//   } else {
//     formattedRelativeDate = "Today";
//   }
//
//   const fullDate = targetDate.toLocaleString("en-us", {
//     month: "long",
//     day: "numeric",
//     year: "numeric",
//   });
//
//   if (!includeRelative) {
//     return fullDate;
//   }
//
//   return `${fullDate} (${formattedRelativeDate})`;
// }
