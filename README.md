# Arclight-React

My personal collection of commonly used react components using material-ui

## Installing

```
npm install arclight-react
```

## Components API

### Header

Basic website header/nav-bar

```javascript
import { Header } from "arclight-react";

<Header
  data={{
    title: "Some Title",
    links: [
      {
        cnt: <Component />,
        cb: () => console.log("Click")
      }
    ],
    logo: { src: require("./logo.png"), height: "50px" }
  }}
/>;
```

### Drawer

Slider menu that opens from the left, top, right, or bottom

```javascript
import { Drawer } from "arclight-react";

<Drawer
  direction={"left"}
  buttonText={"Open"}
  items={[
    {
      text: "Thing",
      icon: <Component />
    }
  ]}
/>;
```

### Video Loop

Responsive background video loop

```javascript
import { VideoLoop } from "arclight-react";

<div style={{ height: "500px" }}>
  <VideoLoop
    duration={12000}
    videos={require("./videos/videos.js")}
  ></VideoLoop>
</div>;
```

Video object export example (used for the 'videos' prop)

```javascript
module.exports = [
  {
    src: require("./waves.mp4"),
    type: "video/mp4"
  }
];
```

### Loader

Responsive background video loop

```javascript
import { Loader } from "arclight-react";

<div style={{ height: "500px" }}>
  <VideoLoop
    duration={12000}
    videos={require("./videos/videos.js")}
  ></VideoLoop>
</div>;
```

### Modal

Responsive background video loop

```javascript
import { Modal } from "arclight-react";

<div style={{ height: "500px" }}>
  <VideoLoop
    duration={12000}
    videos={require("./videos/videos.js")}
  ></VideoLoop>
</div>;
```

### HCard

Responsive background video loop

```javascript
import { HCard } from "arclight-react";

<HCard
  style={"a"}
  data={{
    content: [<Component />, <Component />, <Component />]
  }}
/>;
```

### FontAwesomeIcon

Responsive background video loop

```javascript
import { FontAwesomeIcon } from "arclight-react";

<FontAwesomeIcon
  style={"b"}
  data={{ img: "accusoft", type: "brands", size: "50%" }}
/>;
```

### Border

Responsive background video loop

```javascript
import { Border } from "arclight-react";

### TO BE COMPLETED ###

```

### Alert

Responsive background video loop

```javascript
import { Alert } from "arclight-react";

<Alert
  cb={() => console.log("Hello!")}
  style={"a"}
  type={"error"}
  data={{ text: "Check out this stuff!", title: "Yolo!" }}
/>;
```

### SpeedDial

Responsive background video loop

```javascript
import { SpeedDial } from "arclight-react";

<SpeedDial
  style={"a"}
  direction={"right"}
  hidden={false}
  data={[
    { icon: <Component />, name: "Copy" },
    { icon: <Component />, name: "Save" },
    { icon: <Component />, name: "Print" },
    { icon: <Component />, name: "Share" },
    { icon: <Component />, name: "Like" }
  ]}
/>;
```

## Authors

- **Broc Roberts** - [broberts2](https://github.com/broberts2)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Material-UI [Material-UI](https://material-ui.com/)
