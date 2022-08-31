import { useEffect, useState } from "react"
import { HomeHeader } from "../component/header"
import SearchSection from '../component/input'
import { request } from '../utils/axios-utils';

export default function Home() {
    // categories: normal, image, and news
    const [category, setCategory] = useState('search')

    return(
        <div className="h-screen overflow-hidden">
            <HomeHeader category={category} setCategory={setCategory}/>
            <div className="container px-2 mx-auto">
                <div className="flex justify-center mt-20 md:mt-40">
                    <img className="w-60 md:w-auto" src="logo.png" alt="" srcset="" />
                </div>
              
                <SearchSection width={'large'} param={category} ></SearchSection>


              
            </div>
        </div>
    )
}