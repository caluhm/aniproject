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

export default async function getServerSideData(id: number) {
    var query = `
        query ($id: Int) { # Define which variables will be used in the query (id) {
        Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query) {
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
            startDate {
            year
            month
            day
            }
            endDate {
            year
            month
            day
            }
            season
            seasonYear
            seasonInt
            episodes
            coverImage {
            extraLarge
            }
            bannerImage 
            genres
            averageScore
            popularity
            tags {
            name
            }
            relations {
            nodes {
                id
                title {
                romaji
                english
                native
                }
            }
            }
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
        `;

        // Define our query variables and values that will be used in the query request
        var variables = {
            id: 15125
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