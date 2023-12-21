import Image from "next/image";
import Link from "next/link";
import FooterItem from "../../moleculs/FooterItem";

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <Link href={"/"}>
                <a className="mb-30">
                  <Image src="/icon/logo.svg" width={60} height={60} />
                </a>
              </Link>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2021. All Rights Reserved.</p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <FooterItem title="Company" desk="About Us" desk2="Press Release" desk3="Term Of Us" desk4="Privacy & Policy" href="/" href2="/" href3="/" href4="/" />
                <FooterItem title="Support" desk="Refund Policy" desk2="Unlock Rewards" desk3="Live Chatting" href="/" href2="/" href3="/" />
                <FooterItem
                  title="Connect"
                  desk="mobadaff@gmail.com"
                  desk2="mobadaffteam@gmail.com"
                  desk3="GPI, Padalarang"
                  desk4="087737611473"
                  href="mailto:mobadaff@gmail.com"
                  href2="mailto:mobadaffteam@gmail.com"
                  href3="https://maps.app.goo.gl/TFesZDQ5AL6X1isE6"
                  href4="https://wa.me/6287737611473"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
