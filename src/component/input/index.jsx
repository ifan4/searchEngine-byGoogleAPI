import Button from '../button'
import { FaSearch } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { request } from '../../utils/axios-utils'
import { useNavigate } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';

// create your classname custom style with 'additionalClass' parameter

// choose one that suitable width for your component pls,
// there are: large and medium

export default function Index({width,param,setData,defaultValue,setIsLoading,setValue}) {
    // let widthSize, additionalClassname
    const [widthSize, setWidthSize] = useState('')
    const [additionalClassName, setAdditionalClassName] = useState('')
    const [searchValue, setSearchValue] = useState('')

    let navigate = useNavigate()



    useEffect(()=>{
        getSize()
        if (defaultValue && param){
            setSearchValue(defaultValue)
            automatedSearch()
        }
        
    },[])

    useEffect(()=>{
        console.log('Category updated');
        console.log(param);
        if (defaultValue && param){
            setSearchValue(defaultValue)
            automatedSearch()
        }
    },[param])

    const getSize = ()=>{
        switch (width) {
            case 'large':
                setWidthSize('md:w-1/2')
                setAdditionalClassName('justify-center mt-5 md:mt-14')
                break;
            case 'medium':
                setWidthSize('md:justify-left w-screen md:w-4/5')
                setAdditionalClassName('md:ml-9 justify-items-center md:justify-items-left')
                break;
        
            default:
                break;
        }
    }

    const onSubmitHandler = (e)=>{
        e.preventDefault()
        if(!searchValue) return 0
        switch (width) {
            case 'medium':
                goSearch()
                break;
            case 'large':
                choosePage()
                break;
        
            default:
                break;
        }
    }

    const automatedSearch = async()=>{
        setIsLoading(true)
        try {
            const res = await request({
                url: `/${param}/q=${defaultValue}`
            })

            setData(res.data)
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false)
    }

    const goSearch = async()=>{
        
        setIsLoading(true)
        if (searchValue.length == 0) return 0
        try {
            const res = await request({
                url: `/${param}/q=${searchValue}`
            })
            setData(res.data)
            console.log(res.data);
        } catch (error) {
            
        }
        setIsLoading(false)
    }

    const choosePage = async()=>{
        console.log('masuk large');
        switch (param) {
            case 'search':
                navigate(`/search/${searchValue}`)
                break;
            case 'image':
                navigate(`/image/${searchValue}`)
                break;
            case 'news':
                navigate(`/news/${searchValue}`)
                break;
        
            default:
                break;
        }
    }
    
    return(
   
        <form className={`flex ${additionalClassName} w-screen`} onSubmit={onSubmitHandler}>
            <input type="text" className={`text-xl ${widthSize} px-3 py-2 bg-slate-800 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 hover:bg-slate-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 mr-2`}
            value={searchValue}
            onChange={(e)=>{
                setSearchValue(e.target.value)
                setValue(e.target.value)
            }}
            />
            <Button><FaSearch/></Button>

        </form>
     
    )
}