import "../App.css";
import { useTheme } from "@mui/material";

function loop(text, radius = 500, period = 10, count = 36, delay = 0) {
  const direction = period < 0 ? "reverse" : "normal";
  period = Math.abs(period);
  return (
    <div
      // two divs to stack animations to make the animation smoother
      // this div ramps up the speed of the animation
      // the inner div continues the animation at the same speed

      style={{
        animation: `spin ${period}s linear infinite ${
          delay + 0.5 + period * 0.5
        }s`,
        animationDirection: direction,
        position: "absolute",
        left: 0,
        right: 0,
        margin: "auto",
        height: radius * 1.6,
        fontSize: 25,
      }}
    >
      <div
        style={{
          animation: `spin ${period}s ease-${
            direction === "normal" ? "in" : "out"
          } 0.5 ${delay + 0.5}s`,
          animationDirection: direction,
          animationFillMode: "forwards",
          position: "absolute",
          left: 0,
          right: 0,
          margin: "auto",
          height: radius * 1.6,
        }}
      >
        {[...Array(count).keys()].map((degree) => (
          <div
            key={degree}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              margin: "auto",
              height: radius * 1.6,
              width: 10,
              transform: `rotate(${degree * (360 / count)}deg)`,
              transformOrigin: "50% 50%",
              opacity: 0,
              animation: `fadein 0.3s linear ${delay}s`,
              animationFillMode: "forwards",
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Spiral({ atTop, ...props }) {
  const theme = useTheme();
  return (
    <div
      className="spiral"
      style={{
        color: theme.palette.background.soft,
        opacity: atTop ? 1 : 0,
      }}
    >
      {loop(";", 500, 80, 36, 0.5)}
      {loop("</>", 400, 50, 36, 0.4)}
      {loop("()", 340, 30, 36, 0.2)}
      {loop(".", 300, 25, 36, 0.2)}
      {loop("#", 250, -23, 20, 0.1)}
    </div>
  );
}
