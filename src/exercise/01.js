import { useEffect } from "react";

/* ✅ create a new function called useDocumentTitle */
/* 👀 export function useDocumentTitle() {} */

function useDocumentTitle(pageTitle){
  useEffect(() => {
    document.title = pageTitle || "Welcome to the home page!";
  }, []);
}

export default function Home() {
  /* 
    ✅ move the useEffect code into your useDocumentTitle function
   then, call the useDocumentTitle hook in your component
  */

   useDocumentTitle("Welcome to the home page!")

  return (
    <div>
      <h1>Home Page</h1>
      <p>
        To see the title change in the browser tab, click the 'Open in new tab'
        link above
      </p>
    </div>
  );
}

export {useDocumentTitle}