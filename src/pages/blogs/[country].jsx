import { useRouter } from "next/router";

const BlogList = () => {
  const router = useRouter();
  const { country } = router.query;

  // Aquí deberías cargar las entradas de blog para el país seleccionado
  const blogs = [
    { id: 1, title: `Blog post 1 about ${country}` },
    { id: 2, title: `Blog post 2 about ${country}` },
    // Añade más entradas de blog aquí...
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center my-8">
        Blog posts about {country}
      </h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id} className="my-4">
            <a href="#" className="text-blue-500">
              {blog.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
