import { getDownloadURL, ref } from "firebase/storage";
import { Div50L, Div50R, ImgShadow, Section50 } from "../styles/Responsive.style";
import { firebaseStorage } from "../lib/Firebase";
import { useEffect, useState } from "react";



export type StoryProps ={
  imgUrl : string, 
  imgalt : string,
  title : string,
  text : string,
  hrefLink : string,
  hrefText : string
}

export async function getImage (img : string){

  return  await getDownloadURL(
    ref(firebaseStorage, img)
  );
}


export default function Story(storyProps : StoryProps) {

 // stat for img loaded from firestore
 const [imgage, setImg] = useState("");
 // stade for initial loading
 const [loading, setLoading] = useState(true);
 
 useEffect(() => {
   if (loading === false) {
     return;
   }
   // fetching image from firestore
   async function  fetchImg() {
      const newUrl = await getDownloadURL(  ref(firebaseStorage, storyProps.imgUrl) );
         // stop loading when every pic have and ulr
      setLoading(newUrl!=="");
      setImg(newUrl);
       
    
   }
   fetchImg();
 }, [loading]);



  return (
    <>
    <Section50>
        <Div50L>
          <ImgShadow src={img} alt={storyProps.imgalt} />
          {/* <ImgShadow src="/src/images/1.png" alt=""/> */}
        </Div50L>

        <Div50R>
          <h1>{storyProps.title}</h1>
          <p> {storyProps.text} </p>
          <a href={storyProps.hrefLink}>{storyProps.hrefText}</a>
        </Div50R>
      </Section50>
    </>
  );
}