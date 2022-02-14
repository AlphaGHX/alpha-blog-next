import PostType from '../types/post'

type Props = {
  allPosts: PostType[]
}

const BlogList = ({ allPosts }: Props) => {
  return (
    <>
      {allPosts.map((post, index) => (
        <div key={index}>
          <div>{post.text}</div>
          <div>{post.title}</div>
        </div>
      ))}
    </>
  )
}

export default BlogList
