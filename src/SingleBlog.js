import { useParams } from "react-router-dom";
import RenderComponent from "./RenderComponent";
import useFetchSingleBlog from "./useFetch";

const SingleBlog = () => {
    // Structrue of data:
    // query MyQuery {
    //     blog(where: {slug: ${slug}}) {
    //       categories {
    //         name
    //       }
    //       slug
    //       title
    //       content
    //     }
    //   }
    // const data = useFetchSingleBlog(props.slug);
    const { slug } = useParams();
    const {blog} = useFetchSingleBlog(slug);
    console.log({blog});

    return (
        <div className="Content">
            {blog && blog.content.map((content) => (
                <div key={content.title}>{ RenderComponent(content) }</div>
            ))}
        </div>
    );
}
 
export default SingleBlog;