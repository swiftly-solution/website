---
title: SliderMenuOption
---

```csharp
public sealed class SliderMenuOption : MenuOptionBase, IMenuOption, IDisposable
```

#### Inheritance

#### Implements

#### Inherited Members

## Constructors

### SliderMenuOption(float, float, float?, float, int, int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/SliderMenuOption.cs#L49)

```csharp
public SliderMenuOption(float min = 0, float max = 100, float? defaultValue = null, float step = 5, int totalBars = 10, int updateIntervalMs = 120, int pauseIntervalMs = 1000)
```

#### Parameters

- **min**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The minimum value. Defaults to 0.
- **max**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The maximum value. Defaults to 100.
- **defaultValue**: [float](https://learn.microsoft.com/dotnet/api/system.single)? - The default starting value. Defaults to the minimum value.
- **step**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The increment/decrement step. Defaults to 5.
- **totalBars**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The number of visual bars to display. Defaults to 10.
- **updateIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The interval in milliseconds between text updates. Defaults to 120ms.
- **pauseIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The pause duration in milliseconds before starting the next text update cycle. Defaults to 1000ms.

#### Remarks

### SliderMenuOption(string, float, float, float?, float, int, int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/SliderMenuOption.cs#L98)

```csharp
public SliderMenuOption(string text, float min = 0, float max = 100, float? defaultValue = null, float step = 5, int totalBars = 10, int updateIntervalMs = 120, int pauseIntervalMs = 1000)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text content to display.
- **min**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The minimum value. Defaults to 0.
- **max**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The maximum value. Defaults to 100.
- **defaultValue**: [float](https://learn.microsoft.com/dotnet/api/system.single)? - The default starting value. Defaults to the minimum value.
- **step**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The increment/decrement step. Defaults to 5.
- **totalBars**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The number of visual bars to display. Defaults to 10.
- **updateIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The interval in milliseconds between text updates. Defaults to 120ms.
- **pauseIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The pause duration in milliseconds before starting the next text update cycle. Defaults to 1000ms.

## Properties

### Max

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/SliderMenuOption.cs#L24)

```csharp
public float Max { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Min

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/SliderMenuOption.cs#L19)

```csharp
public float Min { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Step

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/SliderMenuOption.cs#L29)

```csharp
public float Step { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### GetDisplayText(IPlayer, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/SliderMenuOption.cs#L111)

```csharp
public override string GetDisplayText(IPlayer player, int displayLine = 0)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player requesting the display text.
- **displayLine**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The display line index of the option.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The formatted display text for the option.

#### Remarks

### GetValue(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/SliderMenuOption.cs#L132)

```csharp
public float GetValue(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player whose value to retrieve.

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single) - The current slider value.

### SetValue(IPlayer, float)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/SliderMenuOption.cs#L142)

```csharp
public void SetValue(IPlayer player, float value)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player whose value to set.
- **value**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The value to set. Will be clamped between Min and Max.

### ValueChanged

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/SliderMenuOption.cs#L34)

```csharp
public event EventHandler<MenuOptionValueChangedEventArgs<float>>? ValueChanged
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionValueChangedEventArgs](/docs/api/shared/menus/menuoptionvaluechangedeventargs-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>>?

