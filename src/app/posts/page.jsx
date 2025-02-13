import Link from "next/link";

export const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    return data
}

const Posts = async() => {
    const posts = await getPosts()
    console.log(posts)
    return (
        <div className="grid grid-cols-4 gap-8">
            {posts.map(singlePost => {
                return (
                    <div key={singlePost.id}>
                        <p>{singlePost.title}</p>
                        <p>{singlePost.body}</p>
                        <Link href={`/posts/${singlePost.id}`}>Details</Link>
                    </div>
                )
            })}
        </div>
    );
};

export default Posts;