// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from 'fs';
import { Electrolize } from 'next/font/google';

export default async function handler(req, res) {
   
//getting all courses file names from Courses directory 
  let data = await fs.promises.readdir('./Courses')
  let myfile;
  let allBlogs= []
  //adding files of all file names and pushing in all Blogs
   for (let index = 0; index < data.length; index++) {
    const element = data[index];
    myfile = await fs.promises.readFile(`./Courses/${element}`,'utf-8')
    allBlogs.push(JSON.parse(myfile));
   }
  res.status(200).json(allBlogs)

}





