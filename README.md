# Arclight-React

My personal collection of commonly used react components using material-ui

## Installing

```
npm install arclight-react
```

## Color Reference

Available Color Props for All Components

| Props | Description                     |
| ----- | ------------------------------- |
| dark  | Dark theme with lightened text. |
| light | Light theme with darkened text. |

## Components API

### HoverCard

Description

#### Props

| Props                   | Description                                           |
| ----------------------- | ----------------------------------------------------- |
| front                   | Accepts jsx or component to build front card display. |
| back                    | Accepts jsx or component to build back card display.  |
| size                    | Width and Height of the card component.               |
| theme                   | Describes the color palette.                          |
| flipSpeed (optional)    | How fast the flip animation is. 1s by default.        |
| borderRadius (optional) | Border radius of card edges.                          |

```javascript
import { HoverCard } from "./components/index";

<HoverCard
  theme={"dark"}
  front={<img src={require("./img_avatar.png")} />}
  size={{ width: "300px", height: "300px" }}
  back={
    <div>
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  }
/>;
```

## Authors

- **Broc Roberts** - [broberts2](https://github.com/broberts2)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Material-UI [Material-UI](https://material-ui.com/)
