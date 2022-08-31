import { SearchResultHeader } from '../../component/header'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loading from '../../component/loading';
import {useNavigate} from 'react-router-dom';

export default function SearchResult() {
    let { param,value } = useParams()
    const [data,setData] = useState()
    const [valueState, setValue] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const [category, setCategory] = useState(param)


    const defaultOptions = {
        significantDigits: 2,
        thousandsSeparator: ',',
        decimalSeparator: '.',
        symbol: '$'
      }
    const currencyFormatter = (value, options) => {
        if (typeof value !== 'number') value = 0.0
        options = { ...defaultOptions, ...options }
        value = value.toFixed(options.significantDigits)
      
        const [currency, decimal] = value.split('.')
        return `${currency.replace(
          /\B(?=(\d{3})+(?!\d))/g,
          options.thousandsSeparator
        )}${options.decimalSeparator}${decimal}`
      }



   

    return(
        <div>
            <SearchResultHeader category={category} setCategory={setCategory} defaultValue={value} setData={setData} setIsLoading={setIsLoading} setValue={setValue}/>
            <div className={`container px-4 ${category != 'image' ? 'mx-auto md:pl-80': 'mx-auto'} py-2`}>
                {
                    isLoading &&
                    <Loading/>
                }
                {
                    category === 'search' && !isLoading && data && data.results &&
                    <div className='text-xs font-thin'>
                        About {currencyFormatter(data.total)} results 
                    </div>
                }

                {
                    category === 'search' && !isLoading && data && data.results &&
                    data.results.map((item)=>{
                        console.log('masuk ke search');
                        let domain = ''
                        if (item.cite){
                            domain = item.cite.domain 
                        }
                        return(
                            <SearchResults domain={domain} link={item.link} title={item.title} description={item.description}/>
                        )
                    })
                }
                
                {
                    category === 'image' &&  !isLoading && data && data.image_results &&  
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 items-center'>
                        {data.image_results.map((item)=>{
                            console.log(item);
                            return(
                                <ImageResults src={item.image.src} title={item.link.title} link={item.link.href}/>
                            )
                        })}
            
                    </div>
                }
                {
                    category === 'news' &&  !isLoading && data && data.entries &&  
                    data.entries.map((item)=>{
                        return(
                            <NewsResults source={item.source.title} link={item.link} title={item.title} description={item.summary}/>
                        )
                    })
                }
                
                


                {
                    category === 'search' && !isLoading && data && data.answers && data.answers.length > 0 &&
                    <div className='md:w-1/2 py-3'>
                        <h3 className='md:text-xl font-bold'>People also ask</h3>
                        <div className='grid grid-cols-1 divide-y'>
                            {
                                data.answers.map((item,key)=>{
                                    return(
                                        <a 
                                        key={key} 
                                        role={'button'} 
                                        className='hover:text-sky-500 py-2'
                                        href={item}
                                        >{item}</a>
                                    )
                                })
                            }
                        </div>
                    </div>
                }

                
            </div>
        </div>
    )
}

const SearchResults = ({domain,link,title,description})=>{
    return(
        <div className='md:w-1/2 py-3'>
            <a className='text-sm block' href={link} target={'_blank'}>{domain}</a>
            <a className='md:text-xl font-bold hover:border-2 hover:border-b-sky-500' href={link} target={'_blank'}>
                {title}
            </a>
            <p className='text-xs md:text-sm'>{description}</p>
        </div>
    )
}

const ImageResults = ({src, link, title, description})=>{
    return(
        <a href={link} target={'_blank'}>
            <img className='mx-auto' src={src} />
            <h3 className='text-center text-xs md:text-sm'>{title}</h3>
        </a>
    )
}

const NewsResults = ({source,link,title,description})=>{
    return(
        <div className='md:w-1/2 py-3'>
            <a className='text-sm block' href={link} target={'_blank'}>{source}</a>
            <a className='md:text-xl font-bold hover:border-2 hover:border-b-sky-500' href={link} target={'_blank'}>
                {title}
            </a>
            <p className='text-xs md:text-sm' dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
    )
}