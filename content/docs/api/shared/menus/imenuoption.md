---
title: IMenuOption
---

```csharp
public interface IMenuOption : IDisposable
```

#### Implements

## Properties

### CloseAfterClick

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L182)

```csharp
bool CloseAfterClick { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Enabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L177)

```csharp
bool Enabled { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

### LineCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L148)

```csharp
int LineCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MaxWidth

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L161)

```csharp
float MaxWidth { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Menu

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L143)

```csharp
IMenuAPI? Menu { get; }
```

#### Property Value

- [IMenuAPI](/docs/api/shared/menus/imenuapi)?

#### Remarks

### PlaySound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L202)

```csharp
bool PlaySound { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Tag

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L187)

```csharp
object? Tag { get; set; }
```

#### Property Value

- [object](https://learn.microsoft.com/dotnet/api/system.object)?

### Text

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L156)

```csharp
string Text { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

### TextSize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L192)

```csharp
MenuOptionTextSize TextSize { get; set; }
```

#### Property Value

- [MenuOptionTextSize](/docs/api/shared/menus/menuoptiontextsize)

### TextStyle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L197)

```csharp
MenuOptionTextStyle TextStyle { get; set; }
```

#### Property Value

- [MenuOptionTextStyle](/docs/api/shared/menus/menuoptiontextstyle)

### Visible

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L169)

```csharp
bool Visible { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

## Methods

### GetDisplayText(IPlayer, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L320)

```csharp
string GetDisplayText(IPlayer player, int displayLine = 0)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player requesting the display text.
- **displayLine**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The display line index of the option.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The formatted display text for the option.

#### Remarks

### GetEnabled(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L273)

```csharp
bool GetEnabled(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to check enabled state for.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the option is enabled for the player, otherwise, false.

### GetVisible(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L256)

```csharp
bool GetVisible(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to check visibility for.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the option is visible to the player, otherwise, false.

### IsClickTaskCompleted(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L249)

```csharp
bool IsClickTaskCompleted(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to check.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the click task is completed; otherwise, false.

### OnClickAsync(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L342)

```csharp
ValueTask OnClickAsync(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player who clicked the option.

#### Returns

- [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) - A task that represents the asynchronous operation.

### OnValidatingAsync(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L327)

```csharp
ValueTask<bool> OnValidatingAsync(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to validate.

#### Returns

- [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)> - A task that represents the asynchronous operation. The task result is true if validation succeeds; otherwise, false.

### SetEnabled(IPlayer, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L283)

```csharp
void SetEnabled(IPlayer player, bool enabled)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to set enabled state for.
- **enabled**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True to enable the option for the player; false to disable it.

#### Remarks

### SetVisible(IPlayer, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L266)

```csharp
void SetVisible(IPlayer player, bool visible)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to set visibility for.
- **visible**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True to make the option visible to the player; false to hide it.

#### Remarks

### AfterFormat

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L242)

```csharp
event EventHandler<MenuOptionFormattingEventArgs>? AfterFormat
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionFormattingEventArgs](/docs/api/shared/menus/menuoptionformattingeventargs)>?

### BeforeFormat

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L237)

```csharp
event EventHandler<MenuOptionFormattingEventArgs>? BeforeFormat
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionFormattingEventArgs](/docs/api/shared/menus/menuoptionformattingeventargs)>?

### Click

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L227)

```csharp
event AsyncEventHandler<MenuOptionClickEventArgs>? Click
```

#### Event Type

- [AsyncEventHandler](/docs/api/shared/menus/asynceventhandler-1)<[MenuOptionClickEventArgs](/docs/api/shared/menus/menuoptionclickeventargs)>?

### EnabledChanged

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L212)

```csharp
event EventHandler<MenuOptionEventArgs>? EnabledChanged
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionEventArgs](/docs/api/shared/menus/menuoptioneventargs)>?

### TextChanged

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L217)

```csharp
event EventHandler<MenuOptionEventArgs>? TextChanged
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionEventArgs](/docs/api/shared/menus/menuoptioneventargs)>?

### Validating

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L222)

```csharp
event EventHandler<MenuOptionValidatingEventArgs>? Validating
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionValidatingEventArgs](/docs/api/shared/menus/menuoptionvalidatingeventargs)>?

### VisibilityChanged

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L207)

```csharp
event EventHandler<MenuOptionEventArgs>? VisibilityChanged
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionEventArgs](/docs/api/shared/menus/menuoptioneventargs)>?

