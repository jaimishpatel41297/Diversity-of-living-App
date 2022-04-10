export async function login(user){

    return await fetch(`${process.env.REACT_APP_API_BASE_URL}/user/login`,
        {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(user)
        })
    .then(response => response.json())
}