import React from 'react'
import './Menu.css';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import breakfastImg from '../utils/utils/img/breakfast.jpg'
import lunchImg from '../utils/utils/img/lunch.jpg'
import dinnerImg from '../utils/utils/img/dinner.jpg'
import dessertImg from '../utils/utils/img/dessert.jpg'

const breakfast = [
  {
    id: 1,
    name: 'Breakfast Item',
    description: 'Description of the item',
    price: '${price}'
  },{
    id: 2,
    name: 'Breakfast Item',
    description: 'Description of the item',
    price: '${price}'
  },{
    id: 3,
    name: 'Breakfast Item',
    description: 'Description of the item',
    price: '${price}'
  },
];

const lunch = [
  {
    id: 1,
    name: 'Lunch Item',
    description: 'Description of the item',
    price: '${price}'
  },{
    id: 2,
    name: 'Lunch Item',
    description: 'Description of the item',
    price: '${price}'
  },{
    id: 3,
    name: 'Lunch Item',
    description: 'Description of the item',
    price: '${price}'
  },
];

const dinner = [
  {
    id: 1,
    name: 'Dinner Item',
    description: 'Description of the item',
    price: '${price}'
  },{
    id: 2,
    name: 'Dinner Item',
    description: 'Description of the item',
    price: '${price}'
  },{
    id: 3,
    name: 'Dinner Item',
    description: 'Description of the item',
    price: '${price}'
  },
];

const dessert = [
  {
    id: 1,
    name: 'Dessert Item',
    description: 'Description of the item',
    price: '${price}'
  },{
    id: 2,
    name: 'Dessert Item',
    description: 'Description of the item',
    price: '${price}'
  },{
    id: 3,
    name: 'Dessert Item',
    description: 'Description of the item',
    price: '${price}'
  },
];

export default function Menu() {
  return (
    <div className='menu-page'>
      <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
        <h1 className='text-light text-uppercase'>Menu</h1>
        </div>
      </header>

      {/* breakfast */}
      <div className='breakfast my-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-6 text-uppercase fw-bold text-success'>Breakfast</h2>
          <div className='row flex-column-reverse flex-lg-row'>
            <div className='col-lg-6 d-flex justify-content-center'>
              <img src={breakfastImg} className='img-fluid w-75 mt-4 mt-lg-0' alt='' />
            </div>
            <div className='col-lg-6 d-flex flex-column justify-content-around'>
              { breakfast.map((breakfast) => (
                <div key={breakfast.id}>
                  <Card className='border-1 shadow'>
                    <CardBody>
                      <CardTitle className='text-center fs-3'> {breakfast.name} </CardTitle>
                      <CardText className='text-center fs-5'> {breakfast.description} </CardText>
                      <CardText className='text-center fs-3 fw-bold text-warning'> {breakfast.price} </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lunch */}
      <div className='lunch bg-dark text-light py-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-6 text-uppercase fw-bold text-success'>Lunch</h2>
          <div className='row'>
            
            <div className='col-lg-6 d-flex flex-column justify-content-around'>
              { lunch.map((lunch) => (
                <div key={lunch.id}>
                  <Card className='border-1 shadow bg-dark text-light'>
                    <CardBody>
                      <CardTitle className='text-center fs-3'> {lunch.name} </CardTitle>
                      <CardText className='text-center fs-5'> {lunch.description} </CardText>
                      <CardText className='text-center fs-3 fw-bold text-warning'> {lunch.price} </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
            <div className='col-lg-6 d-flex justify-content-center'>
              <img src={lunchImg} className='img-fluid w-75 mt-4 mt-lg-0' alt='' />
            </div>
          </div>
        </div>
      </div>

      {/* Dinner */}
      <div className='breakfast my-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-6 text-uppercase fw-bold text-success'>Dinner</h2>
          <div className='row flex-column-reverse flex-lg-row'>
            <div className='col-lg-6 d-flex justify-content-center'>
              <img src={dinnerImg} className='img-fluid w-75 mt-4 mt-lg-0' alt='' />
            </div>
            <div className='col-lg-6 d-flex flex-column justify-content-around'>
              { dinner.map((dinner) => (
                <div key={dinner.id}>
                  <Card className='border-1 shadow'>
                    <CardBody>
                      <CardTitle className='text-center fs-3'> {dinner.name} </CardTitle>
                      <CardText className='text-center fs-5'> {dinner.description} </CardText>
                      <CardText className='text-center fs-3 fw-bold text-warning'> {dinner.price} </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* dessert */}
      <div className='lunch bg-dark text-light py-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-6 text-uppercase fw-bold text-success'>Desserts</h2>
          <div className='row'>
            
            <div className='col-lg-6 d-flex flex-column justify-content-around'>
              { dessert.map((dessert) => (
                <div key={dessert.id}>
                  <Card className='border-1 shadow bg-dark text-light'>
                    <CardBody>
                      <CardTitle className='text-center fs-3'> {dessert.name} </CardTitle>
                      <CardText className='text-center fs-5'> {dessert.description} </CardText>
                      <CardText className='text-center fs-3 fw-bold text-warning'> {dessert.price} </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
            <div className='col-lg-6 d-flex justify-content-center'>
              <img src={dessertImg} className='img-fluid w-75 mt-4 mt-lg-0' alt='' />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}