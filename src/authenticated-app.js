import React, { useContext } from "react";
import Text from "./Text";
import Image from "./Image";
import LazyLoad from "react-lazyload";

import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import UserContext from "./context/UserContext";

const AuthenticatedApp = () => {
  const { handleLogout } = useContext(UserContext);
  const handleSubmit = e => {
    e.preventDefault();
    handleLogout();
  };
  return (
    <>
      <h1>Logout</h1>

      <form onSubmit={handleSubmit}>
        <input type="submit" value="logout" />
      </form>
      <div className="container">
        <h1>Image Gallery</h1>
        <LazyLoad height={200}>
          <Text />
          <Image src={img1} />
        </LazyLoad>
        <LazyLoad height={200} once>
          <Text />
          <Image src={img2} />
        </LazyLoad>
        <LazyLoad height={200} once>
          <Text />
          <Image src={img3} />
        </LazyLoad>
        <LazyLoad height={200} once>
          <Text />
          <Image src={img4} />
        </LazyLoad>
        <LazyLoad height={200} once>
          <Text />
          <Image src={img5} />
        </LazyLoad>
      </div>
    </>
  );
};

export default AuthenticatedApp;
