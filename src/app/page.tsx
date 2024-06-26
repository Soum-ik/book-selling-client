import MyFeed from "@/components/shared/MyFeed";
import PostPage from "@/components/shared/PostPage";


export default async function Home({ searchParams }) {
  const { page } = searchParams


  return (
    <div className="!min-h-screen bg-[#0E1217] p-3">
      <div className="max-w-7xl mx-auto">
        <div className="py-5 md:py-10">
          <MyFeed />
        </div>
        <PostPage filterValue={searchParams}
          page={page ? page : undefined} />
      </div>
    </div>
  );
}
