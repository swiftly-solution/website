---
title: MenuVerticalScrollStyle
---

```csharp
public enum MenuVerticalScrollStyle
```

## Fields

- **CenterFixed**: 1 - Attempts to always keep the selection indicator at the preset center position.
Content scrolls vertically in a circular manner around the center, allowing wrap-around display (e.g., 7 8 1 2 3).


- **LinearScroll**: 0 - Linear vertical scrolling mode where the selection indicator moves within the visible area.
Content displays linearly without wrapping, indicator adjusts position as selection changes.


- **WaitingCenter**: 2 - Waits for the selection indicator to reach the preset center, then maintains it there.
Indicator adjusts position at the edges but stays centered during mid-range vertical navigation.



