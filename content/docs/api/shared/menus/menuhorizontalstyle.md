---
title: MenuHorizontalStyle
---

```csharp
public readonly record struct MenuHorizontalStyle : IEquatable<MenuHorizontalStyle>
```

#### Implements

#### Inherited Members

## Constructors

### MenuHorizontalStyle()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L321)

```csharp
public MenuHorizontalStyle()
```

## Properties

### Default

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L331)

```csharp
public static MenuHorizontalStyle Default { get; }
```

#### Property Value

- [MenuHorizontalStyle](/docs/api/shared/menus/menuhorizontalstyle)

### MaxWidth

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L291)

```csharp
public required float MaxWidth { get; init; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OverflowStyle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L309)

```csharp
public MenuHorizontalOverflowStyle OverflowStyle { get; init; }
```

#### Property Value

- [MenuHorizontalOverflowStyle](/docs/api/shared/menus/menuhorizontaloverflowstyle)

### PauseTicks

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L319)

```csharp
public int PauseTicks { get; init; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TicksPerScroll

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L314)

```csharp
public int TicksPerScroll { get; init; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### ScrollLeftFade(float, int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L352)

```csharp
public static MenuHorizontalStyle ScrollLeftFade(float maxWidth, int ticksPerScroll = 16, int pauseTicks = 0)
```

#### Parameters

- **maxWidth**: [float](https://learn.microsoft.com/dotnet/api/system.single) - Maximum display width for text.
- **ticksPerScroll**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Number of ticks before scrolling by one character.
- **pauseTicks**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Number of ticks to pause after completing one scroll loop.

#### Returns

- [MenuHorizontalStyle](/docs/api/shared/menus/menuhorizontalstyle)

### ScrollLeftLoop(float, int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L370)

```csharp
public static MenuHorizontalStyle ScrollLeftLoop(float maxWidth, int ticksPerScroll = 16, int pauseTicks = 0)
```

#### Parameters

- **maxWidth**: [float](https://learn.microsoft.com/dotnet/api/system.single) - Maximum display width for text.
- **ticksPerScroll**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Number of ticks before scrolling by one character.
- **pauseTicks**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Number of ticks to pause after completing one scroll loop.

#### Returns

- [MenuHorizontalStyle](/docs/api/shared/menus/menuhorizontalstyle)

### ScrollRightFade(float, int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L361)

```csharp
public static MenuHorizontalStyle ScrollRightFade(float maxWidth, int ticksPerScroll = 16, int pauseTicks = 0)
```

#### Parameters

- **maxWidth**: [float](https://learn.microsoft.com/dotnet/api/system.single) - Maximum display width for text.
- **ticksPerScroll**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Number of ticks before scrolling by one character.
- **pauseTicks**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Number of ticks to pause after completing one scroll loop.

#### Returns

- [MenuHorizontalStyle](/docs/api/shared/menus/menuhorizontalstyle)

### ScrollRightLoop(float, int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L379)

```csharp
public static MenuHorizontalStyle ScrollRightLoop(float maxWidth, int ticksPerScroll = 16, int pauseTicks = 0)
```

#### Parameters

- **maxWidth**: [float](https://learn.microsoft.com/dotnet/api/system.single) - Maximum display width for text.
- **ticksPerScroll**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Number of ticks before scrolling by one character.
- **pauseTicks**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Number of ticks to pause after completing one scroll loop.

#### Returns

- [MenuHorizontalStyle](/docs/api/shared/menus/menuhorizontalstyle)

### TruncateBothEnds(float)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L343)

```csharp
public static MenuHorizontalStyle TruncateBothEnds(float maxWidth)
```

#### Parameters

- **maxWidth**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [MenuHorizontalStyle](/docs/api/shared/menus/menuhorizontalstyle)

### TruncateEnd(float)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L337)

```csharp
public static MenuHorizontalStyle TruncateEnd(float maxWidth)
```

#### Parameters

- **maxWidth**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [MenuHorizontalStyle](/docs/api/shared/menus/menuhorizontalstyle)

