export async function GET(request: Request) {
  try {
    const { data } = await fetch(
      `https://api.mangadex.org/manga?includes[]=cover_art&includes[]=artist&includes[]=author&order[followedCount]=desc&contentRating[]=safe&contentRating[]=suggestive&hasAvailableChapters=true&createdAtSince=2023-10-30T08%3A00%3A27&availableTranslatedLanguage[]=id`,
      {
        headers: {
          "Content-Type": "application/json",
          "API-Key": "",
        },
        next: { revalidate: 60 }, // 60 seconds
      }
    ).then((res) => res.json());

    return Response.json(data, { status: 200, statusText: "OK" });
  } catch (error) {
    throw new Error("Error Status" + error);
  }
}
