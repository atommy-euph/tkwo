import Image from "next/image";

import twitter from "../icons/twitter-brands.svg";
import instagram from "../icons/instagram-brands.svg";
import mail from "../icons/mail.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <a href="https://twitter.com/thekeynotewo" className="sns">
          <Image
            className="mr-1"
            width={22}
            height={22}
            src={twitter}
            alt="twitter icon"
          />
          <p className="font-kurobara mr-2 text-lightyellow underline">
            @thekeynotewo
          </p>
          <p className="font-kurobara text-sm">[最速で情報更新中！]</p>
        </a>
        <a href="https://instagram.com/thekeynotewo" className="sns">
          <Image
            className="mr-1"
            width={22}
            height={22}
            src={instagram}
            alt="instagram icon"
          />
          <p className="font-kurobara mr-2 text-lightyellow underline">
            @thekeynotewo
          </p>
          <p className="font-kurobara text-sm">[練習の様子を公開中！]</p>
        </a>
        <a href="mailto:thekeynotewo@gmail.com" className="sns">
          <Image
            className="mr-1"
            width={22}
            height={22}
            src={mail}
            alt="mail icon"
          />
          <p className="font-kurobara mr-2 text-lightyellow underline">
            thekeynotewo@gmail.com
          </p>
          <p className="font-kurobara text-sm">
            [メールでのお問い合わせはコチラ！]
          </p>
        </a>
        <p className="text-xs font-kurobara pt-8">
          © 2022-2023 The Keynote Wind Orchestra
        </p>
      </footer>
    </>
  );
}
