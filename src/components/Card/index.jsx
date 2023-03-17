import React from "react";
import styles from "./index.module.css";

const Card =({title,author,category,date,excerpt,featuredImg,tags,articleUrl }) =>{
    return(
    <div className={styles.card}>
    <h2>{title}</h2>
    <p>
      <b>Written By:</b>{author} |<b> Category: </b>{category} |<b> Published On:</b>{date}  
    </p>

    <div className={styles.content}>
    <img className={styles.radius} src={featuredImg}width="30%" alt="article thumbnil" />
    <p dangerouslySetInnerHTML={{__html:excerpt}}></p>
    </div>

  <div className={styles.actionContainer}>
    <h4>Tags:</h4>
    <div className={styles.tagsContainer}>

   {tags.map((tag)=>{
    return<p>{tag}</p>;
   })}

      {/* <p>Tenchnology</p>
      <p>Science</p>
      <p>Robotic</p> */}
    </div>
    <a href={articleUrl} target="_blank"rel="noreferrer noopener">Read More</a>
  </div>

    </div>
    

    )
}

export default Card;