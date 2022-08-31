import { useEffect, useState } from "react"
import {FaBars} from 'react-icons/fa'
import { BsFileImage,BsNewspaper,BsSearch } from 'react-icons/bs'
import SearchSection from '../input'
import { Link,useNavigate } from "react-router-dom";

export function HomeHeader({category,setCategory}) {
    let whenHighlight = 'border-1 border-b text-sky-500 '

    return(
        <>
            <nav className={`transition-colors duration-500 container flex justify-end items-center text-center px-4 md:px-12 mx-auto bg-slate-900/75 border-b border-slate-500/75 sticky backdrop-blur duration-300 text-xs lg:text-sm`}>

                <button 
                onClick={()=>setCategory('search')}
                role={'button'} 
                className={`font-bold group flex items-center px-3 py-2 transition hover:text-sky-400 duration-200 ${category == 'search' && whenHighlight}`}
                >
                    <BsSearch className="mr-1 text-sm"/><span >Normal Search</span>
                </button>
                <button 
                onClick={()=>setCategory('image')}
                role={'button'} 
                className={`font-bold group flex items-center px-3 py-2 transition hover:text-sky-400 duration-200 ${category == 'image' && whenHighlight}`}
                >
                    <BsFileImage className="mr-1 text-sm"/><span >Image Search</span>
                </button>
                <button 
                onClick={()=>setCategory('news')}
                role={'button'} 
                className={`font-bold group flex items-center px-3 py-2 transition hover:text-sky-400 duration-200 ${category == 'news' && whenHighlight}`}
                >
                    <BsNewspaper className="mr-1 text-sm"/><span >News Search</span>
                </button>

            </nav>
            
        </>
    )
}

export function SearchResultHeader({category,defaultValue,setData,setIsLoading,setCategory,setValue}){

    return(
        <nav>
            <div className="container mx-auto md:flex py-3 items-center px-4 md:px-12">
                <div className="mb-3 w-screen md:w-auto md:mb-0 flex md:flex-none justify-center">
                    <Link to={'/'} className={'w-1/2 md:w-60'}>
                        <img src="../logo.png" alt="logo search engine" />
                    </Link>
                </div>
                <SearchSection width={'medium'} defaultValue={defaultValue} param={category} setData={setData} setIsLoading={setIsLoading} setValue={setValue}/>
            </div>
            <MiniHeader highlight={category} setCategory={setCategory}/>
        </nav>
    )
}

const MiniHeader = ({highlight,setCategory})=>{
    let whenHighlight = 'border-1 border-b text-sky-500 '

    return(
        <div className={`transition-colors duration-500 container flex justify-center md:justify-start md:pl-80 items-center text-center px-4 md:px-12 mx-auto bg-slate-900/75 border-b border-slate-500/75 sticky backdrop-blur duration-300`}>

            <button 
            onClick={()=>setCategory('search')}
            role={'button'} className={`font-bold group flex items-center text-xs lg:text-sm lg:leading-6 px-3 py-2 transition hover:text-sky-400 duration-200 ${highlight == 'search' && whenHighlight}`}>
                <BsSearch className="mr-1 text-sm"/><span >Search</span>
            </button>
            <button 
            onClick={()=>setCategory('image')}
            role={'button'} className={`font-bold group flex items-center text-xs lg:text-sm lg:leading-6 px-3 py-2 transition hover:text-sky-400 duration-200 ${highlight == 'image' && whenHighlight}`}>
                <BsFileImage className="mr-1 text-sm"/><span >Image</span>
            </button>
            <button  
            onClick={()=>setCategory('news')}
            role={'button'} className={`font-bold group flex items-center text-xs lg:text-sm lg:leading-6 px-3 py-2 transition hover:text-sky-400 duration-200 ${highlight == 'news' && whenHighlight}`}>
                <BsNewspaper className="mr-1 text-sm"/><span >News</span>
            </button>

        </div>
    )
}