import img from "@/assets/images/img-2.svg";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";

const UnderConstructionPage = () => {
  return (
    <div className="min-h-screen">
      <div className="container">
        <div className="flex justify-center flex-wrap items-center min-h-screen flex-col text-center">
          <Image width={300} height={300} src={img} alt="" />
          <h4 className="text-3xl font-medium text-slate-900 dark:text-white mb-2">
            Page is under construction.
          </h4>
          <p className="font-normal text-base text-slate-500 dark:text-slate-300">
            We’re making the system more awesome. <br />
            We’ll be back shortly.
          </p>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <div className="container">
          {/* <div className="md:flex justify-between items-center flex-wrap space-y-4 py-6">
            <div>
              <ul className="flex md:justify-start justify-center space-x-3">
                <li>
                  <a href="#" className="social-link">
                    <Icon icon="icomoon-free:facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <Icon icon="icomoon-free:twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <Icon icon="icomoon-free:linkedin2" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <Icon icon="icomoon-free:google" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex md:justify-start justify-center space-x-3">
                <li>
                  <a
                    href="#"
                    className="text-slate-500 dark:text-slate-400 text-sm transition duration-150 hover:text-slate-900"
                  >
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 dark:text-slate-400 text-sm transition duration-150 hover:text-slate-900"
                  >
                    Faq
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 dark:text-slate-400 text-sm transition duration-150 hover:text-slate-900"
                  >
                    Email us
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default UnderConstructionPage;
