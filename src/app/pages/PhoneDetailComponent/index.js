/* import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loading from './../../components/Loading'
import ItemDetail from './../../components/ItemDetail'
import ToastMessege from './../../components/ToastMessege' */
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const PhoneDetailComponent = ({ phone }) => {
  /* const params = useParams()
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)
  const [toast, setToast] = useState(false)
  const [toastText, setToastText] = useState('')

  const getItems = () => {
    return firestore.collection('productos').doc(`${params.id}`).get()
  }

  useEffect(()=>{
    const items = getItems()
    items.then((documento)=>{
      if(!documento.exists){
        setToastText(`El producto con id:${params.id} no existe`)
        setToast(true)
      }
      const id = documento.id
      const data = documento.data()
      const producto = {id, ...data}
      setItem(producto)
      setLoading(false)
    })
    items.catch (()=>{
      setToastText('No se encontró el producto solicitado')
      setToast(true)
    })
  },[params]) */
  
  return (
    <div>
      hola señora
      {/* {toast ? 
        <div>
          <ToastMessege setToast={setToast} title='Hubo un error' text={toastText} />
          <div>
            <Link to='/'>
              <Button variant="primary" type="submit">
                Volver al Menu principal
              </Button>
            </Link>
          </div>
        </div> 
        : 
        loading? <Loading /> : <ItemDetail item={item}/>} */}
    </div>
  )
}
export default PhoneDetailComponent
/* const mapStateToProps = state => ({
  phone: state.showedPhone
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(PhoneDetailComponent)
 */