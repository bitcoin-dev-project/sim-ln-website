import React from "react";
import race_car from "../../public/svg/race_car.svg";
import Image from "next/image";
import Link from "next/link";

const QuickStart = () => {
  return (
    <main className="w-full flex flex-col p-5 md:p-10 gap-5 md:gap-10 text-lg font-normal md:max-w-7xl mx-auto">
      <section className="">
        <Image src={race_car} alt="race_car" priority />
        <h1 className="text-5xl pb-6 text-brand-primary font-bold">
          Getting Started
        </h1>
        <div className="flex flex-col gap-4">
          <div>
            <p>
              SimLN helps you simulate lightning payments on any regtest or
              signet network.
            </p>
            <p>You will need:</p>
          </div>
          <ul className="flex flex-col gap-2 list-disc list-inside text-base text-gray-800">
            <li>
              <p className="inline">A lightning network with open channels.</p>
            </li>
            <li>
              <p className="inline">
                Access to execute <span className="font-semibold">gRPC</span>{" "}
                commands on network nodes.
              </p>
            </li>
            <li>
              <p className="inline">
                <span>The </span>
                <span>
                  <Link
                    href="https://www.rust-lang.org/tools/install"
                    className="underline underline-offset-2 text-brand-primary"
                    target="_blank"
                  >
                    Rust
                  </Link>
                </span>
                <span> compiler installed.</span>
              </p>
            </li>
          </ul>
          <p>
            <span>If you need help setting up a test network, we suggest </span>
            <span>
              <Link
                className="underline underline-offset-2 text-brand-primary"
                href="https://lightningpolar.com/"
                target="_blank"
              >
                Polar
              </Link>
            </span>
            <span> for beginners or </span>
            <span>
              <Link
                className="underline underline-offset-2 text-brand-primary"
                href="https://github.com/scaling-lightning/scaling-lightning"
                target="_blank"
              >
                Scaling Lightning
              </Link>
            </span>
            <span> for larger deployments.</span>
          </p>
        </div>
      </section>

      <section className="text-gray-800 font-normal">
        <h2 className="text-2xl md:text-4xl pb-2 md:pb-4 text-brand-primary font-bold">
          How to Use
        </h2>
        <div className="flex flex-col gap-4">
          <ul className="flex flex-col gap-2 list-disc list-inside text-base text-gray-800">
            <li>
              <span className="">Clone repo and install sim-cli</span>
            </li>
            <li>
              <span className="">
                Provide access to nodes via simulation parameters json file.
              </span>
            </li>
            <li>
              <span className="">Define your desired activity</span>
            </li>
            <li>
              <span className="">Run the simulation!</span>
            </li>
          </ul>
          <p>
            <span>See our </span>
            <span>
              <Link
                href="https://github.com/bitcoin-dev-project/sim-ln#getting-started"
                className="underline underline-offset-1 text-brand-primary"
                target="_blank"
              >
                installation instructions
              </Link>
            </span>
            <span> on GitHub to get started!</span>
          </p>
        </div>
      </section>

      <section className="text-gray-800 text-base font-normal">
        <h2 className="text-2xl md:text-4xl pb-2 md:pb-4 text-brand-primary font-bold">
          Get in Touch
        </h2>
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex flex-col gap-1 md:gap-2">
            <p className="font-medium text-black">
              Having problems running sim-ln?
            </p>
            <p className="">
              <span>Get in touch with us on our </span>
              <span>
                <Link
                  href="https://github.com/bitcoin-dev-project/sim-ln/discussions/124"
                  className="underline underline-offset-1 text-brand-primary"
                  target="_blank"
                >
                  setup debugging thread
                </Link>
              </span>
              !
            </p>
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <p className="font-medium text-black">
              Found a bug or want a feature?
            </p>
            <p>
              <span>Please feel free to </span>
              <span>
                <Link
                  href="https://github.com/bitcoin-dev-project/sim-ln/issues/new"
                  className="underline underline-offset-1 text-brand-primary"
                  target="_blank"
                >
                  open up an issue
                </Link>
              </span>
              <span> with bug reports or feature requests.</span>
            </p>
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <p className="font-medium text-black">
              Want to contribute to the project?
            </p>
            <p>
              <span>
                If you&apos;d like to contribute code, maintenance help or
                documentation to the project but you&apos;re not sure where to
                start, reach out on our {" "}
              </span>
              <span>
                <Link
                  href="https://github.com/bitcoin-dev-project/sim-ln/discussions/123"
                  className="underline underline-offset-1 text-brand-primary"
                  target="_blank"
                >
                 contribution discussion thread
                </Link>
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default QuickStart;
