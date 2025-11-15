---
title: ToggleMenuOption
---

```csharp
public sealed class ToggleMenuOption : MenuOptionBase, IMenuOption, IDisposable
```

#### Inheritance

#### Implements

#### Inherited Members

## Constructors

### ToggleMenuOption(bool, string?, string?, int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ToggleMenuOption.cs#L33)

```csharp
public ToggleMenuOption(bool defaultToggleState = true, string? toggleOnSymbol = null, string? toggleOffSymbol = null, int updateIntervalMs = 120, int pauseIntervalMs = 1000)
```

#### Parameters

- **defaultToggleState**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - The default toggle state for new players. Defaults to true.
- **toggleOnSymbol**: [string](https://learn.microsoft.com/dotnet/api/system.string)? - The HTML symbol to display when toggle is on. Defaults to green checkmark.
- **toggleOffSymbol**: [string](https://learn.microsoft.com/dotnet/api/system.string)? - The HTML symbol to display when toggle is off. Defaults to red X mark.
- **updateIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The interval in milliseconds between text updates. Defaults to 120ms.
- **pauseIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The pause duration in milliseconds before starting the next text update cycle. Defaults to 1000ms.

#### Remarks

### ToggleMenuOption(string, bool, string?, string?, int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ToggleMenuOption.cs#L59)

```csharp
public ToggleMenuOption(string text, bool defaultToggleState = true, string? toggleOnSymbol = null, string? toggleOffSymbol = null, int updateIntervalMs = 120, int pauseIntervalMs = 1000)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text content to display.
- **defaultToggleState**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - The default toggle state for new players. Defaults to true.
- **toggleOnSymbol**: [string](https://learn.microsoft.com/dotnet/api/system.string)? - The HTML symbol to display when toggle is on. Defaults to green checkmark.
- **toggleOffSymbol**: [string](https://learn.microsoft.com/dotnet/api/system.string)? - The HTML symbol to display when toggle is off. Defaults to red X mark.
- **updateIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The interval in milliseconds between text updates. Defaults to 120ms.
- **pauseIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The pause duration in milliseconds before starting the next text update cycle. Defaults to 1000ms.

## Methods

### GetDisplayText(IPlayer, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ToggleMenuOption.cs#L76)

```csharp
public override string GetDisplayText(IPlayer player, int displayLine = 0)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player viewing the option.
- **displayLine**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The display line number (not used in this implementation).

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The formatted display text with toggle state indicator.

### GetToggleState(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ToggleMenuOption.cs#L88)

```csharp
public bool GetToggleState(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player whose toggle state to retrieve.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if toggled on, false if toggled off. Uses the configured default value for new players.

### SetToggleState(IPlayer, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ToggleMenuOption.cs#L99)

```csharp
public bool SetToggleState(IPlayer player, bool value)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player whose toggle state to set.
- **value**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - The toggle state to set.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the value was changed, false if it was already the same value.

### ValueChanged

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ToggleMenuOption.cs#L20)

```csharp
public event EventHandler<MenuOptionValueChangedEventArgs<bool>>? ValueChanged
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionValueChangedEventArgs](/docs/api/shared/menus/menuoptionvaluechangedeventargs-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)>>?

