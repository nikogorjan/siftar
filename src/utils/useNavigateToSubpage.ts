// hooks/useNavigateToSubpage.ts
"use client";

import { useRouter } from "next/navigation"; // For Next.js App Router
// For Next.js Pages Router, use: import { useRouter } from "next/router";
import { useLocale } from "next-intl";

/**
 * Custom hook to navigate to a subpage with the current locale.
 *
 * @returns A function that takes a subpage string and navigates to the corresponding URL.
 */
const useNavigateToSubpage = () => {
  const router = useRouter();
  const locale = useLocale();

  /**
   * Navigates to the specified subpage, prefixed with the current locale.
   *
   * @param subpage - The subpage identifier to navigate to (e.g., 'about', 'contact', 'services').
   */
  const navigateToSubpage = (subpage: string) => {
    if (!subpage) {
      console.error("Subpage identifier is required.");
      return;
    }

    // Ensure the subpage starts with a '/'
    const formattedSubpage = subpage.startsWith("/") ? subpage : `/${subpage}`;

    // Construct the target URL with the locale
    const targetUrl = `/${locale}${formattedSubpage}`;

    // Navigate to the target URL
    router.push(targetUrl);
  };

  return navigateToSubpage;
};

export default useNavigateToSubpage;
