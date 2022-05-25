import React from 'react'
import {useParams} from 'react-router-dom'
import NotFound from './components/NotFound'

const genratePage = (pageName) =>{
  const element = () => require(`./pages/${pageName}`).default

  try{ return React.createElement(element())}
  catch(err){
    return <NotFound/>
  }
}


const PageRender = () => {
  const {page,id} = useParams()
  let pageName = "";
  if(id){
    pageName = `${page}/[id]`
  }
  else {
    pageName = `${page}`
  }
  console.log(pageName)
  return genratePage(pageName)
}

export default PageRender