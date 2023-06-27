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
            duration
            chapters
            volumes
            countryOfOrigin
            isLicensed
            source
            hashtag
            trailer {
            id
            site
            thumbnail
            }
            coverImage {
            extraLarge
            }
            bannerImage 
            genres
            averageScore
            popularity
            favourites
            tags {
            name
            }
            relations {
             edges {
                relationType(version: 2)
                node {
                    id
                    title {
                        romaji
                        english
                        native
                    }
                    type
                    coverImage {
                        extraLarge
                    }
             }
            }
            }
            characters(sort: [RELEVANCE], page: 1, perPage: 5) {
                nodes {
                    id
                    name {
                        full
                    }
                    image {
                        large
                    }
                    gender
                    age
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
            id: id
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