"use server";

import ClientGreeting from "../components/ClientGreeting";
import { getLatestsPosts } from "./actions/action";

export default async function Home() {
  const posts = await getLatestsPosts();

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6">
      <ClientGreeting name="World" />
      <h2 className="text-2xl underline underline-offset-4">Latests Posts</h2>
      <div className="flex flex-col gap-4">
        {posts.map(({ content, id }) => (
          <div className="" key={id}>
            {content}
          </div>
        ))}
      </div>
    </div>
  );
}
