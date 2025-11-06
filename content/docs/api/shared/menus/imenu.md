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

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L92)

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

### HorizontalStyle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L212)

```csharp
MenuHorizontalStyle? HorizontalStyle { get; set; }
```

#### Property Value

- [MenuHorizontalStyle](/docs/api/shared/menus/menuhorizontalstyle)?

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

### RenderOntick

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L86)

```csharp
bool RenderOntick { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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

### VerticalScrollStyle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L206)

```csharp
MenuVerticalScrollStyle VerticalScrollStyle { get; set; }
```

#### Property Value

- [MenuVerticalScrollStyle](/docs/api/shared/menus/menuverticalscrollstyle)

## Methods

### Close(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L148)

```csharp
void Close(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to close the menu for.

### GetCurrentOption(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L192)

```csharp
IOption? GetCurrentOption(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to get the current option for.

#### Returns

- [IOption](/docs/api/shared/menus/ioption)? - The currently selected option, or null if no option is selected.

### IsCurrentOptionSelectable(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L181)

```csharp
[Obsolete("Use GetCurrentOption instead")]
bool IsCurrentOptionSelectable(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsOptionSlider(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L184)

```csharp
[Obsolete("Use GetCurrentOption instead")]
bool IsOptionSlider(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MoveSelection(IPlayer, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L156)

```csharp
void MoveSelection(IPlayer player, int offset)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player whose selection to move.
- **offset**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The number of positions to move the selection.

### Rerender(IPlayer, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L179)

```csharp
void Rerender(IPlayer player, bool updateHorizontalStyle = false)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to re-render the menu for.
- **updateHorizontalStyle**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True to update horizontal style, false to render without updating horizontal style.

### SetFreezeState(IPlayer, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L200)

```csharp
void SetFreezeState(IPlayer player, bool freeze)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to set the freeze state for.
- **freeze**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True to freeze the player, false to unfreeze.

### Show(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L141)

```csharp
void Show(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to show the menu to.

### UseSelection(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L163)

```csharp
void UseSelection(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player whose current selection to use.

### UseSlideOption(IPlayer, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L171)

```csharp
void UseSlideOption(IPlayer player, bool isRight)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player interacting with the slide option.
- **isRight**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if sliding right, false if sliding left.

### AfterRender

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L134)

```csharp
event Action<IPlayer>? AfterRender
```

#### Event Type

- [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[IPlayer](/docs/api/shared/players/iplayer)>?

### BeforeRender

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L128)

```csharp
event Action<IPlayer>? BeforeRender
```

#### Event Type

- [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[IPlayer](/docs/api/shared/players/iplayer)>?

### OnClose

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L104)

```csharp
event Action<IPlayer>? OnClose
```

#### Event Type

- [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[IPlayer](/docs/api/shared/players/iplayer)>?

### OnItemHovered

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L122)

```csharp
event Action<IPlayer, IOption>? OnItemHovered
```

#### Event Type

- [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[IPlayer](/docs/api/shared/players/iplayer), [IOption](/docs/api/shared/menus/ioption)>?

### OnItemSelected

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L116)

```csharp
event Action<IPlayer, IOption>? OnItemSelected
```

#### Event Type

- [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[IPlayer](/docs/api/shared/players/iplayer), [IOption](/docs/api/shared/menus/ioption)>?

### OnMove

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L110)

```csharp
event Action<IPlayer>? OnMove
```

#### Event Type

- [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[IPlayer](/docs/api/shared/players/iplayer)>?

### OnOpen

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L98)

```csharp
event Action<IPlayer>? OnOpen
```

#### Event Type

- [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[IPlayer](/docs/api/shared/players/iplayer)>?

