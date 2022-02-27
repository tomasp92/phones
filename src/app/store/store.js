import { createStore } from 'redux'
import { useGetPhones } from '../hooks/useGetPhones'

const intialState = {
  phones: [
    {
      id: '1',
      title: 'Cellphone Samsung Galaxy A02 Black 64GB',
      description: '<p>6.5" Infinity-V screen with HD+ technology. View your content with clarity and quality.</p><p>Capture your best moments with the 13 MP dual camera.</p><p>Battery with greater durability.</p>',
      brand: 'Motorola',
      color: 'Black',
      price: '450',
      image: 'phones-photos/Cellphone-Samsung-Galaxy-A02-Black-64GB.jpg'
    },
    {
      id: '2',
      title: 'Cellphone Motorola E20 32GB Black',
      description: '<p>High: 16.48.</p><p>Width: 0.84.</p><p>Black.</p><p>RAM memory: 2 GB.</p><p>Bluetooth: YES.</p><p>Main camera: 13 + 2MP.</p>',
      brand: 'Motorola',
      color: 'Black',
      price: '400',
      image: 'phones-photos/Cellphone-Motorola-E20-32GB-Black.jpg'
    },
    {
      id: '3',
      title: 'Cellphone Motorola E20 32GB Grey',
      description: '<p>Android operating system</p><p>Screen size 6.5"</p><p>4G connectivity</p><p>Internal memory 32GB</p><p>4000 mAh battery</p><p>Water resistant No</p>',
      brand: 'Motorola',
      color: 'Grey',
      price: '410',
      image: 'phones-photos/Cellphone-Motorola-E20-32GB-Grey.jpg'
    },
    {
      id: '4',
      title: 'Cellphone Samsung Galaxy A12 64 GB Blue',
      description: '<p>We present the Samsung Galaxy A12 with an Octa-Core processor (2.3GHz, 1.8GHz) to keep you up to date with all the latest applications and games. Discover all the possibilities for your photos, both day and night, with the 48+5+2+2 Mp camera. 64 GB internal memory and expandable with a MicroSd up to 1TB</p>',
      brand: 'Samsung',
      color: 'Blue',
      price: '459',
      image: 'phones-photos/Cellphone-Samsung-Galaxy-A12-64-GB-Blue.jpg'
    },
    {
      id: '5',
      title: 'Cellphone Motorola G31 128GB Violet Meteoro',
      description: '<p>Celular de 6.43" OLED FHD+ (1080 x 2400, 409ppi, HiD, 60 Hz). </p><p>Procesador MediaTek Helio G85 Octa Core (2.0 GHz). </p><p>Sistema operativo Android 11. </p><p>Camara Principal: 50MP (74.3) </p><p>F1.8 Ultra Gran Angular y profundidad: 8MP</p>',
      brand: 'Motorola',
      color: 'Violet',
      price: '470',
      image: 'phones-photos/Cellphone-Motorola-G31-128GB-Violet-Meteoro.jpg'
    },
    {
      id: '6',
      title: 'iPhone 13 256GB Red',
      description: '<p>ultrafast 5G</p><p>6.1″ full screen OLED display</p><p>A15 bionic chip</p><p>256GB capacity</p><p>Advanced dual camera system</p><p>Up to 19 hours of video playback</p><p>Compatible with MagSafe accessories</p><p>Unlocked (unlocked)</p>',
      brand: 'Apple',
      color: 'Red',
      price: '600',
      image: 'phones-photos/iPhone-13-256GB-Red.jpg'
    },
    {
      id: '7',
      title: 'iPhone 13 Pro 512GB Graphite',
      description: '<p>ultrafast 5G</p><p>6.1″ full screen OLED display</p><p>A15 bionic chip</p><p>512GB capacity</p><p>Professional camera system</p><p>Up to 28 hours of video playback</p><p>Compatible with MagSafe accessories</p><p>Unlocked (unlocked)</p>',
      brand: 'Apple',
      color: 'Graphite',
      price: '799',
      image: 'phones-photos/iPhone-13-Pro-512GB-Graphite.jpg'
    },
    {
      id: '8',
      title: 'iPhone SE 128 GB White',
      description: '<p>iPhone SE unites the most powerful chip, the most popular iPhone size, and a more affordable price. Just what you were waiting for.</p>',
      brand: 'Apple',
      color: 'White',
      price: '681',
      image: 'phones-photos/iPhone-SE-128-GB-White.jpg'
    }
  ],
  showedPhone: {}
}

const reducer = (state = intialState, action) => {
  if (action.type === 'SEE_MORE') {
    return {
      ...state,
      showedPhone: state.phones.filter(phone => phone.id !== action.id)
    }
  }
  return state
}

export default createStore(reducer)
