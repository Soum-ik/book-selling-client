
import fetchData from "data-fetch-ts";
 

export default async function userInfo() {
    const token = cookies
    console.log(token, 'user token checking');

    const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT_BASEPATH}verified-user`
    const { data, error } = await fetchData({ endpoint })
    console.log(data, 'user data checking');

    return { data, error }
}