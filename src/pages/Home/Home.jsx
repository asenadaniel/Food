import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import DiscoverMenu from '../../components/DiscoverMenu/DiscoverMenu'
import Food from '../../components/Food/Food'
import Footer from '../../components/Footer/Footer'
import DownloadApp from '../../DownloadApp/DownloadApp'

function Home() {

  const [category, setCategory] = useState('All')

  return (
    <div>
      <Header />
      <DiscoverMenu
        category={category}
        setCategory={setCategory}
      />
      <Food
        category={category}
      />
      <DownloadApp />

    </div>
  )
}

export default Home
