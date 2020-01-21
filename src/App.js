import React from "react";
import logo from "./logo.svg";
import {
  Header,
  Drawer,
  VideoLoop,
  Loader,
  Modal,
  HCard,
  FontAwesomeIcon,
  Border,
  Alert,
  SpeedDial
} from "./components/index";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import SaveIcon from "@material-ui/icons/Save";
import PrintIcon from "@material-ui/icons/Print";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import "./App.css";

import SvgIcon from "@material-ui/core/SvgIcon";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function App() {
  return (
    <div className="App">
      <Header
        style={"a"}
        data={{
          title: "Arclight",
          links: [
            {
              cnt: <Button color="inherit">Home</Button>,
              cb: () => console.log("shalom")
            },
            {
              cnt: <Button color="inherit">Something Cool</Button>,
              cb: () => console.log("shalom")
            },
            {
              cnt: (
                <Drawer
                  style={"a"}
                  direction={"left"}
                  button={<Button color="inherit">Open</Button>}
                  items={[
                    {
                      text: "Thing",
                      icon: <InboxIcon />
                    },
                    {
                      text: "Thing2",
                      icon: <InboxIcon />
                    },
                    "divider",
                    {
                      text: "Thing",
                      icon: <InboxIcon />
                    },
                    {
                      text: "Thing2",
                      icon: <InboxIcon />
                    }
                  ]}
                />
              ),
              cb: () => console.log("shalom")
            }
          ],
          logo: { src: require("./logo.png"), height: "50px" }
        }}
      />
      <HCard
        style={"a"}
        data={{
          content: [
            <img src={require("./img.jpg")} style={{ borderRadius: "5px" }} />,
            <div>
              <FontAwesomeIcon
                style={"b"}
                data={{ img: "comments", size: "25%" }}
              />
              <h1>Check out this really cool stuff!</h1>
              <h2>Demontstration of Arclight.cc</h2>
            </div>
          ]
        }}
      />
      <HCard
        style={"a"}
        data={{
          content: [
            <div>
              <FontAwesomeIcon
                style={"b"}
                data={{ img: "accusoft", type: "brands", size: "50%" }}
              />
            </div>,
            <div>
              <FontAwesomeIcon
                style={"b"}
                data={{ img: "comments-dollar", size: "50%" }}
              />
            </div>,
            <div>
              <FontAwesomeIcon
                style={"b"}
                data={{ img: "dice-d6", size: "50%" }}
              />
            </div>,
            <div>
              <img src={require("./img.jpg")} style={{ borderRadius: "5px" }} />
            </div>
          ]
        }}
      />
      <Alert
        cb={() => console.log("shalom")}
        style={"a"}
        type={"error"}
        data={{ text: "Check out this stuff!", title: "Yolo!" }}
      />
      <SpeedDial
        style={"a"}
        direction={"left"}
        hidden={false}
        data={[
          { icon: <FileCopyIcon />, name: "Copy" },
          { icon: <SaveIcon />, name: "Save" },
          { icon: <PrintIcon />, name: "Print" },
          { icon: <ShareIcon />, name: "Share" },
          { icon: <FavoriteIcon />, name: "Like" }
        ]}
      />
      <SpeedDial
        style={"a"}
        direction={"left"}
        hidden={false}
        data={[
          { icon: <FileCopyIcon />, name: "Copy" },
          { icon: <SaveIcon />, name: "Save" },
          { icon: <PrintIcon />, name: "Print" },
          { icon: <ShareIcon />, name: "Share" },
          { icon: <FavoriteIcon />, name: "Like" }
        ]}
      />
    </div>
  );
}

export default App;
