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

export default async function getStudioByID(id: number) {
    var query = `
        query ($id: Int) { # Define which variables will be used in the query (id) {
        Studio (id: $id) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query) {
            id
            name
            isAnimationStudio
            media (sort: POPULARITY_DESC, isMain: true, page: 1, perPage: 6) {
                nodes {
                    id
                    title {
                        romaji
                        english
                        native
                    }
                }
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