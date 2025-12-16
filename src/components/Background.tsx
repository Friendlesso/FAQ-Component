import BgDesktop from '../assets/images/background-pattern-desktop.svg';
import BgMobile from '../assets/images/background-pattern-mobile.svg';

export function Background() {
  return(
    <div className='absolute top-0 left-0 -z-10'>
      <img className='w-screen sm:hidden' src={BgMobile} alt="Mobile Background pattern image" />
      <img className='w-screen hidden sm:block' src={BgDesktop} alt="Background pattern image" />
    </div>
  )
}