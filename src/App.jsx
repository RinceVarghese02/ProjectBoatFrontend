import React from 'react'
import Navbar from './components/Navbar'
import TopOffers from './components/TopOffers'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cards from './components/Cards'
import CardsDetails from './components/CardsDetails'
import BoatPersonalization from './components/BoatPersonalization'
import ViewAllData from './adminpanel/ViewAllData'
import ProductForm from './adminpanel/ProductForm'
import CategoriesForm from './adminpanel/CategoriesForm'
import EditCategoriesForm from './adminpanel/EditCategoriesForm'
import PageNotFound from './PageNotFound'
import EditProductsForm from './adminpanel/EditProductsForm'

const App = () => {
  return (
    <>
    {/* <Navbar/>
    <TopOffers/> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route index element={<TopOffers/>}/>
        <Route path='/product' element={<CardsDetails/>}/>
        <Route path='/BoatPersonalization' element={<BoatPersonalization/>} />
        <Route path='/ProductForm' element={<ProductForm/>} />
        <Route path='/CategoriesForm' element={<CategoriesForm/>} />
        <Route path='/EditCategoriesForm' element={<EditCategoriesForm/>} />
        <Route path='/EditProductsForm' element={<EditProductsForm/>} />
        <Route path='/ViewAllData' element={<ViewAllData/>} />
        <Route path='/*' element={<PageNotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App