import { NextRequest, NextResponse } from "next/server";

const fetchData = async (url: string) => {
  const response = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 60 }, // 60 seconds
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return response.json();
};

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const mangaInfoUrl = `https://api.mangadex.org/manga/${id}?includes[]=artist&includes[]=author&includes[]=cover_art`;
  const mangaChapterUrl = `https://api.mangadex.org/manga/${id}/feed?limit=96&includes[]=scanlation_group&includes[]=user&order[volume]=desc&order[chapter]=desc&offset=0&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&contentRating[]=pornographic`;
  const mangaStaticUrl = `https://api.mangadex.org/statistics/manga/${id}`;

  try {
    const [mangaInfo, mangaChapter, mangaStatic] = await Promise.all([
      fetchData(mangaInfoUrl),
      fetchData(mangaChapterUrl),
      fetchData(mangaStaticUrl),
    ]);

    const result = [mangaInfo, mangaChapter, mangaStatic];

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
