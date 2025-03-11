import { HoverEffect } from "@/components/ui/card-hover-effect";
import { HomeIcon } from "lucide-react";

async function getBlogs() {
  const res = await fetch(
    `https://dev.to/api/articles?username=capricious_daksh&per_page=1000`
    // { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  // console.log(data);
  return data;
}

const BlogComponent = async() => {
  const blogs = await getBlogs();

  const sortedBlogs = blogs.sort(
    (a, b) => new Date(b.published_at) - new Date(a.published_at)
  );
  const recentBlogs = sortedBlogs.slice(0, 6);

  const projects = recentBlogs.map((blog) => ({
    title: blog.title,
    description: blog.description,
    link: blog.url,
  }));

  return (
    <>
      <div
        className="flex flex-col items-center justify-center text-center px-6 mt-[7.2rem] md:mt-[7.3rem] lg:mt-[0rem]"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <div className="bg-[var(--name-background)] max-w-min px-5 py-2   rounded-full border border-gray-500">
          <h1 className="font-inter tracking-wide font-light text-sm  text-white">
            Blogs
          </h1>
        </div>
        <h1 className="font-inter text-2xl md:text-3xl lg:text-4xl mt-10 mb-10">
          <span className="text-zinc-600">Decoding Development</span> Challenges
          Here
        </h1>
      </div>
      <div
        className="max-w-5xl mx-auto px-6"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <HoverEffect items={projects} />
      </div>
    </>
  );
}
export default BlogComponent;
