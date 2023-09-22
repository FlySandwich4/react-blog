import RenderComponent from "./RenderComponent";
import useFetchSingleBlog from "./useFetch";

const SingleBlog = (props) => {
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
    const slug = props.slug;
    const data = useFetchSingleBlog(slug);
    console.log(data);

    return (
        <div style={{"width":"100%"}}>
            {data.blog && data.blog.content.map((content) => (
                <div>{RenderComponent(content)}</div>
            ))}
        </div>
    );
}
 
export default SingleBlog;