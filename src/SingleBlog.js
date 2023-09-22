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
    const data = useFetchSingleBlog(slug);
    console.log(data);

    return (
        <div className="Content">
            {data.blog && data.blog.content.map((content) => (
                <div key={content.title}>{RenderComponent(content)}</div>
            ))}
        </div>
    );
}
 
export default SingleBlog;