import Link from "next/link";

interface AuthProps {
  isLogin?: boolean;
}

export default function Auth(props: AuthProps) {
  const { isLogin } = props;
  if (isLogin) {
    return (
      <li className="nav-item dropdown my-auto d-flex">
        <div className="vertical-line d-lg-block d-none"></div>
        <div>
          <a className="dropdown-toggle ms-lg-40" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="/img/avatar-1.png" className="rounded-circle" width="40" height="40" alt="" />
          </a>

          <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
            <li>
              <Link href="/member">
                <a className="dropdown-item text-lg color-palette-2" href="#">
                  My Profile
                </a>
              </Link>
            </li>
            <li>
              <Link href="/wallet">
                <a className="dropdown-item text-lg color-palette-2" href="#">
                  Wallet
                </a>
              </Link>
            </li>
            <li>
              <Link href="/member/EditProfile">
                <a className="dropdown-item text-lg color-palette-2" href="#">
                  Account Settings
                </a>
              </Link>
            </li>
            <li>
              <Link href="SignIn">
                <a className="dropdown-item text-lg color-palette-2" href="#">
                  Log Out
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </li>
    );
  }
  return (
    <li className="nav-item my-auto">
      <Link href="/SignIn">
        <a className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill" href="./src/sign-in.html" role="button">
          Sign In
        </a>
      </Link>
    </li>
  );
}
