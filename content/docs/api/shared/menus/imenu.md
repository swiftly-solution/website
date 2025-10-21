---
title: IMenu
---

```csharp
public interface IMenu
```

## Properties

### AutoCloseAfter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L81)

```csharp
float AutoCloseAfter { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AutoCloseCancelTokens

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L39)

```csharp
ConcurrentDictionary<IPlayer, CancellationTokenSource?> AutoCloseCancelTokens { get; set; }
```

#### Property Value

- [ConcurrentDictionary](https://learn.microsoft.com/dotnet/api/system.collections.concurrent.concurrentdictionary-2)<[IPlayer](/docs/api/shared/players/iplayer), [CancellationTokenSource](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtokensource)?>

### Builder

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L87)

```csharp
IMenuBuilder Builder { get; }
```

#### Property Value

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder)

### ButtonOverrides

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L45)

```csharp
IMenuButtonOverrides? ButtonOverrides { get; set; }
```

#### Property Value

- [IMenuButtonOverrides](/docs/api/shared/menus/imenubuttonoverrides)?

### CloseOnSelect

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L63)

```csharp
bool? CloseOnSelect { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### HasSound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L27)

```csharp
bool HasSound { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaxVisibleOptions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L51)

```csharp
int MaxVisibleOptions { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MenuManager

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L75)

```csharp
IMenuManager MenuManager { get; set; }
```

#### Property Value

- [IMenuManager](/docs/api/shared/menus/imenumanager)

### Options

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L22)

```csharp
List<IOption> Options { get; }
```

#### Property Value

- [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[IOption](/docs/api/shared/menus/ioption)>

### Parent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L33)

```csharp
IMenu? Parent { get; set; }
```

#### Property Value

- [IMenu](/docs/api/shared/menus/imenu)?

### RenderColor

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L69)

```csharp
Color RenderColor { get; set; }
```

#### Property Value

- [Color](/docs/api/shared/natives/color)

### ShouldFreeze

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L57)

```csharp
bool? ShouldFreeze { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### Title

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L16)

```csharp
string Title { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### Close(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L143)

```csharp
void Close(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to close the menu for.

### IsCurrentOptionSelectable(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L181)

```csharp
bool IsCurrentOptionSelectable(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to check the current selection for.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the current option is selectable, false otherwise.

### IsOptionSlider(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L187)

```csharp
bool IsOptionSlider(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MoveSelection(IPlayer, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L151)

```csharp
void MoveSelection(IPlayer player, int offset)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player whose selection to move.
- **offset**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The number of positions to move the selection.

### Rerender(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L173)

```csharp
void Rerender(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to re-render the menu for.

### SetFreezeState(IPlayer, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L195)

```csharp
void SetFreezeState(IPlayer player, bool freeze)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to set the freeze state for.
- **freeze**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True to freeze the player, false to unfreeze.

### Show(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L136)

```csharp
void Show(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to show the menu to.

### UseSelection(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L158)

```csharp
void UseSelection(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player whose current selection to use.

### UseSlideOption(IPlayer, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L166)

```csharp
void UseSlideOption(IPlayer player, bool isRight)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player interacting with the slide option.
- **isRight**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if sliding right, false if sliding left.

### AfterRender

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L129)

```csharp
event Action<IPlayer>? AfterRender
```

#### Event Type

- [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[IPlayer](/docs/api/shared/players/iplayer)>?

### BeforeRender

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L123)

```csharp
event Action<IPlayer>? BeforeRender
```

#### Event Type

- [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[IPlayer](/docs/api/shared/players/iplayer)>?

### OnClose

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L99)

```csharp
event Action<IPlayer>? OnClose
```

#### Event Type

- [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[IPlayer](/docs/api/shared/players/iplayer)>?

### OnItemHovered

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L117)

```csharp
event Action<IPlayer, IOption>? OnItemHovered
```

#### Event Type

- [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[IPlayer](/docs/api/shared/players/iplayer), [IOption](/docs/api/shared/menus/ioption)>?

### OnItemSelected

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L111)

```csharp
event Action<IPlayer, IOption>? OnItemSelected
```

#### Event Type

- [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[IPlayer](/docs/api/shared/players/iplayer), [IOption](/docs/api/shared/menus/ioption)>?

### OnMove

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L105)

```csharp
event Action<IPlayer>? OnMove
```

#### Event Type

- [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[IPlayer](/docs/api/shared/players/iplayer)>?

### OnOpen

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L93)

```csharp
event Action<IPlayer>? OnOpen
```

#### Event Type

- [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[IPlayer](/docs/api/shared/players/iplayer)>?

