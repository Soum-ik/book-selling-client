"use server";

import MyFeed from "@/components/shared/MyFeed";
import Post, { PostData } from "@/components/shared/Post";
import ErrorPopup from "@/components/shared/PopUp/ErrorPopup";
import fetchData from "data-fetch-ts";
import { Key } from "react";

export default async function page() {
  
  const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT_BASEPATH}get-post`;
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjY2ZGQ4ZGRkZDFhMjViZTllZTYxNTMyIiwiaXNWZXJmaXllZCI6dHJ1ZSwicm9sZSI6IkFETUlOIiwic3VzcGVuZCI6ZmFsc2UsImlhdCI6MTcxODkxMDY3NywiZXhwIjoxNzE4OTk3MDc3fQ.uD_h0Rxtm2I92yQZuKLKdJl0p9G4LBKar4Nj_Bks0T8"
  const { data, error } = await fetchData({ endpoint, token });


  return (
    <div className="!min-h-screen bg-[#0E1217] p-3">
      <div className="max-w-7xl mx-auto">
        <div className="py-5 md:py-10">
          <MyFeed />
        </div>
        {error ? (
          <ErrorPopup error="Failed to load posts. Please try again later." />
        ) : (
          <div className="grid gap-5 place-content-center last:mb-28 mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.map((item: PostData, index: Key | null | undefined) => (
              <Post dataProps={item} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
