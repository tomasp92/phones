import { useGetPhones } from './hooks/useGetPhones'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React, { useEffect } from 'react'
import store from './store/store'
import { Provider } from 'react-redux'

import Nav from './components/Nav'
import ItemDetailContainer from './pages/PhoneDetailComponent'
import PhoneListContainer from './pages/PhoneListContainer'
import LoadingIndeterminate from './components/LoadingIndeterminate'

const App = () => {
  const { error, data, loading, get } = useGetPhones()
  
  useEffect(() => {
    get()
  }, [])
  if (loading) {
    return <LoadingIndeterminate />
  }
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <div className='body'>
          <div className='content'>
            <Switch>
              <Route path='/phone/:id' component={ItemDetailContainer} items={data?.data} />
              <Route exact path='/' component={PhoneListContainer} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
