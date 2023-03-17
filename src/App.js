import './App.css';
import Card from "./components/Card"
import {useEffect,useState} from "react";


function App() {

const [articles,setArticles]=useState([]);

   fetch("https://techcrunch.com/wp-json/wp/v2/posts")
   .then((res)=>res.json())
   .then((data)=>{
    console.log(data);

    setArticles(data);
   });
  useEffect(()=>{

  },[]);

  return (
    <div>
   <h1 className="title">News Portal..!</h1>
   
   <div className="container">

   {/* Left side main */}

   <div className="mainSection">
   {articles.map((article,index)=>{
    console.log(article);

    let title =article.parselyMeta["parsely-title"];
    let author =article.parselyMeta["parsely-author"];
    let category =article.parselyMeta["parsely-section"];
    let date = new Date (article.date).toDateString();
    let excerpt=article.excerpt.rendered;
    let featuredImg=article.parselyMeta["parsely-image-url"];
    let raw_tags =article.parselyMeta["parsely-tags"];
    let canonical_url=article.canonical_url;


    let tags = raw_tags.split(",").slice(1,5);

    return <Card title={title}
     author={author}
     category={category}
     date={date}
     excerpt={excerpt}
     featuredImg={featuredImg}
     tags={tags}
     articleUrl={canonical_url}/>

   })}
 
   </div>
   {/* Sidebar */}
   <div className="sidebar">
    <h3>Related News</h3>
    <ul>
      <li>A recently presented European Union plan to update</li>
      <li>Toto Wolff, the 50-year-old Austrian chief executive</li>
      <li>TikTok owner ByteDance is moving towards a launch</li>
    </ul>
   <h3>Trending News</h3>
   <ul>     
      <li>A recently presented European Union plan to update</li>
      <li>Toto Wolff, the 50-year-old Austrian chief executive</li>
      <li>Danish startup Pleo has announced that it plans to lay off around 15%</li>
     </ul>
   </div>

   </div>
  
    </div>
  );
}

export default App;
