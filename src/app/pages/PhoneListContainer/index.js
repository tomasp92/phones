/* import { useParams } from 'react-router-dom'
import ItemList from './../../components/ItemList'
import Loading from './../../components/Loading'*/
import { redirect } from 'express/lib/response'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const PhoneListContainer = ({ phones, seeMoreDetails }) => {
  /* const params = useParams()

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      let query
      const collectionProductos = firestore.collection('productos')
      if(params.id){
          query = collectionProductos.where('categoria', '==', parseInt(params.id)).get()
      } else {
          query = collectionProductos.get()
      }
      query.then((resultados)=>{
          const resultadoParseado = []
          resultados.forEach((documento)=>{
              const id = documento.id
              const data = documento.data()
              const dataFinal = {id, ...data}
              resultadoParseado.push(dataFinal)
          })
          setProductos(resultadoParseado)
          setLoading(false)
      })
  }, [params]); */
  return (
    <>
      {
        phones && phones?.map(phone => (
          <div key={phone.id} className='row'>
            <div className='col s12 m12'>
              <div className='card flex-container-row'>
                <div className='card-image'>
                  <img className='item-image' src={phone.image} />
                </div>
                <div className='card-content'>
                  <span className='card-title'>{phone.title}</span>
                  PRICE: {phone.price} US$
                  <div className='card-action'>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
      { /* loading ? 
        <Loading /> 
        :
        <div className='PhoneListContainer">
          <ItemList params={params} productos={productos}/>
        </div> */
      }
    </>
  )
}

const mapStateToProps = state => ({
  phones: state.phones
})

const mapDispatchToProps = dispatch => ({
  seeMoreDetails (phone) {
    dispatch({
      type: 'SEE_MORE_DETAILS',
      phone
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PhoneListContainer)