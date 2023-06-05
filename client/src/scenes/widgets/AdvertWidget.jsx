import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>
          <a href="https://sourav4u.in" color={main}>sourav4u.in</a>
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/mern-logo.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Web Solutions</Typography>
        <Typography color={medium}>
          <a href="https://sourav4u.in" color={main}>sourav4u.in</a>
        </Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Design and build applications based on wireframes and product requirements documents. Work on back-end & front-end development of core scripts using NodeJS/ MongoDB/React.js/Express /Redux Toolkit.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
