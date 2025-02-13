import Link from "next/link";
import style from './post.module.css'
export const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    return data
}

export const metadata = {
    title: "All Post",
    description: "Loading JSON placeholder using server component",
  };
const Posts = async() => {
    const posts = await getPosts()
    console.log(posts)
    return (
        <div className="grid grid-cols-4 gap-8">
            {posts.map(singlePost => {
                return (
                    <div key={singlePost.id} className='border-2 border-slate-300'>
                        <p className={`text-2xl font-bold ${style['post-title']}`}>{singlePost.title}</p>
                        <p className='font-semibold testing-purpose-css-class'>{singlePost.body}</p>
                        <Link href={`/posts/${singlePost.id}`}><button className="bg-green-300 text-black px-2 py-1 rounded-sm">Details</button></Link>
                    </div>
                )
            })}
        </div>
    );
};

export default Posts;