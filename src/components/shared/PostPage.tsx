import { Key } from "react";
import Post, { PostData } from "./Post";

async function PostPage({ filterValue }: any) {
    const { isAvaiableFullSet, minPrice, maxPrice, semester, urgent, order, page } = filterValue;

    const queryParamsArray = [
        isAvaiableFullSet !== undefined ? `isAvaiableFullSet=${isAvaiableFullSet}` : '',
        minPrice !== undefined ? `minPrice=${minPrice}` : '',
        maxPrice !== undefined ? `maxPrice=${maxPrice}` : '',
        semester !== undefined ? `semester=${semester}` : '',
        urgent !== undefined ? `urgent=${urgent}` : '',
        order !== undefined ? `order=${order}` : '',
        page !== undefined ? `page=${page}` : ''
    ];

    // Filter out empty strings and join with '&'
    const queryParams = queryParamsArray.filter(Boolean).join('&');

    const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT_BASEPATH}get-post?${queryParams}`;
    const DataFetch = async () => {
        const response = await fetch(endpoint, {
            cache: "no-cache",
            next: {
                revalidate: 60
            },
        });
        return response.json()
    }
    const response = await DataFetch()

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
