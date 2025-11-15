---
title: ProgressBarMenuOption
---

```csharp
public sealed class ProgressBarMenuOption : MenuOptionBase, IMenuOption, IDisposable
```

#### Inheritance

#### Implements

#### Inherited Members

## Constructors

### ProgressBarMenuOption(Func, bool, bool, string, string, int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ProgressBarMenuOption.cs#L42)

```csharp
public ProgressBarMenuOption(Func<float> progressProvider, bool multiLine = false, bool showPercentage = true, string filledChar = "█", string emptyChar = "░", int updateIntervalMs = 120, int pauseIntervalMs = 1000)
```

#### Parameters

- **progressProvider**: [Func](https://learn.microsoft.com/dotnet/api/system.func-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)> - Function that returns progress value (0.0 to 1.0).
- **multiLine**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - If true, uses 2 lines; if false, uses 1 line. Defaults to false.
- **showPercentage**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Whether to show percentage text. Defaults to true.
- **filledChar**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Character for filled portion. Defaults to "█".
- **emptyChar**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Character for empty portion. Defaults to "░".
- **updateIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The interval in milliseconds between text updates. Defaults to 120ms.
- **pauseIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The pause duration in milliseconds before starting the next text update cycle. Defaults to 1000ms.

#### Remarks

### ProgressBarMenuOption(string, Func, bool, bool, string, string, int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ProgressBarMenuOption.cs#L73)

```csharp
public ProgressBarMenuOption(string text, Func<float> progressProvider, bool multiLine = false, bool showPercentage = true, string filledChar = "█", string emptyChar = "░", int updateIntervalMs = 120, int pauseIntervalMs = 1000)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text content to display.
- **progressProvider**: [Func](https://learn.microsoft.com/dotnet/api/system.func-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)> - Function that returns progress value (0.0 to 1.0).
- **multiLine**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - If true, uses 2 lines; if false, uses 1 line. Defaults to false.
- **showPercentage**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Whether to show percentage text. Defaults to true.
- **filledChar**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Character for filled portion. Defaults to "█".
- **emptyChar**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Character for empty portion. Defaults to "░".
- **updateIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The interval in milliseconds between text updates. Defaults to 120ms.
- **pauseIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The pause duration in milliseconds before starting the next text update cycle. Defaults to 1000ms.

## Properties

### BarWidth

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ProgressBarMenuOption.cs#L20)

```csharp
public int BarWidth { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LineCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ProgressBarMenuOption.cs#L27)

```csharp
public override int LineCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ShowPercentage

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ProgressBarMenuOption.cs#L25)

```csharp
public bool ShowPercentage { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### GetDisplayText(IPlayer, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ProgressBarMenuOption.cs#L86)

```csharp
public override string GetDisplayText(IPlayer player, int displayLine = 0)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player requesting the display text.
- **displayLine**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The display line index of the option.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The formatted display text for the option.

#### Remarks

### GetProgress(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ProgressBarMenuOption.cs#L124)

```csharp
public float GetProgress(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player whose progress to retrieve.

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single) - The current progress value (0.0 to 1.0).

### SetProgressProvider(IPlayer, Func)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ProgressBarMenuOption.cs#L114)

```csharp
public void SetProgressProvider(IPlayer player, Func<float> progressProvider)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player whose progress provider to set.
- **progressProvider**: [Func](https://learn.microsoft.com/dotnet/api/system.func-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)> - Function that returns progress value (0.0 to 1.0).

