import React from "react";
import race_car from "../../public/svg/race_car.svg";
import Image from "next/image";
import Link from "next/link";

const QuickStart = () => {
  return (
    <main className="w-full flex flex-col p-5 md:p-10 gap-5 md:gap-10 font-inter text-xl md:max-w-7xl mx-auto">
      <Image src={race_car} alt="race_car" />
      <section className="text-gray-800 font-normal pb-5 md:pb-10">
        <h1 className="text-5xl pb-6 text-brand-primary font-bold">
          Get Started
        </h1>
        <div className="flex flex-col gap-4">
          <p>
            LNSim is built to help you simulate lightning payments on any
            regtest or simnet network. To get started you will need:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <span className="text-lg text-slate-700 font-medium">
                A lightning network with open channels.
              </span>
            </li>
            <li>
              <span className="text-lg text-slate-700 font-medium">
                Access to execute grpc commands on network nodes.
              </span>
            </li>
            <li>
              <span className="text-lg text-slate-700 font-medium">
                The rust compiler installed.
              </span>
            </li>
          </ul>
          <p>
            If you need help setting up a test network, we suggest{" "}
            <span>
              <Link
                className="underline underline-offset-2 text-brand-primary"
                href="https://lightningpolar.com/"
                target="_blank"
              >
                Polar
              </Link>
            </span>{" "}
            for beginners or Scaling Lightning for larger deployments.
          </p>
        </div>
      </section>

      <section className="text-gray-800 font-normal">
        <h2 className="text-4xl pb-6 text-brand-primary font-bold">
          How to Use
        </h2>
        <div className="flex flex-col gap-4">
          <p>The basic steps for using SimLN are:</p>
          <ul className="list-disc list-inside">
            <li>
              <span className="text-lg text-slate-700 font-medium">
                Clone repo and install sim-ln.
              </span>
            </li>
            <li>
              <span className="text-lg text-slate-700 font-medium">
                Configure access to nodes in a simple config.json.
              </span>
            </li>
            <li>
              <span className="text-lg text-slate-700 font-medium">
                Define your desired activity
              </span>
            </li>
            <li>
              <span className="text-lg text-slate-700 font-medium">
                Run the simulation!
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="text-gray-800 font-normal">
        <h2 className="text-4xl pb-4 text-brand-primary font-bold">
          Install SimLN
        </h2>
        <p>
          See our installation instructions on github to get started!{" "}
          <span>
            <Link
              href="https://github.com/bitcoin-dev-project/sim-ln#getting-started"
              className="underline underline-offset-1 text-brand-primary"
            >
              installation instructions
            </Link>
          </span>
        </p>
      </section>
      <section className="text-gray-800 font-normal">
        <h2 className="text-4xl pb-4 text-brand-primary font-bold">
          Get in Touch
        </h2>
        <div className="flex flex-col gap-4">
          <div>
            <p>Having problems running sim-ln?</p>
            <p>
              <span>Get in touch with us on </span>
              <span>
                <Link
                  href="https://github.com/bitcoin-dev-project/sim-ln/discussions"
                  className="underline underline-offset-1 text-brand-primary"
                >
                  Github Discussions
                </Link>
              </span>
            </p>
          </div>
          <div>
            <p>Found a bug or want a feature?</p>
            <p>
              <span>Please feel free to </span>
              <span>
                <Link
                  href="https://github.com/bitcoin-dev-project/sim-ln/issues/new"
                  className="underline underline-offset-1 text-brand-primary"
                >
                  open up an issue
                </Link>
              </span>
              <span> with bug reports or feature requests.</span>
            </p>
          </div>
          <div>
            <p>Want to contribute to the project?</p>
            <p>
              If you&apos;d like to contribute code, maintenance help or
              documentation to the project please open up a volunteer issue and
              we&apos;ll find something fun for you.
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-800 font-normal">
        <h2 className="text-4xl pb-4 text-brand-primary font-bold">
          Copy Experiment
        </h2>
        <div className="flex flex-col gap-4">
          <p>
            Look at your lightning regtest network. It&apos;s so lonely. Just Alice
            and Bob. Occasionally, Charlie stops by, but very rarely these days.
            And when he does, things are just awkward. What should Alice, Bob,
            and Charlie talk about? Maybe simulate a single lightning payment?
            Wow, you really know how to spice things up Charlie.
          </p>
          <p>
            Life is short. Our time as nodes in this plane of existence is but a
            fleeting moment in the vastness of time. Why waste it with empty,
            dull, stagnant lightning networks?
          </p>
          <p>
            SimLN is here to make you feel again - to bring joy, wonder, awe,
            nay, the entire palette of emotions back to your lightning
            development experience. Simulate a payment from Alice to any number
            of NPCs. Set it to recur every minute. Or every 10 seconds. Or scale
            this up to every NPC in your network.
          </p>
          <p>
            Your lightning network is a canvas, and simulations are a rich
            tapestry that you paint with every keystroke into your <Code>config.toml</Code>
            file.
          </p>
          <p>
            SimLN - because life is too short to have a boring lightning
            network.
          </p>
        </div>
      </section>
    </main>
  );
};

export default QuickStart;

const Code = ({children}: {children: string}) => {
  return (
    <>
    <span> </span>
    <code className="bg-gray-100 border-gray-300 border-[1px] rounded-md text-gray-600 font-semibold px-2 inline-flex py-0 text-[14px]">{children}</code>
    <span> </span>
    </>
  )
}
