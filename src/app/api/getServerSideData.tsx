async function handleResponse(response: { json: () => Promise<any>; ok: any; }) {
    const json = await response.json();
    return response.ok ? json : Promise.reject(json);
  }
  
  function handleData(data: any) {
    return data;
  }
  
  function handleError(error: any) {
    console.error(error);
  }

export default async function getServerSideData(season: string, seasonYear: number, page: number | null, search: string | null, sort: string | null) {
    var query = `
        query ($id: Int, $page: Int, $perPage: Int, $season: MediaSeason, $seasonYear: Int, $isAdult:Boolean, $sort: [MediaSort], $search: String) {
            Page (page: $page, perPage: $perPage) {
                pageInfo {
                    total
                    currentPage
                    lastPage
                    hasNextPage
                    perPage
                }
                media (id: $id, type: ANIME, season: $season, seasonYear: $seasonYear, isAdult: $isAdult, sort: $sort, search: $search) {
                    id
                    title {
                    romaji
                    english
                    native
                    }
                    type
                    format
                    status
                    description(asHtml: false)
                    episodes
                    coverImage {
                        extraLarge
                    }
                    genres
                    averageScore
                    studios(isMain: true) {
                    nodes {
                        id
                        name
                    }
                    }
                    nextAiringEpisode {
                    airingAt
                    timeUntilAiring
                    episode
                    }
                }
            }
        }
    `;
      
    var variables = {
        season: season,
        seasonYear: seasonYear,
        search: search,
        isAdult: false,
        sort: sort ? sort : "POPULARITY_DESC",
        page: page ? page : 1,
        perPage: 15
    };
      
    // Define the config we'll need for our Api request
    var url = 'https://graphql.anilist.co',
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                variables: variables
            })
        };
      
        // Make the HTTP Api request
        try {
            const res = await fetch(url, options);
            const data = await handleResponse(res);
            return handleData(data);
        } catch (error) {
            handleError(error);
            return null;
        }
}