---
title: IMenuAPI
---

# Interface IMenuAPI

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L223)

**Namespace**: [SwiftlyS2.Shared.Menus](/docs/api/menus)

**Assembly**: SwiftlyS2.CS2.dll

Represents an interactive menu that can be displayed to players.

```csharp
public interface IMenuAPI : IDisposable
```

#### Implements

- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Builder

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L253)

The builder used to construct and configure this menu.

```csharp
IMenuBuilderAPI? Builder { get; }
```

#### Property Value

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi)?

### Configuration

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L233)

Configuration settings for this menu.

```csharp
MenuConfiguration Configuration { get; }
```

#### Property Value

- [MenuConfiguration](/docs/api/menus/menuconfiguration)

### KeybindOverrides

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L238)

Keybind overrides for this menu.

```csharp
MenuKeybindOverrides KeybindOverrides { get; }
```

#### Property Value

- [MenuKeybindOverrides](/docs/api/menus/menukeybindoverrides)

### MenuManager

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L228)

The menu manager that this menu belongs to.

```csharp
IMenuManagerAPI MenuManager { get; }
```

#### Property Value

- [IMenuManagerAPI](/docs/api/menus/imenumanagerapi)

### OptionScrollStyle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L243)

The scroll style for this menu options.

```csharp
MenuOptionScrollStyle OptionScrollStyle { get; }
```

#### Property Value

- [MenuOptionScrollStyle](/docs/api/menus/menuoptionscrollstyle)

### Options

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L272)

Read-only collection of all options in this menu.

```csharp
IReadOnlyList<IMenuOption> Options { get; }
```

#### Property Value

- [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)<[IMenuOption](/docs/api/menus/imenuoption)>

### Parent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L267)

The parent hierarchy information in a hierarchical menu structure.

```csharp
(IMenuAPI? ParentMenu, IMenuOption? TriggerOption) Parent { get; }
```

#### Property Value

- ([IMenuAPI](/docs/api/menus/imenuapi)? [ParentMenu](https://learn.microsoft.com/dotnet/api/system.valuetuple-swiftlys2.shared.menus.imenuapi,swiftlys2.shared.menus.imenuoption-.parentmenu), [IMenuOption](/docs/api/menus/imenuoption)? [TriggerOption](https://learn.microsoft.com/dotnet/api/system.valuetuple-swiftlys2.shared.menus.imenuapi,swiftlys2.shared.menus.imenuoption-.triggeroption))

#### Remarks

ParentMenu is the parent menu instance, null for top-level menus.
TriggerOption is the menu option that triggered this submenu, null for top-level or directly created menus.

### Tag

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L258)

Gets or sets an object that contains data about this menu.

```csharp
object? Tag { get; set; }
```

#### Property Value

- [object](https://learn.microsoft.com/dotnet/api/system.object)?

## Methods

### AddOption(IMenuOption)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L323)

Adds a new option to this menu.

```csharp
void AddOption(IMenuOption option)
```

#### Parameters

- **option**: [IMenuOption](/docs/api/menus/imenuoption) - The menu option to add.

### GetCurrentOption(IPlayer)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L353)

Gets the menu option currently highlighted by the specified player.

```csharp
IMenuOption? GetCurrentOption(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player whose current selection to retrieve.

#### Returns

- [IMenuOption](/docs/api/menus/imenuoption)? - The currently selected option, or null if nothing is selected.

### GetCurrentOptionIndex(IPlayer)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L360)

Gets the index of the currently highlighted option for the specified player.

```csharp
int GetCurrentOptionIndex(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player whose current selection index to retrieve.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - The index of the currently selected option, or -1 if nothing is selected.

### HideForPlayer(IPlayer)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L317)

Hides this menu for the specified player by removing its visual display.

```csharp
void HideForPlayer(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player whose menu will be hidden.

#### Remarks

This method only hides the menu visually. To properly close a menu (which handles state cleanup, 
triggering events, and reopening parent menus), use <xref href="SwiftlyS2.Shared.Menus.IMenuManagerAPI.CloseMenuForPlayer(SwiftlyS2.Shared.Players.IPlayer%2cSwiftlyS2.Shared.Menus.IMenuAPI)" data-throw-if-not-resolved="false"></xref> instead.

### MoveToOption(IPlayer, IMenuOption)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L338)

Moves the player's selection to the specified option.

```csharp
bool MoveToOption(IPlayer player, IMenuOption option)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player whose selection to move.
- **option**: [IMenuOption](/docs/api/menus/imenuoption) - The option to move the selection to.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the move was successful, false if the option was not found.

### MoveToOptionIndex(IPlayer, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L346)

Moves the player's selection to the specified option index.

```csharp
bool MoveToOptionIndex(IPlayer player, int index)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player whose selection to move.
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The index of the option to move the selection to.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the move was successful, false if the index was out of bounds.

### RemoveOption(IMenuOption)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L330)

Removes an option from this menu.

```csharp
bool RemoveOption(IMenuOption option)
```

#### Parameters

- **option**: [IMenuOption](/docs/api/menus/imenuoption) - The menu option to remove.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the option was successfully removed, false if the option was not found.

### ShowForPlayer(IPlayer)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L307)

Shows this menu to the specified player by displaying its content.

```csharp
void ShowForPlayer(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player who will see the menu.

#### Remarks

This method only displays the menu visually. To properly open a menu (which handles state management, 
closing other menus, and triggering events), use <xref href="SwiftlyS2.Shared.Menus.IMenuManagerAPI.OpenMenuForPlayer(SwiftlyS2.Shared.Players.IPlayer%2cSwiftlyS2.Shared.Menus.IMenuAPI)" data-throw-if-not-resolved="false"></xref> instead.

### OptionHovering

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L287)

Fired when the selection pointer is hovering over an option.

```csharp
event EventHandler<MenuEventArgs>? OptionHovering
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuEventArgs](/docs/api/menus/menueventargs)>?

