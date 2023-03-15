import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as fs from 'fs';


const SelectedCourse = ({ selectedCourse }) => {
     const [selectedData] = useState(selectedCourse)

  return (
    <>
      <Head>
        <title>{selectedData?.slug}</title>
      </Head>
      <h3>This is {selectedData?.title}</h3>
      <h3>This is {selectedData?.description} </h3>
    </>
  );
};

export async function getStaticPaths(){
    return{
      paths:[
        {params:{slug: 'learn-html'}},
        {params:{slug: 'learn-js'}},
        {params:{slug: 'learn-next'}},
       
      ],
      fallback:true
    };
  
  }
  
 export  async function getStaticProps(context) {
    const { slug } = context.params;
    
    let myBlog = await  fs.promises.readFile(`./Courses/${slug}.json`,'utf-8')
  
    return {
      props: { selectedCourse : JSON.parse(myBlog) },
    };
  }
  
export default SelectedCourse;

