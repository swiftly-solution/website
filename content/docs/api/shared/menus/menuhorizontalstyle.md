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

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L324)

```csharp
public MenuHorizontalStyle()
```

## Properties

### Default

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L334)

```csharp
public static MenuHorizontalStyle Default { get; }
```

#### Property Value

- [MenuHorizontalStyle](/docs/api/shared/menus/menuhorizontalstyle)

### MaxWidth

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L292)

```csharp
public required float MaxWidth { get; init; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OverflowStyle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L312)

```csharp
public MenuHorizontalOverflowStyle OverflowStyle { get; init; }
```

#### Property Value

- [MenuHorizontalOverflowStyle](/docs/api/shared/menus/menuhorizontaloverflowstyle)

### PauseTicks

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L322)

```csharp
public int PauseTicks { get; init; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TicksPerScroll

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L317)

```csharp
public int TicksPerScroll { get; init; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### ScrollLeftFade(float, int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L355)

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

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L373)

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

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L364)

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

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L382)

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

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L346)

```csharp
public static MenuHorizontalStyle TruncateBothEnds(float maxWidth)
```

#### Parameters

- **maxWidth**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [MenuHorizontalStyle](/docs/api/shared/menus/menuhorizontalstyle)

### TruncateEnd(float)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L340)

```csharp
public static MenuHorizontalStyle TruncateEnd(float maxWidth)
```

#### Parameters

- **maxWidth**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [MenuHorizontalStyle](/docs/api/shared/menus/menuhorizontalstyle)

