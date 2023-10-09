import Image from "next/image";
import SimLnHero from "../../public/SimLNLogoASCII.svg";
import ln_spec_dev from "../../public/svg/human_1.svg";
import app_dev from "../../public/svg/human_2.svg";
import bolt from "../../public/svg/bolt.svg";
import Link from "next/link";
import { heroText } from "@/data";
import styles from "@/styles/home.module.scss";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center text-gray-800`}>
      <section className="w-full relative overflow-hidden mb-5 md:mb-10">
        <p className="absolute text-lg text-gray-300 -z-10 left-0 top-0 w-full opacity-40">
          {heroText}
        </p>
        <div className="w-full flex flex-col items-center gap-6 pb-8 md:gap-9 md:py-20">
          <Image src={SimLnHero} alt="logo" priority />
          <p
            className={`${styles.shimmer_text} text-5xl md:text-6xl text-brand-primary text-balance text-center md:w-[70%] lg:max-w-[800px] font-sans font-[700]`}
          >
            Instantly simulate real-world Lightning network activity
          </p>
          <div className="w-full text-center font-press justify-center flex gap-4 md:gap-9 px-2">
            <Link
              href="/guide"
              className="bg-brand-primary text-brand-secondary text-md sm:text-lg md:text-2xl overflow-clip"
            >
              <span className={`${styles.action_buttons} p-3 md:p-6`}>
                Quick start
              </span>
            </Link>
            <Link
              href="https://github.com/bitcoin-dev-project/sim-ln"
              className="bg-brand-primary text-brand-secondary text-md sm:text-lg md:text-2xl overflow-clip"
            >
              <span className={`${styles.action_buttons} p-3 md:p-6`}>
                GitHub
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-6 md:gap-9 container mx-auto p-5 md:p-10 w-full max-w-5xl">
        <p className="text-2xl">
          Testing lightning applications and protocol changes in realistic
          conditions is challenging. While many solutions exist for creating
          regtest and signet networks, producing regular payments within these
          networks requires custom scripting and constant attention.
        </p>
        <p className="text-2xl">
          SimLN fixes this by letting you simulate payment activity on any test
          network!
        </p>
        <ul className="flex flex-col gap-2 list-disc list-inside text-2xl font-normal">
          <li>
            <span className="inline">
              Random activity generated based on network topology.
            </span>
          </li>
          <li>
            <span className="inline">
              User-specified activity execution for specific payment flows.
            </span>
          </li>
          <li>
            <span className="">
              Cross implementation lightning support.
            </span>
          </li>
        </ul>
      </section>
      <section className="flex flex-col w-full p-5 md:p-10 max-w-7xl gap-4">
        <div className="flex flex-col md:flex-row w-full gap-4">
          <div className="flex basis-1/2 flex-col gap-2 ">
            <Image src={ln_spec_dev} alt="ln_spec_dev" />
            <h3 className="text-brand-primary font-semibold text-4xl">
              For Lightning spec devs
            </h3>
            <p className="text-2xl">
              Easily test protocol changes against realistic network conditions.
            </p>
          </div>
          <div className="flex flex-col basis-1/2 gap-2">
            <Image src={app_dev} alt="app_dev" />
            <h3 className="text-brand-primary font-semibold text-4xl">
              For app devs
            </h3>
            <p className="text-2xl">
              Stress test your lightning enabled application to see how it
              performs in real-world, liquidity constrained environments.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full p-5 md:p-10 max-w-7xl gap-4 mb-10">
        <div className="flex flex-col basis-1/2 gap-2">
          <Image src={bolt} alt="bolt" />
          <h3 className="text-brand-primary font-semibold text-4xl">
            Features
          </h3>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-4 text-xl">
          <div className="flex flex-col basis-1/2 gap-2">
            <p className="text-brand-primary font-semibold text-2xl">
              Random Activity Generation
            </p>
            <p className="">
              Simply provide the simulator with a set of nodes. SimLNwill
              generate activity based on the topology of the network.
            </p>
          </div>
          <div className="flex flex-col basis-1/2 gap-2">
            <p className="text-brand-primary font-semibold text-2xl">
              Configured Payment Flows
            </p>
            <p className="">
              Define specific payment patterns to simulate the exact kind of
              traffic you need.
            </p>
          </div>
          <div className="flex flex-col basis-1/2 gap-2">
            <p className="text-brand-primary font-semibold text-2xl">
              Cross-Implementation Support
            </p>
            <p className="">
              Support for LND and CLN nodes, with work ongoing to add Eclair and
              LDK-node.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
