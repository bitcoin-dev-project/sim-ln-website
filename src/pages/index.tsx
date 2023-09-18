import Image from 'next/image'
import SimLnHero from '../../public/SimLNLogoASCII.svg'
import ln_spec_dev from '../../public/svg/human_1.svg'
import app_dev from '../../public/svg/human_2.svg'
import bolt from '../../public/svg/bolt.svg'
import Link from 'next/link'
import { heroText } from '@/data'

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center`}
    >
      <section className='w-full flex flex-col items-center gap-9 py-20 relative overflow-hidden'>
        <p className='absolute text-lg text-gray-300 -z-10 left-0 top-0 w-full'>{heroText}</p>
        <Image src={SimLnHero} alt='logo' />
        <p className='text-5xl md:text-6xl text-brand-primary text-center max-w-[70%] font-inter font-[700]'>Instantly simulate real-world Lightning network activity</p>
        <div className='font-press flex gap-9'>
          <Link href="/guide" className='bg-brand-primary text-brand-secondary text-lg md:text-2xl p-3 md:p-6'>
            Quick Start
          </Link>
          <Link href="https://github.com/bitcoin-dev-project/sim-ln" className='bg-brand-primary text-white text-lg md:text-2xl p-3 md:p-6'>
            GitHub
          </Link>
        </div>
      </section>
      <section className='flex flex-col container mx-auto px-10 py-10 w-full md:w-[70%] lg:max-w-[800px]'>
        <p className='mb-4 text-2xl text-slate-800'>Plenty of solutions exist for quickly creating lightning nodes in test environments. These can be useful for local development. However, without the strain of real-world lightning traffic, these testing tools do not provide a developer with an understanding of how their code will perform on mainnet.</p>
        <p className='mb-4 text-2xl text-slate-800'>Lnsim fixes this by letting you simulate lightning activity as it might happen in the real world:</p>
        <ul className='list-disc list-inside'>
          <li>
            <span className='text-lg text-slate-700 font-medium'>Routing nodes with many channels</span>
          </li>
          <li>
            <span className='text-lg text-slate-700 font-medium'>Gossip between large quantities of peers </span>
          </li>
          <li>
            <span className='text-lg text-slate-700 font-medium'>Routing multiple payments between</span>
          </li>
        </ul>
      </section>
      <section className="flex flex-col w-full px-10 py-10 max-w-7xl gap-4 mb-10">
        <div className="flex flex-col md:flex-row w-full gap-4">
          <div className='flex basis-1/2 flex-col gap-2 '>
            <Image src={ln_spec_dev} alt="ln_spec_dev" />
            <h3 className='text-brand-primary font-semibold text-4xl'>For Lightning spec devs</h3>
            <p className='text-2xl'>Test out how new features to lightning network are going to perform under specific scenarios</p>
          </div>
          <div className='flex flex-col basis-1/2 gap-2'>
            <Image src={app_dev} alt="app_dev" />
            <h3 className='text-brand-primary font-semibold text-4xl'>For app devs</h3>
            <p className='text-2xl'>Stress test your lightning enabled application to see how it performs with more real-world like scenarios</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-4">
          <div className='flex flex-col basis-1/2 gap-2'>
            <Image src={bolt} alt="bolt" />
            <h3 className='text-brand-primary font-semibold text-4xl'>Features</h3>
            <p className='text-brand-primary font-semibold text-2xl'>Avoid building RPC scripts</p>
            <p className='text-2xl'>No more writing custom RCP scripts every time you need to simulate traffic!</p>
          </div>
          <div className='flex flex-col basis-1/2 gap-2'>
            <div className='md:h-[64px]'></div>
            <h3 className='text-brand-primary font-semibold text-4xl md:h-[32px]'></h3>
            <p className='text-brand-primary font-semibold text-2xl'>Execute patterns of payments</p>
            <p className='text-2xl'>Define specific patterns of payments to simulate the exact kind of traffic you need.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
