"use client";
import React from "react";
import Image from "next/image";
import { parseISO, format } from "date-fns";
import { bn } from "date-fns/locale";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faLinkedinIn,
  faWhatsapp,
  faFacebookMessenger,
  faTelegramPlane,
  faRedditAlien
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPlus, faMinus, faPrint } from "@fortawesome/free-solid-svg-icons";

interface ReporterProfileProps {
  reporterName: string;
  publishedAt: string;
  newsId: string;
  onZoomIn?: () => void;   // NEW
  onZoomOut?: () => void;  // NEW
}

/* ─────────────────────────────── */
const toBnDigits = (s: string) =>
  s.replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[Number(d)]);

const buildBanglaDateTime = (iso: string) => {
  const date = parseISO(iso);
  const calendar = format(date, "EEEE, d MMMM yyyy", { locale: bn });
  const time = format(date, "h:mm", { locale: bn });
  const h = date.getHours();
  const period = h < 12 ? "পূর্বাহ্ন" : h === 12 ? "মধ্যাহ্ন" : "অপরাহ্ন";
  return toBnDigits(`${calendar}, ${time} ${period}`);
};
/* ─────────────────────────────── */

const ReporterProfile: React.FC<ReporterProfileProps> = ({
  reporterName,
  publishedAt,
  newsId,
  onZoomIn,
  onZoomOut,
}) => {
  const pubDateTime = buildBanglaDateTime(publishedAt);
  const shareUrl = encodeURIComponent(`https://newscity24.com/news/details/${newsId}`);
  const iconClass = "h-4 w-4 md:h-5 md:w-5 text-gray-600 hover:text-primary transition align-bottom";



  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
      {/* author */}
      <div className="flex items-center">
        <Image
          src="https://d1uo68v5hl2ge5.cloudfront.net/selfie.png"
          width={44}
          height={44}
          alt="Reporter"
          className="w-11 h-11 bg-gray-50 rounded-full"
          priority
        />
        <div className="ml-2">
        <p className="text-gray-600 text-xl leading-[1.5rem] sm:leading-[1.75rem]">{reporterName}</p>
        <p className="text-gray-600 text-xl leading-[1.5rem] sm:leading-[1.75rem]">{pubDateTime}</p>
        </div>
      </div>

      {/* icons + actions */}
      <div className="flex flex-nowrap items-start gap-3 md:gap-4 mt-3 md:mt-0">
        {/* share icons */}
        <a title="Facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} className={iconClass} /></a>
        <a title="X / Twitter" href={`https://twitter.com/intent/tweet?url=${shareUrl}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} className={iconClass} /></a>
        <a title="LinkedIn" href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className={iconClass} /></a>
        <a title="WhatsApp" href={`https://api.whatsapp.com/send?text=${shareUrl}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} className={iconClass} /></a>
        <a title="Messenger" href={`fb-messenger://share/?link=${shareUrl}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookMessenger} className={iconClass} /></a>
        <a title="Telegram" href={`https://t.me/share/url?url=${shareUrl}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTelegramPlane} className={iconClass} /></a>
        <a title="Reddit" href={`https://www.reddit.com/submit?url=${shareUrl}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faRedditAlien} className={iconClass} /></a>
        <a title="Email" href={`mailto:?subject=${encodeURIComponent(reporterName)}&body=${shareUrl}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} className={iconClass} /></a>

        {/* spacing divider */}
        <span className="w-px h-5 bg-gray-300" />

        {/* zoom/print actions */}
        <button title="বড় করুন" onClick={onZoomIn}><FontAwesomeIcon icon={faPlus} className={iconClass} /></button>
        <button title="ছোট করুন" onClick={onZoomOut}><FontAwesomeIcon icon={faMinus} className={iconClass} /></button>
        <button title="প্রিন্ট করুন" onClick={() => window.print()}><FontAwesomeIcon icon={faPrint} className={iconClass} /></button>
      </div>
    </div>
  );
};

export default ReporterProfile;
