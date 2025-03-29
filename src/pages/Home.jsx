import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../context/CartContext';

const Home = () => {
  let ctx = useContext(CartContext);
  console.log(ctx) //{arr, addItem}

  let searchValue = ctx.searchValue;
  console.log(searchValue)

  const [allData, setallData] = useState([]);
  console.log(allData) //[] , [{},{},{}...30] 194

  let getAllData = async()=>{
    let res = await fetch('https://dummyjson.com/products?limit=0');
    let data = await res.json();
  
    setallData(data.products)
  }

  // paginationPart starts here **********************

    const [currentPage, setcurrentPage] = useState(1);
    let itemPerPage = 8;
    let lastIndex = itemPerPage * currentPage ;
    let firstIndex = lastIndex - itemPerPage;

    let filteredArr = allData.filter((ele)=> ele.title.toLowerCase().includes(searchValue.toLowerCase()) || ele.category.toLowerCase().includes(searchValue.toLowerCase()))
    console.log(filteredArr)

    let slicedArr = filteredArr.slice(firstIndex,lastIndex);
    console.log(slicedArr)

    let totalBtn = Math.ceil(filteredArr.length/itemPerPage)
    console.log(totalBtn) //25

    // let btnArr = [];

    // // [1,2,3,4,]
    // for(let i=1; i<=totalBtn; i ++){
    //   // console.log(i)
    //   btnArr.push(i)
    // }

    // console.log(btnArr)


  

 useEffect(()=>{
  getAllData()
 },[])


 const handleNext = ()=>{
  //      25 <25 --> false
    if(currentPage < totalBtn){

      setcurrentPage(currentPage+1)
    }
 }

 const handlePrev= ()=>{
  if(currentPage >1){

    setcurrentPage(currentPage-1)
  }
 }

  return (
   <div>
     <div className='grid lg:grid-cols-4 gap-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
      {
        slicedArr.map((ele,i)=>{
          return <div className='flex flex-col items-center border-[0.5px] rounded-lg gap-3 p-3 border-gray-50'>
            <img src={ele.thumbnail} alt="" />
            <p>{ele.title}</p>
            <button onClick={()=>ctx.addItem(ele)} className='bg-green-500 w-full px-4 py-2 rounded'>Add to cart</button>
          </div>
        })
      }

      
    </div>

    <div className='flex gap-1 justify-center my-4'>
        {/* {
          btnArr.map((num,i)=>{
            return <button>{num}</button>
          })
        } */}
        

{/*    ['0', '0', '0','0',,'0',----25] */}
<button onClick={handlePrev} className='bg-blue-500 rounded-md   px-3 py-2'>Prev</button>
        {
          Array(totalBtn).fill('0').map((num,i)=>{
            return <button onClick={()=>setcurrentPage(i+1)} className={`${currentPage===i+1 ? 'bg-green-500':'bg-gray-500'} rounded-md w-[40px]  p-1`}>{i+1}</button>
          })
        }
        <button onClick={handleNext} className='bg-blue-500 rounded-md   px-3 py-2'>Next</button>
    </div>
   </div>
  )
}

export default Home
