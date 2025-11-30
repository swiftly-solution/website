---
title: MenuOptionTextStyle
---

# Enum MenuOptionTextStyle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L415)

**Namespace**: [SwiftlyS2.Shared.Menus](/docs/api/menus)

**Assembly**: SwiftlyS2.CS2.dll

Defines the horizontal text overflow behavior for menu options.

```csharp
public enum MenuOptionTextStyle
```

## Fields

- **ScrollLeftFade**: 2 - Scrolls text to the left with fade-out effect.
Text scrolls left and gradually fades out at the left edge.


- **ScrollLeftLoop**: 4 - Scrolls text to the left in a continuous loop.
Text exits from the left edge and re-enters from the right edge.


- **ScrollRightFade**: 3 - Scrolls text to the right with fade-out effect.
Text scrolls right and gradually fades out at the right edge.


- **ScrollRightLoop**: 5 - Scrolls text to the right in a continuous loop.
Text exits from the right edge and re-enters from the left edge.


- **TruncateBothEnds**: 1 - Truncates text from both ends when it exceeds the maximum width, keeping the middle portion.
Example: "Very Long Text Item" becomes "Long Text"


- **TruncateEnd**: 0 - Truncates text at the end when it exceeds the maximum width, keeping the start portion.
Example: "Very Long Text Item" becomes "Very Long..."



