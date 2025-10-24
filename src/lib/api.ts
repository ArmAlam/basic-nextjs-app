export async function fetchProtectedData(accessToken: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/data`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
