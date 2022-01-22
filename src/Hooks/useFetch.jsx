export const useFetch = {
    async get(EndPoint) {
        let url = `${process.env.REACT_APP_BACKEND_URL}/${EndPoint}`
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "accept": "application/json",
                // "Authorization": `Bearer ${token}`
            },
        });
        return await response.json()
    },

    async post(EndPoint, body) {
        let url = `${process.env.REACT_APP_BACKEND_URL}/${EndPoint}`
        return await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(body)
        });

    }
}