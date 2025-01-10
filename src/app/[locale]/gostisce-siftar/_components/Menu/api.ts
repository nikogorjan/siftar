// lib/api.ts
export const fetchStrapi = async (
  endpoint: string,
  locale: string = "sl",
  paginationLimit: number | string = -1
) => {
  const API_URL = "https://tog8wwk88s8gkgkkw0okk8kg.nikogorjan.com/api";

  const res = await fetch(
    `${API_URL}${endpoint}&locale=${locale}&pagination[limit]=${paginationLimit}`
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${res.statusText}`);
  }

  const data = await res.json();
  return data;
};
