import React from "react";
import race_car from "../../public/svg/race_car.svg";
import Image from "next/image";
import Link from "next/link";

const QuickStart = () => {
  return (
    <main className="w-full font-inter text-xl px-10 py-10 md:max-w-5xl mx-auto">
      <Image src={race_car} alt="race_car" />
      <section className="text-gray-800 font-normal">
        <h1 className="text-5xl pb-4 text-brand-primary font-bold">
          Quick Start
        </h1>
        <p className="pb-4">
          LNSim is built to help you simulate lightning payments on a given
          lightning network. Typically, this will be a regtest or signet
          environment, but LNSim is agnostic about the network you use.
        </p>
        <div className="pb-4">
          You can use a tool like{" "}
          <Link
            className="underline underline-offset-2 text-brand-primary"
            href="https://lightningpolar.com/"
            target="_blank"
          >
            Polar
          </Link>{" "}
          to help you quickly setup some regtest lightning nodes.
        </div>
      </section>
      <section>
        <h2 className="text-4xl pb-4 text-brand-primary font-bold">How to Use</h2>
        <p className="pb-4">The basic steps for using LnSim are:</p>
        <ul className='list-disc list-inside'>
          <li>
            <span>Download LnSim</span>
          </li>
          <li>
            <span>Configuration</span>
            <ul className='ml-4 list-disc list-inside'>
              <li>Add your node credentials</li>
              <li>Define your simulation</li>
            </ul>
          </li>
          <li>Run the simulation</li>
        </ul>
      </section>
      <section>
        <h2 className="text-4xl pb-4 text-brand-primary font-bold">Download LNSim</h2>
        <p className="pb-4">You can <Link href="https://github.com/bitcoin-dev-project/sim-ln" className="underline underline-offset-1 text-brand-primary">download the latest LNSim binary here</Link></p>
        <p className="pb-4">Optionally, you can <Link href="https://github.com/bitcoin-dev-project/sim-ln" className="underline underline-offset-1 text-brand-primary">clone from GitHub</Link> and compile from source if you prefer.</p>
      </section>
      <section>
        <h2 className="text-4xl pb-4 text-brand-primary font-bold">Configuration</h2>
        <p className="pb-4">Create a config.json file in the same directory as your LNSim binary. Inside, you’ll need to add the credentials for one of the lightning node’s in your network. You’ll also need to define the activity, which is what your simulation should do <Link href="/">See here </Link> for more in-depth docs on defining your simulation</p>
      </section>
      <ConfigFileAnnotation />
    </main>
  );
};

export default QuickStart;

const ConfigFileAnnotation = () => {
  return (
    <div className="p-6 bg-brand-primary rounded-lg text-sm text-white">
      <div>
        <p>{`"nodes": [{`}</p>
        <p className="pl-4">{`"address": "localhost:10001",`}</p>
        <p className="pl-4">{`"macaroon": "~/lnd/admin.macaroon",`}</p>
        <p className="pl-4">{`"cert": "~/lnd/alice/tls.cert",`}</p>
        <p className="pl-4">{`"alias": "alice",`}</p>
        <p className="pl-4">{`"id": "038d489e56f137948ad95ac...",`}</p>
        <p>{`}],`}</p>
      </div>
      <div>
        <p>{`"activity": [{`}</p>
        <p className="pl-4">{`"src": "027114c496923dc2bc40...",`}</p>
        <p className="pl-4">{`"dest": "038d489e56f137948ad95ac...",`}</p>
        <p className="pl-4">{`"interval_sec": "100",`}</p>
        <p className="pl-4">{`"amt_sat": "1000",`}</p>
        <p>{`}]`}</p>
      </div>
    </div>
  )
}
