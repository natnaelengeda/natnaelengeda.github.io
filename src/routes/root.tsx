import { Outlet } from 'react-router-dom';

import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import ParticlesComponent from '../utils/Particles';

export default function Root() {
  return (
    <>
      <Header />
      <main className='w-full min-h-screen py-20 '>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
