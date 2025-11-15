---
title: ChoiceMenuOption
---

```csharp
public sealed class ChoiceMenuOption : MenuOptionBase, IMenuOption, IDisposable
```

#### Inheritance

#### Implements

#### Inherited Members

## Constructors

### ChoiceMenuOption(IEnumerable, string?, int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ChoiceMenuOption.cs#L36)

```csharp
public ChoiceMenuOption(IEnumerable<string> choices, string? defaultChoice = null, int updateIntervalMs = 120, int pauseIntervalMs = 1000)
```

#### Parameters

- **choices**: [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)> - The list of available choices.
- **defaultChoice**: [string](https://learn.microsoft.com/dotnet/api/system.string)? - The default choice to select. If null or not found, defaults to first choice.
- **updateIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The interval in milliseconds between text updates. Defaults to 120ms.
- **pauseIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The pause duration in milliseconds before starting the next text update cycle. Defaults to 1000ms.

#### Remarks

### ChoiceMenuOption(string, IEnumerable, string?, int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ChoiceMenuOption.cs#L65)

```csharp
public ChoiceMenuOption(string text, IEnumerable<string> choices, string? defaultChoice = null, int updateIntervalMs = 120, int pauseIntervalMs = 1000)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text content to display.
- **choices**: [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)> - The list of available choices.
- **defaultChoice**: [string](https://learn.microsoft.com/dotnet/api/system.string)? - The default choice to select. If null or not found, defaults to first choice.
- **updateIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The interval in milliseconds between text updates. Defaults to 120ms.
- **pauseIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The pause duration in milliseconds before starting the next text update cycle. Defaults to 1000ms.

## Properties

### Choices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ChoiceMenuOption.cs#L19)

```csharp
public IReadOnlyList<string> Choices { get; }
```

#### Property Value

- [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

## Methods

### GetDisplayText(IPlayer, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ChoiceMenuOption.cs#L75)

```csharp
public override string GetDisplayText(IPlayer player, int displayLine = 0)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player requesting the display text.
- **displayLine**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The display line index of the option.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The formatted display text for the option.

#### Remarks

### GetSelectedChoice(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ChoiceMenuOption.cs#L88)

```csharp
public string GetSelectedChoice(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player whose selected choice to retrieve.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The currently selected choice string.

### SetSelectedChoice(IPlayer, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ChoiceMenuOption.cs#L99)

```csharp
public void SetSelectedChoice(IPlayer player, string choice)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player whose choice to set.
- **choice**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The choice to select. Must exist in the <xref href="SwiftlyS2.Core.Menus.OptionsBase.ChoiceMenuOption.Choices" data-throw-if-not-resolved="false"></xref> list.

### ValueChanged

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ChoiceMenuOption.cs#L24)

```csharp
public event EventHandler<MenuOptionValueChangedEventArgs<string>>? ValueChanged
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionValueChangedEventArgs](/docs/api/shared/menus/menuoptionvaluechangedeventargs-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>>?

