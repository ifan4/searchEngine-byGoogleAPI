
export default function index({children}) {
    
    return(
        <>
            <button className="py-2 px-3 rounded-md border hover:bg-slate-50 hover:text-slate-900">
                {children}
            </button>
        </>
    )
}