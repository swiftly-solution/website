---
title: MenuOptionScrollStyle
---

```csharp
public enum MenuOptionScrollStyle
```

## Fields

- **CenterFixed**: 1 - The selection indicator always stays in the center position.
Menu options scroll circularly around it, wrapping from bottom to top (e.g., ...7, 8, 1, 2, 3...).


- **LinearScroll**: 0 - The selection indicator moves up and down through the visible menu area.
The menu content stays fixed until the indicator reaches the edge.


- **WaitingCenter**: 2 - The selection indicator moves until it reaches the center, then stays there.
At the top and bottom edges, the indicator can move away from center.



