import Blog from '../components/Blog/Blog'
import Booking from '../components/Booking/Booking'
import ChooseUs from '../components/Choose-Us/Choose-Us'
import Coverage from '../components/Coverage/Coverage'
import WeRepresent from '../components/We-Represent/We-Represent'
import Hero from '../components/Hero/Hero'
import OurTeam from '../components/Our-Team/Our-Team'

const Home = () => {
  return (
    <div>
      <Hero />
      <ChooseUs />
      <OurTeam />
      <WeRepresent />
      <Coverage />
      <Blog />
      <Booking />
    </div>
  )
}

export default Home
