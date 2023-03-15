import Link from "next/link"
import { useEffect, useState } from "react";
import * as fs from 'fs'

export async function getStaticProps(context){
    let myfile;
    let allCourses=[]
    const data = await fs.promises.readdir('./Courses')
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
         myfile = await fs.promises.readFile(`./Courses/${element}`,'utf-8')
         allCourses.push(JSON.parse(myfile)) 
    }

    return{
        props:{ allCourses}
    }
}

const Course = ({allCourses})=>{
    const [state, setState] = useState(allCourses)
    return<>
        <h3>These are famous posts</h3>
        <div>
            {state?.map(item=>{
                return(
                <Link key={item?.slug} href={`/Course/${item?.slug}`}> <h1>{item?.title}</h1></Link>
                )
            })}
        </div>
    </>
}

export default Course
