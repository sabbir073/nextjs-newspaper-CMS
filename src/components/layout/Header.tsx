"use client";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import Ad from "../common/Ad";
import ad from "@/assets/bangla-bid-ad.jpg";
import BodyContainer from "../common/BodyContainer";
import bigAdImg from "@/assets/walton-ad.jpg";
import Btn from "../common/Btn";
import { RxCross2 } from "react-icons/rx";
import { format } from "date-fns";
import { bn } from "date-fns/locale";
import { getDate } from "bangla-calendar";
import StayTuned from "../common/StayTuned";
import DownloadApp from "../common/DownloadApp";
import { GoDotFill } from "react-icons/go";
import Dropdown from "../common/Dropdown";
import HorizontalScrollableText from "@/components/home/FeatureNews/HorizontalScrollableText";

const Header: React.FC = () => {
  // Function to convert numbers to Bengali numerals
  const toBengaliNumerals = (text: string): string => {
    const bengaliNumerals = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return text.replace(/\d/g, (match) => bengaliNumerals[parseInt(match)]);
  };

  const date = new Date();
  let formattedDate = format(date, "EEEE, d MMMM, yyyy", { locale: bn });

  // Replace English numerals with Bengali numerals
  formattedDate = toBengaliNumerals(formattedDate);

  // Use the getDate method to get the formatted date in Bengali
  const formattedDateBn = getDate(date, {
    format: "D MMMM, YYYY",
    calculationMethod: "BD",
  });

  const menuItems = [
    { text: "সর্বশেষ", link: "/latest" },
    { text: "জাতীয়", link: "/category/national" },
    { text: "রাজনীতি", link: "/category/politics" },
    { text: "অর্থনীতি", link: "/category/economy" },
    { text: "আন্তর্জাতিক", link: "/category/international" },
    { text: "সারাদেশ", link: "/category/crime-news" },
    { text: "মতামত", link: "/category/opinion" },
    { text: "খেলা", link: "/category/sports" },
    { text: "বিনোদন", link: "/category/entertainment" },
    { text: "সাহিত্য", link: "/category/literature" },
    { text: "গণমাধ্যম", link: "/category/mass-media" },
  ];

  const megaMenuItems = [
    { text: "জাতীয়", link: "/category/national" },
    { text: "আন্তর্জাতিক", link: "/category/international" },
    { text: "খেলা", link: "/category/sports" },
    { text: "সাস্থ্য", link: "/category/health" },
    { text: "শিক্ষা", link: "/category/education" },
    { text: "ফিচার", link: "/category/feature" },
    { text: "ছবি", link: "/category/photo" },
    { text: "রাজনীতি", link: "/category/politics" },
    { text: "পশ্চিমবঙ্গ", link: "/category/west-bengal" },
    { text: "বিনোদন", link: "/category/entertainment" },
    { text: "লাইফস্টাইল", link: "/category/lifestyle" },
    { text: "ধর্ম", link: "/category/religion" },
    { text: "ভিন্নরকম", link: "/category/odd-news" },
    { text: "সারাদেশ", link: "/category/district-news" },
    { text: "অর্থনীতি", link: "/category/economy" },
    { text: "প্রযুক্তি", link: "/category/technology" },
    { text: "চিকিৎসা", link: "/category/treatment" },
    { text: "সাহিত্য", link: "/category/literature" },
    { text: "মতামত", link: "/category/opinion" },
    { text: "আইন-আদালত", link: "/category/crime-news" },
    { text: "প্রবাসে বাংলাদেশ", link: "/category/bangladeshi-diaspora" },
    { text: "পর্যটন", link: "/category/tourism" },
    { text: "রূপচর্চা", link: "/category/beauty-tips" },
    { text: "গনমাধ্যম", link: "/category/mass-media" },
    { text: "ভিডিও", link: "/category/video" },
  ];

  function closeDialog() {
    const dialog = document.getElementById(
      "megaMenuModal"
    ) as HTMLDialogElement;
    if (dialog) {
      dialog.close();
    }
  }

  return (
    <>
      {/* header top */}
      <BodyContainer>
        <div className="mx-auto ">
          <div className="sm:flex hidden flex-wrap md:gap-3 gap-6 justify-center md:justify-between items-center lg:pt-9 md:pt-7 pt-5 lg:px-3 md:px-5 ">
            <div className="md:w-auto w-full md:order-1 order-2 text-xl md:text-[22px] md:text-left text-center sm:block hidden">
              <p className="">
                {formattedDate} <br className="md:block hidden" />{" "}
                <span>{formattedDateBn}</span>
              </p>
            </div>
            <div className="md:w-auto md:order-2 order-1">
              <Link href="/">
                <Image
                  className="lg:w-[230px] md:w-[160px] w-[160px] mx-auto ml-0"
                  src={logo}
                  alt="logo"
                  priority={true}
                />
              </Link>
            </div>
            <div className="lg:justify-end justify-center order-3 flex lg:w-auto w-full">
              <div className="items-center flex">
                <Dropdown />
              </div>
              <div className="divider w-0 mx-0 divider-neutral divider-horizontal"></div>
              {/* <div>
                                <Link href={'#'} className='flex items-center gap-2 md:leading-[2px] leading-[2px] text-lg md:text-xl font-bold px-[12px]'><FaCertificate /> সার্টিফিকেট</Link>
                            </div> */}
              <div className="divider w-0 mx-0 divider-neutral divider-horizontal"></div>
              <div>
                <Link
                  onClick={() => {
                    const modal = document.getElementById(
                      "search_modal"
                    ) as HTMLDialogElement;
                    modal?.showModal();
                  }}
                  href={"#"}
                  className="flex items-center gap-1 md:leading-[2px] leading-[2px] text-xl font-bold pl-2"
                >
                  <IoSearchSharp /> খুঁজুন
                </Link>
              </div>
            </div>
          </div>

          <div className="sm:hidden flex justify-between items-center pt-6">
            <div>
              <Link href="/">
                <Image
                  className="w-[130px] mx-auto lg:ml-14 md:ml-14 ml-0"
                  src={logo}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="flex items-center gap-5">
              <Link
                onClick={() => {
                  const searchModal = document.getElementById(
                    "search_modal"
                  ) as HTMLDialogElement;
                  searchModal?.showModal();
                }}
                href={"#"}
                className="flex items-center gap-1 md:leading-[2px] leading-[2px] text-xl font-bold pl-2"
              >
                <IoSearchSharp />
              </Link>
              <FaBars
                onClick={() => {
                  const megaMenuModal = document.getElementById(
                    "megaMenuModal"
                  ) as HTMLDialogElement;
                  megaMenuModal?.showModal();
                }}
                className="text-xl cursor-pointer"
              />
            </div>
          </div>

          {/* menu item */}
          <nav className="navbar md:pt-3">
            <div className="navbar-center w-full justify-center lg:flex sticky top-0 shadow bg-base-content">
              <div className="menu menu-horizontal justify-center items-center p-0">
                {menuItems.map((menuItem) => (
                  <li key={menuItem.text}>
                    <Link
                      className="hover:bg-primary rounded-none md:text-left text-center sm:inline-block hidden text-white text-xl md:text-[22px]"
                      href={menuItem.link}
                      replace={false}
                    >
                      {menuItem.text}
                    </Link>
                  </li>
                ))}
                <FaBars
                  onClick={() => {
                    const megaMenuModal = document.getElementById(
                      "megaMenuModal"
                    ) as HTMLDialogElement;
                    megaMenuModal?.showModal();
                  }}
                  className="text-xl cursor-pointer sm:block hidden text-white"
                />

                <dialog
                  id="megaMenuModal"
                  className="modal overflow-scroll bg-[#0000008e]"
                >
                  <div className="w-full h-full bg-white">
                    {/* mega menu top bar */}
                    <div className="border-b border-black">
                      <BodyContainer>
                        <div className="flex justify-between items-center py-7">
                          <Link href={"/"} onClick={() => closeDialog()}>
                            <Image
                              className="md:w-[180px] w-[150px]"
                              src={logo}
                              alt="logo"
                            />
                          </Link>
                          <form method="dialog">
                            <button>
                              <RxCross2 className="md:text-4xl text-3xl" />
                            </button>
                          </form>
                        </div>
                      </BodyContainer>
                    </div>
                    {/* mega modal */}
                    <BodyContainer>
                      <div className="flex md:flex-row flex-col md:gap-6 gap-4 py-6">
                        <div className="lg:w-[65%] md:w-[100%] sm:w-[620px] sm:mx-auto w-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-4 grid-cols-2 lg:gap-1 md:gap-6 sm:gap-0 gap-6 text-xl md:text-2xl font-bold">
                          <ul>
                            {megaMenuItems.slice(0, 6).map((megaMenuItem) => (
                              <li key={megaMenuItem.text}>
                                <Link
                                  className="md:text-left text-center inline-block hover:text-blue-500"
                                  href={megaMenuItem.link}
                                  onClick={() => closeDialog()}
                                >
                                  {megaMenuItem.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <ul>
                            {megaMenuItems.slice(6, 12).map((megaMenuItem) => (
                              <li key={megaMenuItem.text}>
                                <Link
                                  className="md:text-left text-center inline-block hover:text-blue-500"
                                  href={megaMenuItem.link}
                                  onClick={() => closeDialog()}
                                >
                                  {megaMenuItem.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <ul>
                            {megaMenuItems.slice(12, 18).map((megaMenuItem) => (
                              <li key={megaMenuItem.text}>
                                <Link
                                  className="md:text-left text-center inline-block hover:text-blue-500"
                                  href={megaMenuItem.link}
                                  onClick={() => closeDialog()}
                                >
                                  {megaMenuItem.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <ul>
                            {megaMenuItems.slice(18, 24).map((megaMenuItem) => (
                              <li key={megaMenuItem.text}>
                                <Link
                                  className="md:text-left text-center inline-block hover:text-blue-500"
                                  href={megaMenuItem.link}
                                  onClick={() => closeDialog()}
                                >
                                  {megaMenuItem.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <div className="w-full lg:col-span-4 md:col-span-2 sm:col-span-4 col-span-2 md:mt-10 mt-6">
                            <Ad image={bigAdImg} link={"#"} />
                          </div>
                        </div>
                        <div className="w-[.5px] bg-black h-auto"></div>
                        <div className="lg:w-[34%] md:w-[100%]">
                          <StayTuned colon={true} />
                          <div className="mt-6 py-5">
                            <DownloadApp colon={true} />
                          </div>
                          {/* special program */}
                          {/* <div className='md:text-left text-center'>
                                                        <h5 className='text-xl md:text-2xl mb-1'>বিশেষ প্রোগ্রাম:</h5>
                                                        <Link href={'#'} onClick={() => closeDialog()} className='mt-3 flex items-center md:justify-start justify-center gap-2 md:leading-[2px] leading-[2px] text-lg md:text-xl font-bold px-[12px]'><FaCertificate /> সার্টিফিকেট</Link>
                                                    </div> */}
                          {/* important links */}
                          <ul
                            style={{ listStyleType: "disc" }}
                            className="flex flex-wrap text-lg md:text-[23px] font-bold gap-y-0 list-disc border-t border-black pt-3 justify-between"
                          >
                            <li>
                              <Link
                                className="flex items-center gap-1 hover:text-blue-500"
                                href={"/"}
                                onClick={() => closeDialog()}
                              >
                                <GoDotFill className="text-sm" />
                                আমাদের সম্পর্কে
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="flex items-center gap-1 hover:text-blue-500"
                                href={"/"}
                                onClick={() => closeDialog()}
                              >
                                <GoDotFill className="text-sm" />
                                বিজ্ঞাপন নীতিমালা
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="flex items-center gap-1 hover:text-blue-500"
                                href={"/"}
                                onClick={() => closeDialog()}
                              >
                                <GoDotFill className="text-sm" />
                                মন্তব্যের নীতিমালা
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="flex items-center gap-1 hover:text-blue-500"
                                href={"/"}
                                onClick={() => closeDialog()}
                              >
                                <GoDotFill className="text-sm" />
                                গোপনীয়তা নীতি
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="flex items-center gap-1 hover:text-blue-500"
                                href={"/"}
                                onClick={() => closeDialog()}
                              >
                                <GoDotFill className="text-sm" />
                                যোগাযোগ
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="flex items-center gap-1 hover:text-blue-500"
                                href={"/"}
                                onClick={() => closeDialog()}
                              >
                                <GoDotFill className="text-sm" />
                                ইউনিকোড কনভার্টার
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </BodyContainer>
                  </div>
                </dialog>
              </div>
            </div>
          </nav>
        </div>
      </BodyContainer>
      {/* header ad starts here */}

      <div className="sm:-mt-0 -mt-10 mb-2 md:mb-0">
        <HorizontalScrollableText text="অভ্যন্তরীণ বাজারে সরবরাহ ঠিক রাখতে গত ৭ ডিসেম্বর পেঁয়াজ রপ্তানি বন্ধ করে ভারত সরকার। এই ঘোষণার পরপরই অস্থিতিশীল হতে শুরু করে বাংলাদেশের পেঁয়াজের বাজার। হু হু করে বাড়তে থাকে দাম। " />
      </div>
      <BodyContainer>
        <Ad image={ad} link={"#"} />
      </BodyContainer>
      {/* search modal */}
      <dialog id="search_modal" className="modal bg-[#00000085]">
        <div className="modal-box min-w-[40%] py-8 md:py-10 px-7">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-3xl text-center">কি খুজতে চান?</h3>
          <form className="space-y-3 mt-4">
            <input
              type="text"
              placeholder="এখানে লিখুন"
              className="input text-xl md:text-2xl h-[60px] input-bordered w-full"
            />
            <Btn text={"খুজুন"} />
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Header;
