// import React, { useState,useEffect }from 'react'
// import '../styles/SearchBar.css'

// const SearchBar = () => {
//     let [search,setSearch]=useState("")
//     let [results,setResults]=useState([])
//     let [show,setShow]=useState(false)
//     async function getData(){
//         let res=await fetch('https://dummyjson.com/recipes/search?q='+ search)
//         let data=await res.json()
//         setResults(data.recipes)
//         if (data.recipes.length > 0) {
//     setShow(true)
// } else {
//     setShow(false)
// }
//     }
//     // useEffect(() => {

//     //     // Wait for 500ms
//     //     let timer = setTimeout(() => {
//     //         if (search.trim() !== "") {
//     //             getData()
//     //         } else {
//     //             setResults([])
//     //             setShow(false)
//     //         }
//     //     },300)

//     //     // Clear previous timer when user types again
//     //     return () => {
//     //         clearTimeout(timer)
//     //     }

//     // }, [search])
//     useEffect(() => {

//     setShow(false)

//     let timer = setTimeout(() => {

//         if (search.trim() !== "") {
//             getData()
//         } else {
//             setResults([])
//             setShow(false)
//         }

//     }, 300)

//     return () => {
//         clearTimeout(timer)
//     }

// }, [search])

//     console.log(results)
//   return (
//     <>
//     <div className='searchContainer'>
//         <h1 style={{textAlign:"center"}}>search</h1>
//       <input className='input'
//       type='text'
//       value={search}
//       onChange={(e)=>setSearch(e.target.value)}
//       onFocus={() => setShow(true)}
//       onBlur={() => setShow(false)}></input>
//     </div><br/>
// {show && results.length > 0 && (
//     <div className='c-container'>
//         {results.map((res1) => (
//             <div key={res1.id}>
//                 {res1.name}
//             </div>
//         ))}
//     </div>
// )}
//     </>
//   )
// }

// export default SearchBar



import React, { useState, useEffect } from 'react'
import '../styles/SearchBar.css'
const SearchBar = () => {
    let [search, setSearch] = useState("")
    let [results, setResults] = useState([])
    let [show, setShow] = useState(false)
    async function getData() {
        let res = await fetch('https://dummyjson.com/recipes/search?q=' + search)
        let data = await res.json()
        setResults(data.recipes)
        if (data.recipes.length > 0) {
            setShow(true)
        } else {
            setShow(false)
        }
    }
    useEffect(() => {
        setShow(false)
        let timer = setTimeout(() => {
            if (search.trim() !== "") {
                getData()
            } else {
                setResults([])
                setShow(false)
            }
        }, 600)
        return () => {
            clearTimeout(timer)
        }
    }, [search])
    return (
        <div className="page">
            <div className="searchContainer">
                <h1>Search Recipes</h1>
                <p className="subtitle">Find your favorite recipes</p>
                <div className="searchBox">
                    <span className="searchIcon">⌕</span>
                    <input
                        className="input"
                        type="text"
                        value={search}
                        placeholder="Search for a recipe..."
                        onChange={(e) => setSearch(e.target.value)}/>
                </div>
                {show && results.length > 0 && (
                    <div className="c-container">
                        {results.map((res1) => (
                            <div
                                className="result"
                                key={res1.id}
                            >
                                {res1.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
export default SearchBar
