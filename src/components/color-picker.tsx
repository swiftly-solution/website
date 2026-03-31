'use client';

import React, { useState } from 'react';
import { Copy, Check, Pipette } from 'lucide-react';

export const ColorPicker: React.FC = () => {
  const [color, setColor] = useState('#5E98D9');
  const [copied, setCopied] = useState(false);

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
    <div className="not-prose my-4 rounded-lg border bg-gradient-to-br from-fd-card to-fd-muted/20 p-4 shadow-md">
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center gap-2">
          <Pipette className="h-4 w-4 text-fd-primary" />
          <h3 className="text-base font-semibold">Custom Color Picker</h3>
        </div>

        {/* Color Input Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="color-picker" className="text-xs font-medium text-fd-muted-foreground">
              Pick Color
            </label>
            <input
              id="color-picker"
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value.toUpperCase())}
              className="h-11 w-20 cursor-pointer rounded-md border shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
            />
          </div>
          
          <div className="flex flex-1 flex-col gap-2 w-full">
            <label htmlFor="hex-input" className="text-xs font-medium text-fd-muted-foreground">
              Hex Code
            </label>
            <div className="flex gap-2">
              <input
                id="hex-input"
                type="text"
                value={color}
                onChange={(e) => {
                  const value = e.target.value.toUpperCase();
                  if (/^#[0-9A-F]{0,6}$/.test(value)) {
                    setColor(value);
                  }
                }}
                className="flex-1 rounded-md border bg-fd-background px-3 py-2 font-mono text-sm font-medium focus:outline-none focus:ring-2 focus:ring-fd-primary focus:border-fd-primary transition-all"
                placeholder="#5E98D9"
              />
              <button
                onClick={handleCopy}
                className="inline-flex items-center justify-center rounded-md border bg-fd-primary text-fd-primary-foreground px-3 py-2 text-xs font-medium hover:bg-fd-primary/90 focus:outline-none focus:ring-2 focus:ring-fd-primary transition-all active:scale-95"
                title="Copy hex code"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 sm:mr-1" />
                    <span className="hidden sm:inline">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 sm:mr-1" />
                    <span className="hidden sm:inline">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="rounded-lg border bg-fd-background/50 backdrop-blur-sm p-3 shadow-sm">
          <div className="text-xs font-medium mb-2 text-fd-muted-foreground">Preview</div>
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
