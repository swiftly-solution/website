'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Copy, Check, Pipette } from 'lucide-react';

export const ColorPicker: React.FC = () => {
  const [color, setColor] = useState('#5E98D9');
  const [hue, setHue] = useState(211);
  const [saturation, setSaturation] = useState(55);
  const [lightness, setLightness] = useState(61);
  const [copied, setCopied] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Convert hex to HSL
  const hexToHSL = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
      }
    }

    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
  };

  // Convert HSL to hex
  const hslToHex = (h: number, s: number, l: number) => {
    const hDecimal = h / 360;
    const sDecimal = s / 100;
    const lDecimal = l / 100;

    let r, g, b;

    if (sDecimal === 0) {
      r = g = b = lDecimal;
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };

      const q = lDecimal < 0.5 ? lDecimal * (1 + sDecimal) : lDecimal + sDecimal - lDecimal * sDecimal;
      const p = 2 * lDecimal - q;

      r = hue2rgb(p, q, hDecimal + 1/3);
      g = hue2rgb(p, q, hDecimal);
      b = hue2rgb(p, q, hDecimal - 1/3);
    }

    const toHex = (x: number) => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
  };

  // Update color when HSL changes
  useEffect(() => {
    const newColor = hslToHex(hue, saturation, lightness);
    setColor(newColor);
  }, [hue, saturation, lightness]);

  // Draw gradient canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Draw saturation/lightness gradient
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const s = (x / width) * 100;
        const l = 100 - (y / height) * 100;
        ctx.fillStyle = `hsl(${hue}, ${s}%, ${l}%)`;
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }, [hue, saturation, lightness]);

  const updateColorFromCanvas = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newSaturation = (x / rect.width) * 100;
    const newLightness = 100 - (y / rect.height) * 100;

    setSaturation(Math.max(0, Math.min(100, Math.round(newSaturation))));
    setLightness(Math.max(0, Math.min(100, Math.round(newLightness))));
  };

  const handleCanvasMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true);
    updateColorFromCanvas(e);
  };

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDragging) {
      updateColorFromCanvas(e);
    }
  };

  const handleCanvasMouseUp = () => {
    setIsDragging(false);
  };

  // Add global mouse up listener to handle mouse leaving canvas
  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  const handleHexChange = (hex: string) => {
    if (/^#[0-9A-F]{6}$/i.test(hex)) {
      setColor(hex.toUpperCase());
      const hsl = hexToHSL(hex);
      setHue(hsl.h);
      setSaturation(hsl.s);
      setLightness(hsl.l);
    } else {
      setColor(hex);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(color);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Silently fail
    }
  };

  return (
    <div className="not-prose my-4 rounded-lg border bg-gradient-to-br from-fd-card to-fd-muted/20 p-3 shadow-md">
      <div className="flex flex-col gap-3">
        {/* Header */}
        <div className="flex items-center gap-2">
          <Pipette className="h-3.5 w-3.5 text-fd-primary" />
          <h3 className="text-sm font-semibold">Custom Color Picker</h3>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
          {/* Color Picker Canvas */}
          <div className="space-y-3">
            <canvas
              ref={canvasRef}
              width={60}
              height={20}
              onMouseDown={handleCanvasMouseDown}
              onMouseMove={handleCanvasMouseMove}
              onMouseUp={handleCanvasMouseUp}
              className="w-full cursor-crosshair rounded-lg border shadow-sm"
              style={{ maxWidth: '100%', height: 'auto', aspectRatio: '60/20' }}
            />
            
            {/* Hue Slider */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-fd-muted-foreground">
                Hue: {hue}°
              </label>
              <input
                type="range"
                min="0"
                max="360"
                value={hue}
                onChange={(e) => setHue(parseInt(e.target.value))}
                className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: 'linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)',
                }}
              />
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col gap-3 lg:min-w-[20px]">
            {/* Color Preview */}
            <div className="rounded-lg border p-3 bg-fd-background/50 backdrop-blur-sm">
              <div
                className="h-16 w-full rounded-md border shadow-sm mb-2"
                style={{ backgroundColor: color }}
              />
              <p className="text-center text-xs font-medium text-fd-muted-foreground">
                Preview
              </p>
            </div>

            {/* Hex Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-fd-muted-foreground">
                Hex Code
              </label>
              <input
                type="text"
                value={color}
                onChange={(e) => handleHexChange(e.target.value.toUpperCase())}
                className="w-full rounded-md border bg-fd-background px-3 py-2 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-fd-primary focus:border-fd-primary transition-all"
                placeholder="#5E98D9"
              />
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 rounded-md bg-fd-primary text-fd-primary-foreground px-4 py-2 text-sm font-medium hover:bg-fd-primary/90 active:scale-95 focus:outline-none focus:ring-2 focus:ring-fd-primary transition-all"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy Hex
                </>
              )}
            </button>
          </div>
        </div>

        {/* Usage Example */}
        <div className="rounded-lg border bg-fd-background/50 backdrop-blur-sm p-3 shadow-sm">
          <div className="text-xs font-medium mb-2 text-fd-muted-foreground">Usage & Preview</div>
          <div className="space-y-2">
            <div className="rounded bg-fd-card/50 p-2.5 border text-center">
              <span style={{ color }} className="text-base font-medium">
                Sample colored text
              </span>
            </div>
            <div className="rounded bg-fd-muted/20 p-2 border-dashed border">
              <code className="text-xs font-mono">
                {`<span color="${color}">Text</span>`}
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
