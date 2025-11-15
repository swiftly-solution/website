---
title: InputMenuOption
---

```csharp
public sealed class InputMenuOption : MenuOptionBase, IMenuOption, IDisposable
```

#### Inheritance

#### Implements

#### Inherited Members

## Constructors

### InputMenuOption(int, Func?, string, string?, int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/InputMenuOption.cs#L40)

```csharp
public InputMenuOption(int maxLength = 16, Func<string, bool>? validator = null, string defaultValue = "", string? hintMessage = null, int updateIntervalMs = 120, int pauseIntervalMs = 1000)
```

#### Parameters

- **maxLength**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Maximum input length. Defaults to 16.
- **validator**: [Func](https://learn.microsoft.com/dotnet/api/system.func-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)>? - Optional function to validate input. Returns true if valid.
- **defaultValue**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The default input value. Defaults to empty string.
- **hintMessage**: [string](https://learn.microsoft.com/dotnet/api/system.string)? - Optional hint message to display when waiting for input. Defaults to English prompt.
- **updateIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The interval in milliseconds between text updates. Defaults to 120ms.
- **pauseIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The pause duration in milliseconds before starting the next text update cycle. Defaults to 1000ms.

#### Remarks

### InputMenuOption(string, int, Func?, string, string?, int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/InputMenuOption.cs#L74)

```csharp
public InputMenuOption(string text, int maxLength = 16, Func<string, bool>? validator = null, string defaultValue = "", string? hintMessage = null, int updateIntervalMs = 120, int pauseIntervalMs = 1000)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text content to display.
- **maxLength**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Maximum input length. Defaults to 16.
- **validator**: [Func](https://learn.microsoft.com/dotnet/api/system.func-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)>? - Optional function to validate input. Returns true if valid.
- **defaultValue**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The default input value. Defaults to empty string.
- **hintMessage**: [string](https://learn.microsoft.com/dotnet/api/system.string)? - Optional hint message to display when waiting for input. Defaults to English prompt.
- **updateIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The interval in milliseconds between text updates. Defaults to 120ms.
- **pauseIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The pause duration in milliseconds before starting the next text update cycle. Defaults to 1000ms.

## Methods

### Dispose()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/InputMenuOption.cs#L214)

```csharp
public override void Dispose()
```

### GetDisplayText(IPlayer, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/InputMenuOption.cs#L86)

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

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/InputMenuOption.cs#L104)

```csharp
public string GetValue(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player whose value to retrieve.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The current input value.

### SetValue(IPlayer, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/InputMenuOption.cs#L115)

```csharp
public bool SetValue(IPlayer player, string value)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player whose value to set.
- **value**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The value to set.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the value is valid and was set, false otherwise.

### ValueChanged

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/InputMenuOption.cs#L26)

```csharp
public event EventHandler<MenuOptionValueChangedEventArgs<string>>? ValueChanged
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionValueChangedEventArgs](/docs/api/shared/menus/menuoptionvaluechangedeventargs-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>>?

