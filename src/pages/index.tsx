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
    <main className={`flex min-h-screen flex-col items-center`}>
      <section className="w-full relative overflow-hidden mb-5 md:mb-10">
        <p className="absolute text-lg text-gray-300 -z-10 left-0 top-0 w-full opacity-40">
          {heroText}
        </p>
        <div className="w-full flex flex-col items-center gap-4 md:gap-9 md:py-20">
          <Image src={SimLnHero} alt="logo" />
          <p
            className={`${styles.shimmer_text} text-5xl md:text-6xl text-brand-primary text-balance text-center md:w-[70%] lg:max-w-[800px] font-inter font-[700]`}
          >
            Instantly simulate real-world Lightning network activity
          </p>
          <div className="w-full text-center font-press justify-center flex gap-4 md:gap-9 px-2">
            <Link
              href="/guide"
              className="bg-brand-primary text-brand-secondary text-md sm:text-lg md:text-2xl overflow-clip"
            >
              <span className={`${styles.action_buttons} p-3 md:p-6`}>
                Quick Start
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
      <section className="flex flex-col container mx-auto p-5 md:p-10 w-full max-w-5xl">
        <p className="mb-4 text-2xl text-gray-700">
          Testing lightning applications and protocol changes in realistic
          conditions is challenging. While many solutions exist for creating
          regtest and simnet networks, producing regular payments within these
          networks requires custom scripting and constant attention.
        </p>
        <p className="mb-4 text-2xl text-gray-700">
          SimLN fixes this by providing the ability to simulate payment activity
          on any test network! Features include:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <span className="text-lg text-slate-700 font-medium">
              Routing nodes with many channels
            </span>
          </li>
          <li>
            <span className="text-lg text-slate-700 font-medium">
              Gossip between large quantities of peers{" "}
            </span>
          </li>
          <li>
            <span className="text-lg text-slate-700 font-medium">
              Routing multiple payments between
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
            <p className="text-2xl text-gray-700">
              Easily test protocol changes against realistic network conditions.
            </p>
          </div>
          <div className="flex flex-col basis-1/2 gap-2">
            <Image src={app_dev} alt="app_dev" />
            <h3 className="text-brand-primary font-semibold text-4xl">
              For app devs
            </h3>
            <p className="text-2xl text-gray-700">
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
        <div className="flex flex-col md:flex-row w-full gap-4 font-light text-xl">
          <div className="flex flex-col basis-1/2 gap-2">
            <p className="text-brand-primary font-semibold text-2xl">
              Random Activity Generation
            </p>
            <p className="">
              Simply provide the simulator with a set of nodes and it will
              generate activity based on the topology of the network.
            </p>
          </div>
          <div className="flex flex-col basis-1/2 gap-2">
            <p className="text-brand-primary font-semibold text-2xl">
              Configured Payment Flows
            </p>
            <p className="">
              Define specific patterns of payments to simulate the exact kind of
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
