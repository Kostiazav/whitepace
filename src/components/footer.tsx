import { ArrowRight } from '@/icons/arrow-right';
import { Facebook } from '@/icons/facebook';
import { Linkedin } from '@/icons/linkedin';
import { Twitter } from '@/icons/twitter';
import Link from 'next/link';

const listProduct = ['Overview', 'Pricing', 'Customer stories'];
const listResources = ['Blog', 'Guides & tutorials', 'Help center'];
const listCompany = ['About us', 'Careers', 'Media kit'];
const listSocialLinks = [
  { nav: '', icon: Facebook },
  { nav: '', icon: Linkedin },
  { nav: '', icon: Twitter },
];

export const Footer = () => {
  return (
    <footer className="bg-bgFooter flex flex-col justify-center text-white px-4 pb-8">
      <h3 className="text-center text-white text-[52px] leading-[62px] font-semibold mt-[100px]">
        window whales
      </h3>
      <p className="text-center mt-6">
        lorem ipsum doler gfhds hdgf hs fhdshg fdhsg df hsd . dhfdshdgf hdgf shj
        hdgf s jhdgf
      </p>
      <h3 className="text-center mt-20 font-semibold text-[18px] leading-6">
        Product
      </h3>
      <ul className="flex flex-col justify-center mx-auto text-center mt-4 gap-4">
        {listProduct.map((item, idx) => {
          return (
            <li className="hover:text-hoverText" key={idx}>
              {item}
            </li>
          );
        })}
      </ul>
      <h3 className="text-center mt-20 font-semibold text-[18px] leading-6">
        Resources
      </h3>
      <ul className="flex flex-col justify-center mx-auto text-center mt-4 gap-4">
        {listResources.map((item, idx) => {
          return (
            <li className="hover:text-hoverText" key={idx}>
              {item}
            </li>
          );
        })}
      </ul>
      <h3 className="text-center mt-20 font-semibold text-[18px] leading-6">
        Company
      </h3>
      <ul className="flex flex-col justify-center mx-auto text-center mt-4 gap-4">
        {listCompany.map((item, idx) => {
          return (
            <li className="hover:text-hoverText" key={idx}>
              {item}
            </li>
          );
        })}
      </ul>
      <div className="mx-auto text-center">
        <h3 className="text-center mt-20 font-semibold text-[28px] leading-6">
          Company
        </h3>
        <p className="text-[18px] leading-[30px[ mt-5">
          Get started for free.
          <br /> Add your whole team as your needs grow.
        </p>
      </div>
      <button className="font-inter w-fit mx-auto text-nowrap flex items-center font-medium text-[16px] leading-5 px-10 py-5 mt-[60px] rounded-[8px] bg-buttonBlue text-white">
        Read more <ArrowRight />
      </button>
      <h3 className="text-center my-4">©2021 Whitepace LLC.</h3>
      <ul className="mx-auto flex justify-center gap-6">
        {listSocialLinks.map((item, idx) => {
          return (
            <li key={idx}>
              <Link href={item.nav}>
                <item.icon />
              </Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};
