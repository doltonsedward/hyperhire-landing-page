/**
 *
 * @param url -> /url
 * @param options -> fetch options
 * @returns
 */

export async function fetcher(url: string, options?: RequestInit) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, {
    ...options,
    cache: options?.cache ?? 'force-cache',
  });

  return res.json();
}
