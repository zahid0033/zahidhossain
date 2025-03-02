import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

function FloatingContact() {
  return (
    <div className='contact fixed left-0 top-2/4 '>
      <div className='mx-auto  w-fit rounded-full py-2 bg-white shadow-lg shadow-blue-500/50'>
        <a
          href='https://github.com/zahid0033'
          className='transition ease-in-out delay-150 hover:-translate-y-1 scale-95 hover:scale-100 duration-500'
          target='blank'
        >
          <AiFillGithub size={'2rem'} />
        </a>
        <a href='https://www.linkedin.com/in/zahid-hossain-dev/' target='blank'>
          <AiFillLinkedin size={'2rem'} />
        </a>
      </div>
    </div>
  )
}

export default FloatingContact
