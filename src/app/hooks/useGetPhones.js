import { useState } from 'react'
import { failureState, initSate, loadingState, successState } from './fetch-states'

const END_POINT = '/api/phones/'

function useGetPhones () {
  const [state, setState] = useState(initSate)

  const get = () => {
    setState(loadingState)
    window.fetch(`${END_POINT}`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then((data) => {
        if (data?.data != null) {
          setState({
            ...successState,
            data: data?.data
          })
          return
        }
        setState(failureState)
      }).catch(e => {
        console.error(e)
        setState(failureState)
      })
  }

  return { ...state, get }
}

export { useGetPhones }
