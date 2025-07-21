export async function fetchReviews(section: string) {
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/reviews/?section=${section}`);
    if (!res.ok) throw new Error("Failed to fetch reviews");
    return await res.json();
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
}
