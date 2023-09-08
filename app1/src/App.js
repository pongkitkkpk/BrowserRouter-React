import React, { useState } from 'react'
// import { Header,Content,Footer } from './func-components'
// import Calendar from './class-components'
// import Banner from './banner'
// import { Calculator2 } from './calculator'
// import { EventData2 } from './event-data'
// import RefsFunc from './refs-func'
// import RefsArray from './refs-array'
// import MessageBox from './state-func'
import { userContext } from './context'
import Header2 from './context-header2'
import Content2 from './context-content2'
// import Header from './context-header'
// import Content from './context-content'
function App() {
  let [user,setUser] = useState()
  return (
    <>
      {/* <Header/>
      <p><center><Calendar/></center></p>
      <Content/>
      <Calculator2/>
      <Footer/>
      <Banner/> 
      <EventData2/>
       <RefsFunc/> 
      <RefsArray/>
      <MessageBox/> */}
      {/* <userContext.Provider value={'Tom Jerry'}>
        <Header/>
        <Content/>
      </userContext.Provider> */}
      <userContext.Provider value={[user,setUser]}>
        <Header2/>
        <Content2/>
      </userContext.Provider> 
      
    </>
  )
}
export default App



