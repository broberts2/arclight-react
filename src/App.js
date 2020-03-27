import React, { useState } from "react";
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
  SpeedDial,
  VideoButton,
  Table,
  Calendar,
  VideoPlayer,
  Particles,
  ResponsiveBackground
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
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <Header
        style={"c"}
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
          ]
        }}
      />
      <div style={{ height: "500px" }}>
        <VideoLoop
          duration={12000}
          videos={require("./videos/videos.js")}
        ></VideoLoop>
      </div>
      <HCard
        style={"a"}
        data={{
          content: [
            <img src={require("./img.jpg")} style={{ borderRadius: "5px" }} />,
            <div>
              <FontAwesomeIcon
                style={"a"}
                data={{ img: "accusoft", type: "brands", size: "50%" }}
              />
              <h1>This is a sample title</h1>
              <h2>Demontstration of responive component design</h2>
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
                style={"a"}
                data={{ img: "accusoft", type: "brands", size: "50%" }}
              />
            </div>,
            <div>
              <FontAwesomeIcon
                style={"a"}
                data={{ img: "accusoft", type: "brands", size: "50%" }}
              />
            </div>,
            <div>
              <img src={require("./img.jpg")} style={{ borderRadius: "5px" }} />
            </div>
          ]
        }}
      />
      <HCard
        style={"a"}
        data={{
          content: [
            <VideoButton
              style={"a"}
              data={{
                src: require("./abstract_iris.mp4"),
                type: "video/webm",
                cnt: (
                  <FontAwesomeIcon
                    style={"a"}
                    color={"white"}
                    data={{ img: "accusoft", type: "brands", size: "25%" }}
                  />
                )
              }}
            />,
            <VideoButton
              style={"c"}
              pos={"top"}
              data={{
                src: require("./abstract_blue.mp4"),
                type: "video/webm",
                cnt: (
                  <div
                    style={{
                      width: "100%",
                      height: "80px",
                      backgroundColor: "red"
                    }}
                  />
                )
              }}
            />,
            <VideoButton
              style={"a"}
              data={{
                src: require("./abstract_golden.mp4"),
                type: "video/webm",
                cnt: (
                  <FontAwesomeIcon
                    style={"a"}
                    color={"white"}
                    data={{ img: "accusoft", type: "brands", size: "50%" }}
                  />
                )
              }}
            />,
            <VideoButton
              style={"a"}
              data={{
                src: require("./abstract_white.mp4"),
                type: "video/webm",
                cnt: (
                  <FontAwesomeIcon
                    style={"a"}
                    color={"white"}
                    data={{ img: "accusoft", type: "brands", size: "50%" }}
                  />
                )
              }}
            />
          ]
        }}
      />
      <Alert
        cb={() => console.log("shalom")}
        style={"a"}
        type={"success"}
        data={{ text: "Check out this stuff!", title: "Yolo!" }}
      />
      <SpeedDial
        style={"a"}
        direction={"right"}
        hidden={false}
        data={[
          { icon: <FileCopyIcon />, name: "Copy" },
          { icon: <SaveIcon />, name: "Save" },
          { icon: <PrintIcon />, name: "Print" },
          { icon: <ShareIcon />, name: "Share" },
          { icon: <FavoriteIcon />, name: "Like" }
        ]}
      />
      <Table
        style={"a"}
        title={"Market Analysis"}
        headCells={[
          {
            id: "item",
            numeric: false,
            label: "Stock"
          },
          {
            id: "openingPrice",
            numeric: true,
            label: "Opening Price USD",
            format: "usd"
          },
          {
            id: "closingPrice",
            numeric: true,
            label: "Closing Price USD",
            format: "usd"
          },
          {
            id: "profitLoss",
            numeric: true,
            label: "Profit / Loss",
            format: "usd"
          },
          {
            id: "profitLossPercentage",
            numeric: true,
            label: "Profit / Loss",
            format: "percentage"
          }
        ]}
        data={[
          {
            item: "Microsoft (MSFT)",
            openingPrice: 305,
            closingPrice: 3.7,
            profitLoss: -1 * (305 - 3.7),
            profitLossPercentage: (305 / 3.7) * -1
          },
          {
            item: "Ford (F)",
            openingPrice: 25,
            closingPrice: 452,
            profitLoss: -1 * (25 - 452),
            profitLossPercentage: 452 / 25
          },
          {
            item: "AT&T (T)",
            openingPrice: 262,
            closingPrice: 260,
            profitLoss: -1 * (262 - 260),
            profitLossPercentage: (1 - 260 / 262) * -1
          }
        ]}
        dial={
          <SpeedDial
            style={"a"}
            direction={"left"}
            hidden={false}
            data={[
              {
                icon: <FileCopyIcon onClick={data => console.log(data)} />,
                name: "Copy"
              },
              {
                icon: <SaveIcon onClick={data => console.log(data)} />,
                name: "Save"
              },
              {
                icon: <PrintIcon onClick={data => console.log(data)} />,
                name: "Print"
              },
              {
                icon: <ShareIcon onClick={data => console.log(data)} />,
                name: "Share"
              },
              {
                icon: <FavoriteIcon onClick={data => console.log(data)} />,
                name: "Like"
              }
            ]}
          />
        }
        selectionDial={
          <SpeedDial
            style={"a"}
            palette={"a"}
            direction={"left"}
            hidden={false}
            data={[
              {
                icon: <FileCopyIcon onClick={data => console.log(data)} />,
                name: "Copy"
              },
              {
                icon: <SaveIcon onClick={data => console.log(data)} />,
                name: "Save"
              }
            ]}
          />
        }
      />
      <Calendar style={"a"} />
      <button onClick={() => setShowModal(true)}>Modal</button>
      <Modal
        close={() => setShowModal(false)}
        visible={showModal}
        style={"a"}
        header={
          <div className={"img"}>
            <img src={"https://titan-esports.org/teslogo.png"} />
          </div>
        }
        content={
          <div
            style={{ width: "100%", height: "100%", backgroundColor: "blue" }}
          />
        }
        animation={"fadeInUp"}
      />
      <div style={{ width: "700px" }}>
        <VideoPlayer
          id={"vid1"}
          style={"a"}
          title={"Video Title2"}
          src={require("./Aimer - Ninelie.mp4")}
        />
      </div>
      <Particles style={"a"} />
      <ResponsiveBackground
        style={"a"}
        background={<Particles style={"a"} />}
        id={"bg1"}
      />
    </div>
  );
}

export default App;
