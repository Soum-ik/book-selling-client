import { Key } from "react";
import Post, { PostData } from "./Post";

async function PostPage({ filterValue }: any) {
    const { isAvaiableFullSet, minPrice, maxPrice, semester, urgent, order } = filterValue;
    let queryParams = ``;
    if (isAvaiableFullSet !== undefined) {
        queryParams += `isAvaiableFullSet=${isAvaiableFullSet}&`;
    }
    if (minPrice !== undefined) {
        queryParams += `minPrice=${minPrice}&`;
    }
    if (maxPrice !== undefined) {
        queryParams += `maxPrice=${maxPrice}&`;
    }
    if (semester !== undefined) {
        queryParams += `semester=${semester}&`;
    }
    if (urgent !== undefined) {
        queryParams += `urgent=${urgent}&`;
    }
    if (order !== undefined) {
        queryParams += `order=${order}&`;
    }
    // Remove the trailing '&' if it exists
    if (queryParams.endsWith('&')) {
        queryParams = queryParams.slice(0, -1);
    }

    const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT_BASEPATH}get-post?${queryParams}`;
    const DataFetch = async () => {
        const response = await fetch(endpoint, {
            cache: 'no-cache',
            next: {
                revalidate: 60
            }
        });
        return response.json()
    }
    const response = await DataFetch()
    console.log(response, 'checking data');

    const { data } = response;

    return (
        <div>
            <div className="grid gap-5 place-content-center last:mb-28 mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data?.map((item: PostData, index: Key | null | undefined) => (
                    <Post dataProps={item} key={index} />
                ))}
            </div>
        </div>
    )
}

export default PostPage;
