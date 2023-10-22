import React from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Craousal from '../components/Craousal'

export default function Home() {
	return (
		<div>
			<div><Navbar /></div>
			<div> <Craousal /></div>
				<div className='m-3'>
					<Card />
					<Card />
					<Card />
				</div>
			<div><Footer /></div>
		</div>
	)
}
