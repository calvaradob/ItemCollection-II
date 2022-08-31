import React, { Component } from 'react';
import { Container, Grid, Header } from 'semantic-ui-react'
import Menu from '../Menu'
import ProductList from '../ProductList'
import CartList from '../CartList'
import Order from '../Order'
import style from './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openOrder: false,
      total: 0,
      sum: 0,
      products: [
        {
          id: 1,
          name: 'Polera ciclismo mujer',
          picture: 'https://http2.mlstatic.com/D_NQ_NP_983789-MLC50171421749_062022-V.jpg',
          price: 12990,
          datails: 'Hemos concebido esta tricota para que puedas iniciarte cómodamente en el ciclismo de carretera con tiempo cálido',
          marca: 'Trek',
          status: 5,
        },
        {
          id: 2,
          name: 'Tricota Con 4 Bolsillos para Mtb Ruta Malliot Polera tallas S, M, L   ',
          picture: 'https://i.pinimg.com/236x/0a/de/6c/0ade6c08f13cdb3622df54eb15aab486--womens-cycling-jersey-cycling-jerseys.jpg',
          price: 33938,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Trek',
          status: 6,
        },
        {
          id: 3,
          name: 'Diseño exclusivo',
          picture: 'https://i.pinimg.com/236x/60/09/28/600928d154f2a29a84a56421e65f8608--cycling-clothes-cycling-wear.jpg',
          price: 18999,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Oxford',
          status: 2,
        },
        {
          id: 4,
          name: 'Diseño exclusivo para mujer con short tipo jardinera ',
          picture: 'https://i.linio.com/p/55438a2f85d3859bdc6e38ff20e79e10-catalog.jpg',
          price: 21000,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Oxford',
          status: 6,
        },
        {
          id: 5,
          name: 'Polera Ciclismo Rosada con diseño para mujer',
          picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDcS_0P-biRrQ7p5N_bCWy9_OK2wvWibF8T7zIPPtNA535OAau-uMw2T45nO65UesBMXU&usqp=CAU',
          price: 32800,
          marca: 'Sparta',
          status: 10,
        },
        {
          id: 6,
          name: 'Polera Olympus con diseño rostro de mujer cabello largo ',
          picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP4qXR5Gnu-gVCjsNyDjRxCqwfnjhpTbvP1Sf1-EJ9mhoik2TobIGPOKOKK263ZRQ3xho&usqp=CAU',
          price: 22733,
          marca: 'Sparta',
          status: 14,
        },
        {
          id: 7,
          name: 'Polera de ciclismo de mujer con diseño de boca',
          picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrgdczGxaUFYtlNMbQH9QDUS9mcBIkYCqJqj9yPk2t6jtFxXytdA-uqO89QKscjEpgt8s&usqp=CAU',
          price: 37290,
          marca: 'Strava',
          status: 12,
        },
        {
          id: 8,
          name: 'Polera Rosada para niña con diseño exclusivo y estampado ',
          picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVYMI1wA87d5CNCFmjhBHyHLNp0yHBeQA7DuI5Kb6opxJxykQTDnlcUvEQ_PirbppCktg&usqp=CAU',
          price: 25023,
          marca: 'Strava',
          status: 14,
        },
        {
          id: 9,
          name: 'Polera manga larga de ciclismo para mujer ',
          picture: 'https://i.pinimg.com/originals/da/11/d3/da11d340975acd238476dd36cd177c17.jpg',
          price: 50399,
          marca: 'Strava',
          status: 23,
        },
        {
          id: 10,
          name: 'Polera color rojo vino tinto',
          picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEyOmFxVvV4IEXYVY11aqBDP8ZeykFygg7PRqFxmoiuisYiEkQ9eIx3FyfU1QchQBUJsI&usqp=CAU',
          price: 31262,
          marca: 'Sparta',
          status: 14,
        },
        {
          id: 11,
          name: 'Polera ciclimo unisex Olympus ',
          picture: 'https://i.pinimg.com/236x/bc/85/fe/bc85fe716d7a4be250b02d25a0e0e42d.jpg',
          price: 18688,
          marca: 'Oxford',
          status: 3,
        },
        {
          id: 12,
          name: 'Diseño unisex con bandera britanica ',
          picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd2_wiSm038izCS0rLuTOz9VWiRvPnrhzEmP4o7bzxD5cpS4baX5Gp_rNDPn_6yd_U9Ig&usqp=CAU',
          price: 32699,
          marca: 'Bianchi',
          status: 10,
        }
      ],
      cart: [],
    }

    this.handleSaveProduct = this.handleSaveProduct.bind(this)
    this.handlerAddProduct = this.handlerAddProduct.bind(this)
    this.handlerRemoveProduct = this.handlerRemoveProduct.bind(this)
    this.handlerOpenOrder = this.handlerOpenOrder.bind(this)
    this.handlerClearCart = this.handlerClearCart.bind(this)
  }

  handlerClearCart() {
    this.setState({
      cart: [],
      sum: 0,
      total: 0
    });
  }

  sumProducts(array) {
    var total = 0;
    array.forEach(product => total += product.order)
    this.setState({total: total})
  }

  sumTotal(array) {
    var sum = 0
    array.forEach(product => sum += product.total)
    this.setState({sum: sum})
  }

  handlerAddProduct(indexCart, indexProduct){
    var statusCopy = Object.assign({}, this.state);
    if (statusCopy.products[indexProduct].status !== 0) {
      statusCopy.cart[indexCart].total += statusCopy.cart[indexCart].price
      statusCopy.cart[indexCart].order += 1
      statusCopy.products[indexProduct].status -= 1
      this.setState(statusCopy)
      this.sumProducts(statusCopy.cart)
      this.sumTotal(statusCopy.cart)
    } else {
      alert('Producto no existe')
    }
  }

  handlerRemoveProduct(productId) {
    let product = this.state.products.find(p => p.id === productId);
    let indexProduct = this.state.products.findIndex(x => x.id === product.id)
    let cart = this.state.cart.find(p => p.id === productId)
    let indexCart = this.state.cart.findIndex(x => x.id === cart.id)

    var statusCopy = Object.assign({}, this.state);
    if(statusCopy.cart[indexCart].total === statusCopy.cart[indexCart].price ){
      indexCart !== -1 && statusCopy.cart.splice( indexCart, 1 );
      this.setState(statusCopy)
      alert('El producto fue eliminado del carrito de compras')
    } else {
      statusCopy.cart[indexCart].total -= statusCopy.cart[indexCart].price
      statusCopy.products[indexProduct].status += 1
      statusCopy.cart[indexCart].order -= 1
      statusCopy.total -= 1
      statusCopy.sum -= statusCopy.cart[indexCart].price
      this.setState(statusCopy)
    }
  }

  handleSaveProduct(productId) {
    let product = this.state.products.find(p => p.id === productId);
    let indexProduct = this.state.products.findIndex(x => x.id === product.id)

    var productCart = {
      id: product.id,
      name: product.name,
      img: product.picture,
      price: product.price,
      order: 1,
      total: product.price
    }

    var exist = this.state.cart.find(p => p.id === productId)
    if (undefined !== exist && exist !== null) {
      let indexCart = this.state.cart.findIndex(x => x.id === exist.id)
      this.handlerAddProduct(indexCart, indexProduct)
    }else{
      var statusCopy = Object.assign({}, this.state);
      statusCopy.products[indexProduct].status -= 1
      this.sumProducts(statusCopy.cart)
      this.sumTotal(statusCopy.cart)
      this.setState({
        cart: this.state.cart.concat([productCart]),
        statusCopy
      })
    }
  }

  handlerOpenOrder(event) {
    event.preventDefault()
    this.setState({ openOrder: true })
  }

  renderOpenOrder() {
    if (this.state.openOrder) {
      return (
        <Order
          sum={this.state.sum}
          onClearCart={this.handlerClearCart}
        />
      )
    }
  }

  render() {
    return (
      <Container className={style.root}>
        <Menu/>
        <Grid>
          <Grid.Column width={12}>
            <ProductList
              products={this.state.products}
              onSaveProduct={this.handleSaveProduct}
              onIncrementProduct={this.handleSaveProduct}
              onRemoveProduct={this.handlerRemoveProduct}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <CartList
              items={this.state.cart}
              total={this.state.total}
              onOpenOrder={this.handlerOpenOrder}
            />
            {this.renderOpenOrder()}
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default App;
