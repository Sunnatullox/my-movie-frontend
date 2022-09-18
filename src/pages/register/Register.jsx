import React, { useState } from "react";
import "./register.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../authContext/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../../components/footer/Footer";
import {
  BatteryChargingFull,
  OndemandVideo,
  Whatshot,
} from "@material-ui/icons";

const Register = () => {
  const [registerid, setRegisterid] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { user } = useContext(AuthContext);

  const handleStart = (e) => {
    e.preventDefault();
    if (email) {
      return setRegisterid(true);
    } else {
      toast.error("Sorry, you did not enter your email");
    }
  };

  const handleFinish = async (e) => {
    e.preventDefault();
    if (name && password && email) {
      try {
        const res = await axios.post(
          "https://evening-hamlet-96260.herokuapp.com/api/auth/register",
          {
            email,
            name,
            password,
          }
        );
        console.log(res);
        return history.push("/login");
      } catch (error) {
        toast.error(error.response.data.msg);
        return;
      }
    } else {
      return toast.error("Sorry, you did not enter username or password");
    }
  };

  if (!email) {
    //  setRegisterid(false)
  }

  return (
    <>
      <Navbar user={user}/>
      <div className="register">
        <ToastContainer />
        <div className="container">
          <h1>Unlimite movies, TV showa, and more</h1>
          <h2>Whatch anywhere. Cancel anytime</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          {!registerid ? (
            <div className="input">
              <input
                type="email"
                className="form-control is-invalid"
                aria-describedby="basic-addon1"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email adress"
                required
              />
              <button onClick={handleStart} className="btn registerButton">
                Get Started
              </button>
            </div>
          ) : (
            <form className="input">
              <div className="inputdiv">
                <input
                  className="form-control is-invalid"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="inputdiv">
                <input
                  className="form-control is-invalid"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  required
                />
              </div>
              <button onClick={handleFinish} className="btn registerButton">
                Start
              </button>
            </form>
          )}
        </div>
      </div>
      <div id="page-wrapper">
        <div className="container">
          <section id="features">
            <div className="grid">
              <div className="icon">
                <Whatshot style={{ fontSize: "65px" }} />
              </div>

              <div className="desc">
                <h2>Unlimited movies, TV shows and more</h2>
                <p>
                  Watch unlimited streaming videos, movies and more anytime,
                  anywhere from any streaming device.
                </p>
              </div>
            </div>

            <div className="grid">
              <div className="icon">
                <OndemandVideo style={{ fontSize: "65px" }} />
              </div>

              <div className="desc">
                <h2>Enjoy on your TV</h2>
                <p>
                  Watch on smart TVs, Playstation, XBox, Chromcast, AppleTv,
                  Blue-ray players and more.
                </p>
              </div>
            </div>

            <div className="grid">
              <div className="icon">
                <BatteryChargingFull style={{ fontSize: "65px" }} />
              </div>

              <div className="desc">
                <h2>Download your shows to watch offline</h2>
                <p>
                  Save your favourites easily and always have something to
                  watch.
                </p>
              </div>
            </div>
          </section>

          <section id="how-it-works">
            <video
              className="video"
              controls
              src="https://rr7---sn-cxaaj5o5q5-t0a6.googlevideo.com/videoplayback?expire=1663262770&ei=0QsjY8KfMcaE8wTbgYfQAQ&ip=69.157.180.78&id=o-AOIgZfZVcFzrIBLQWUgm5puLbeMm3Ex9U7o5I02wZGSX&itag=22&source=youtube&requiressl=yes&mh=PM&mm=31%2C26&mn=sn-cxaaj5o5q5-t0a6%2Csn-vgqskned&ms=au%2Conr&mv=m&mvi=7&pcm2cms=yes&pl=24&initcwndbps=1488750&spc=yR2vp2K8pNmkS5L8sv9CznzG42dEQIg&vprv=1&mime=video%2Fmp4&ns=8f_cQiHCi9hk69EqSJBS6EgI&cnr=14&ratebypass=yes&dur=145.519&lmt=1649562077179416&mt=1663240853&fvip=5&fexp=24001373%2C24007246&c=WEB&rbqsm=fr&txp=6211224&n=x87hJcu3ssrXdw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgGUSfEp_oiAu-0m39NCRaR5BdSBOWkJ_IUJJonJRZyZUCIHTWw7yXiFnshPispAbWD9qFNmljHbrRxlMJmAdnDAfN&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgNH8A7NGtlU0iEzsKOxMv0Q19XH7azkqVoIUAT7Svv5MCIQDcavHZZNp64kikdWUCxk5fkSXJQAt9_Ee_yaCY6w9yLQ%3D%3D&title=%D0%A2%D1%80%D0%B0%D0%BD%D1%81%D1%84%D0%BE%D1%80%D0%BC%D0%B5%D1%80%D1%8B%3A%20%D0%9C%D0%B5%D1%81%D1%82%D1%8C%20%D0%BF%D0%B0%D0%B4%D1%88%D0%B8%D1%85%20(2009)%20%20-%20%D0%A0%D0%B0%D0%B7%D1%80%D1%83%D1%88%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%B0%D1%82%D0%B0%D0%BA%D0%B8%20(3%2F10)"
            ></video>
          </section>

          <section id="pricing">
            <div className="product" id="basic">
              <div className="level">Basic</div>
              <h2>$6</h2>
              <ol>
                <li>Watch on your laptop</li>
                <li>Watch on your mobile phone</li>
                <li>Unlimited movies and TV shows</li>
                <li>Cancel anytime</li>
              </ol>

              <button onClick={() => toast.error("please register first")} className="btn">Select</button>
            </div>

            <div className="product" id="standard">
              <div className="level">Standard</div>
              <h2>$9</h2>
              <ol>
                <li>HD available</li>
                <li>Watch on your mobile phone</li>
                <li>Unlimited movies and TV shows</li>
                <li>Cancel anytime</li>
              </ol>

              <button onClick={() => toast.error("please register first")} className="btn">Select</button>
            </div>

            <div className="product" id="premium">
              <div className="level">Premium</div>
              <h2>$12</h2>
              <ol>
                <li>Ultra HD available</li>
                <li>4 screens at once</li>
                <li>Unlimited movies and TV shows</li>
                <li>Cancel anytime</li>
              </ol>

              <button onClick={() => toast.error("please register first")} className="btn">Select</button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
