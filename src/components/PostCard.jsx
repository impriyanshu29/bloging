import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'
import styled from "styled-components";

const StyledText = styled.h1`
  font-size: 1.3rem;
  font-family:"Playfair Display", serif;
  font-weight: 500;
  color: #27374D;

  `

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-[#DCEEF2] rounded-xl p-4'>
            <div className='w-full  flex justify-center  my-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2 >
                 <StyledText>
                 {title}
            </StyledText>
              </h2>
        </div>
    </Link>
  )
}


export default PostCard