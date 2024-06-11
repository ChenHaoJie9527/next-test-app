"use client";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import logoSrc from "../../../static/logo.svg";
import qrSrc from "../../../static/qr.svg";
import Image from "next/image";
interface ShareProps {
  target?: React.RefObject<HTMLElement>;
}
const Watermark = () => (
  <div className="flex w-full min-w-[800px] items-center justify-between">
    <div>
      <Image src="/static/logo.svg" width={98} height={43} alt="" />
      <p>Web3 AI Search</p>
    </div>
    <div>
      <p>beta.doogo.ai</p>
      <Image src="/static/qr.svg" width={62} height={62} alt="" />
    </div>
  </div>
);

export default function ShareHtml({ target }: ShareProps) {
  const [isCapturing, setIsCapturing] = useState(false);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const [watermarkCanvas, setWatermarkCanvas] =
    useState<HTMLCanvasElement | null>(null);

  const renderWatermarkCanvas = async () => {
    const watermarkElement = watermarkRef.current;
    console.log('watermarkElement =>', watermarkElement);
    if (watermarkElement) {
      watermarkElement.style.visibility = "visible";
      const canvas = await html2canvas(watermarkElement);
      watermarkElement.style.visibility = "hidden";
      if (canvas.width > 0 && canvas.height > 0) {
        setWatermarkCanvas(canvas);
      } else {
        console.error("Rendered watermark canvas has zero width or height.");
      }
    }
  };

  useLayoutEffect(() => {
    renderWatermarkCanvas();
  }, []);

  const onShare = async () => {
    setIsCapturing(true);
    try {
      const targetElement = target?.current;
      if (!targetElement) {
        throw new Error("Target element not found");
      }

      const originalCanvas = await html2canvas(targetElement);
      const originalWidth = originalCanvas.width;
      const originalHeight = originalCanvas.height;

      if (!watermarkCanvas) {
        throw new Error("Watermark canvas not available");
      }

      const watermarkHeight = watermarkCanvas.height;

      // Create a new canvas to merge both
      const newCanvas = document.createElement("canvas");
      newCanvas.width = Math.max(originalWidth, 800);
      newCanvas.height = originalHeight + watermarkHeight;
      const ctx = newCanvas.getContext("2d");

      if (!ctx) {
        throw new Error("Failed to get canvas context");
      }

      // Draw the original canvas onto the new canvas
      ctx.drawImage(originalCanvas, 0, 0);

      // Draw the watermark canvas below the original canvas
      ctx.drawImage(watermarkCanvas, 0, originalHeight);

      // Convert the new canvas to an image
      const img = newCanvas.toDataURL("image/png");

      // Create a download link and trigger download
      const a = document.createElement("a");
      a.href = img;
      a.download = "test.png";
      a.click();
    } catch (error) {
      console.error("Failed to capture and download image:", error);
    } finally {
      setIsCapturing(false);
    }
  };

  return (
    <div className=" relative" >
      <div ref={watermarkRef} style={{ visibility: "hidden", position: "absolute", top: "-9999px" }}>
        <Watermark />
      </div>
      <Button onClick={onShare} disabled={isCapturing}>
        {isCapturing ? "Sharing..." : "Share"}
      </Button>
    </div>
  );
}
