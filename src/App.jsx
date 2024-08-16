import logo from './bolt.png'
import './App.css'

function App() {


  return (
    <>
      <div className='flex border-b border-b-[#C04CFD]/50 drop-shadow-sm shadow bg-[#F1F7ED] justify-between'>
        <div>
          <img src={logo} className='h-12 m-3' alt="" />
        </div>
        <div>
          <button className='py-2 px-5 hover:bg-[#522BFF] transition-all text-[#2D0320] text-lg rounded-full border-[#5E2BFF] font-semibold m-3 border-[3px]'>Get Started</button>
        </div>
      </div>
      <div className='bg-[#F1F7ED] h-[87vh]'>
        <div className='text-center pt-12 mx-auto md:px-72 px-3'>
          <h3 className='text-5xl p-2 font-semibold text-[#522BFF]'>Write. Share. Connect <br /> <span className='text-[#2D0320]'>Unleash Your Voice</span></h3>
          <p className='pt-2 pb-5'>Welcome to The Public Pen, where every story finds its stage and every voice resonates. Whether you’re passionate about sharing your thoughts, exploring diverse perspectives, or simply connecting with a vibrant community, you’ve found your new home. Dive in and make your mark today!</p>
        </div>
        <button className='bg-[#422BFF] mx-3 md:mx-[25rem] p-3 rounded-full font-semibold hover:bg-[#110B11] transition-all hover:text-[#522BFF] shadow text-[#CO4CFD] text-center px-40'>Get Started</button>
      <div className='grid md:grid-cols-3 m-9 bg-[#F1F7ED]'>
        <div className='shadow-xl hover:-translate-y-7 transition-all hover:scale-105 bg-[#5e2bff]/30 border border-[#5B2EFF]/50 rounded-lg p-3 m-3'>
          <h3 className='text-[#2D0320] py-2 text-3xl font-semibold'>Contribute and Collaborate.</h3>
          <p className='pt-2 pb-4 text-[17px]'>Collaborate on projects, co-author articles, or start group discussions. The Public Pen fosters collaboration and creativity among its community members.</p>
        </div>
        <div className='shadow-xl hover:-translate-y-7 transition-all hover:scale-105 bg-[#5e2bff]/30 border border-[#5B2EFF]/50 rounded-lg p-3 m-3'>
          <h3 className='text-[#2D0320] py-2 text-3xl font-semibold'>Engage with the Community.</h3>
          <p className='pt-2 pb-4 text-[17px]'>Join discussions, comment on posts, and connect with like-minded individuals. Your insights contribute to a dynamic and interactive dialogue.</p>
        </div>
        <div className='shadow-xl hover:-translate-y-7 transition-all hover:scale-105 bg-[#5e2bff]/30 border border-[#5B2EFF]/50 rounded-lg p-3 m-3'>
          <h3 className='text-[#2D0320] py-2 text-3xl font-semibold'>Share Your Voice.</h3>
          <p className='pt-2 pb-4 text-[17px]'>Express your thoughts, ideas, and stories to a vibrant community. Whether it's an opinion piece, a personal story, or a creative work, The Public Pen is your stage to be heard.</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
