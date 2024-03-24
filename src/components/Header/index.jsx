import { Box, Paper } from "@mui/material";
import { useMemo } from "react";

import useAppContextContext from "../../context/useAppContextContext";
import PreviewGradient from "../PreviewGradient";
import getCssGradient from "../../utils/getCssGradient";
import { fonts } from "../../constants/fonts";

const sxPreviewGradient = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: "0",
  left: "0",
};

const Header = () => {
  const { values } = useAppContextContext();
  const {
    text: { title },
  } = values;

  const sx = useMemo(() => {
    const styles = {
      position: "relative",
      padding: 3,
      minHeight: "350px",
      width: "100%",
      display: "flex",
    };

    if (values.text !== "") {
      styles.justifyContent = values.text.justifyContent;
      styles.alignItems = values.text.alignItems;
    }

    if (values.background.color) {
      styles.backgroundColor = values.background.color;
    }

    if (values.background.url) {
      styles.background = `url(${values.background.url}) ${styles.backgroundColor || ""}`;
      styles.backgroundRepeat = values.background.repeat;
      styles.backgroundPosition = values.background.position;
      styles.backgroundSize = values.background.size;
      styles.backgroundClip = values.background.clip;
    }

    return styles;
  }, [values]);

  const sxText = useMemo(() => {
    const styles = {
      zIndex: 1,
    };

    if (values.text !== "") {
      styles.fontFamily = fonts[values.text.fontFamily]?.fontFamily || undefined;
      styles.fontSize = `${values.text.size}px`;
      styles.color = values.text.color;
      if (values.text.format?.includes("bold")) {
        styles.fontWeight = 800;
      }
      if (values.text.format?.includes("italic")) {
        styles.fontStyle = "italic";
      }
      if (values.text.format?.includes("underline")) {
        styles.textDecoration = "underline";
      }

      if (["image", "gradient"].includes(values.text.backgroundClip.type)) {
        styles.color = "transparent";
        styles.backgroundClip = "text";
        if (values.text.backgroundClip.type === "image") {
          styles.background = `url(${values.text.backgroundClip.image}) text`;
        }
        if (values.text.backgroundClip.type === "gradient") {
          styles.background = `${getCssGradient(
            values.text.backgroundClip.gradient
          )} text`;
        }
      }
    }

    return styles;
  }, [values]);

  return (
    <Paper sx={sx}>
      {values.gradients?.map((config, index) => (
        <PreviewGradient config={config} sx={sxPreviewGradient} key={index} />
      ))}
      {title && title !== "" && <Box style={sxText}>{title}</Box>}
    </Paper>
  );
};

export default Header;
