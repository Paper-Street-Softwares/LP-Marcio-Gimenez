import { useState, useEffect } from "react";
import WordPressBlogCard from "../cards/WordPressBlogCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeader from "../sectionElements/SectionHeader";
import content from "../../content/content";
import Paragraphs from "../sectionElements/Paragraphs";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

function BlogPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(content.texts.blog.blogApiEndpoint)
      .then((response) => response.json())
      .then((data) => setPosts(data.posts)) // Ajustado para pegar a chave correta
      .catch((error) => console.error("Erro ao buscar posts:", error));
  }, []);

  return (
    <div>
      <SectionArea className="bg-white" id="blog" paddingbot={true}>
        <SectionWrapper>
          <SectionHeader
            className="text-center"
            // miniTitle={content.texts.blog.miniTag}
            sectionHeaderTitle={content.texts.blog.title}
            sectionHeaderSubtitle={content.texts.blog.subtitle}
            color=""
            titleColorSet="text-black"
            subtitleColorSet="text-black"
            type=""
            miniTitleBgColor={false}
          />
          <ul className="flex flex-wrap gap-[30px] justify-center mb-[80px]">
            {posts.slice(0, 3).map((post) => (
              <li key={post.ID}>
                <a
                  href={post.URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:scale-[1.02] transition-transform duration-200"
                >
                  <WordPressBlogCard
                    img={
                      post.featured_image && (
                        <img
                          src={post.featured_image}
                          alt="Imagem do post"
                          // width={168}
                          // height={123}
                          className="w-full"
                        />
                      )
                    }
                    title={
                      <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                    }
                    subtitle={
                      <p
                        dangerouslySetInnerHTML={{
                          __html:
                            post.excerpt.length > 100
                              ? post.excerpt.substring(0, 100) + "..."
                              : post.excerpt,
                        }}
                      />
                    }
                    link={post.URL}
                  />
                </a>
              </li>
            ))}
          </ul>

          <MotionDivDownToUp>
            <Paragraphs className="text-center text-black underline transition hover:scale-110">
              <a href={content.texts.blog.blogLink} target="_blank">
                {content.texts.blog.label}
              </a>
            </Paragraphs>
          </MotionDivDownToUp>
        </SectionWrapper>
      </SectionArea>
    </div>
  );

  // return (
  //   <div>
  //     <WordPressBlogCard />
  //     <h2>Últimas postagens</h2>
  //     <ul>
  //       {posts.map((post) => (
  //         <li key={post.ID}>
  //           <h3 dangerouslySetInnerHTML={{ __html: post.title }} />
  //           <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
  //           {post.featured_image && (
  //             <img src={post.featured_image} alt="Imagem do post" width="300" />
  //           )}
  //           <a href={post.URL} target="_blank" rel="noopener noreferrer">
  //             Ler mais
  //           </a>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}

export default BlogPosts;
