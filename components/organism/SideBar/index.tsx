import Footer from "./Footer"
import MenuItem from "./MenuItem"
import Profile from "./Profile"

export default function SideBar() {
  return (
    <section className="sidebar">
    <div className="content pt-50 pb-30 ps-30">
        <Profile />
      <div className="menus">
        <MenuItem title="OverView" gambar="menu-overview" href="/" active/>
        <MenuItem title="Transactions" gambar="menu-transaction" href="/member/transactions"/>
        <MenuItem title="Messages" gambar="menu-message" href="/"/>
        <MenuItem title="Card" gambar="menu-card" href="/"/>
        <MenuItem title="Rewards" gambar="menu-reward" href="/"/>
        <MenuItem title="Settings" gambar="menu-setting" href="/"/>
        <MenuItem title="Log Out" gambar="menu-logout" href="/"/>
      </div>
    <Footer />
    </div>
  </section>
    )
}
