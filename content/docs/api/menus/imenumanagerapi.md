---
title: IMenuManagerAPI
---

# Interface IMenuManagerAPI

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L95)

**Namespace**: [SwiftlyS2.Shared.Menus](/docs/api/menus)

**Assembly**: SwiftlyS2.CS2.dll

Central manager for creating and controlling all player menus.

```csharp
public interface IMenuManagerAPI
```

## Properties

### Configuration

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L105)

Global configuration settings for all menus.

```csharp
MenuManagerConfiguration Configuration { get; }
```

#### Property Value

- [MenuManagerConfiguration](/docs/api/menus/menumanagerconfiguration)

### Core

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L100)

The SwiftlyS2 core instance.

```csharp
ISwiftlyCore Core { get; }
```

#### Property Value

- [ISwiftlyCore](/docs/api/iswiftlycore)

## Methods

### CloseAllMenus()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L185)

Closes every open menu for every player.

```csharp
void CloseAllMenus()
```

### CloseMenu(IMenuAPI)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L173)

Closes the specified menu for all players who have it open.

```csharp
void CloseMenu(IMenuAPI menu)
```

#### Parameters

- **menu**: [IMenuAPI](/docs/api/menus/imenuapi) - The menu to close.

### CloseMenuForPlayer(IPlayer, IMenuAPI)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L180)

Closes the specified menu for a player. If the menu is not open for that player, this has no effect.

```csharp
void CloseMenuForPlayer(IPlayer player, IMenuAPI menu)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player whose menu will be closed.
- **menu**: [IMenuAPI](/docs/api/menus/imenuapi) - The menu to close.

### CreateBuilder()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L121)

Creates a new menu builder.

```csharp
IMenuBuilderAPI CreateBuilder()
```

#### Returns

- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - A new menu builder instance.

### CreateMenu(MenuConfiguration, MenuKeybindOverrides, IMenuAPI?, MenuOptionScrollStyle, MenuOptionTextStyle)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L132)

Creates a new menu with an optional title.

```csharp
IMenuAPI CreateMenu(MenuConfiguration configuration, MenuKeybindOverrides keybindOverrides, IMenuAPI? parent = null, MenuOptionScrollStyle optionScrollStyle = MenuOptionScrollStyle.CenterFixed, MenuOptionTextStyle optionTextStyle = MenuOptionTextStyle.TruncateEnd)
```

#### Parameters

- **configuration**: [MenuConfiguration](/docs/api/menus/menuconfiguration) - The configuration for the menu.
- **keybindOverrides**: [MenuKeybindOverrides](/docs/api/menus/menukeybindoverrides) - The keybind overrides for the menu.
- **parent**: [IMenuAPI](/docs/api/menus/imenuapi)? - The parent menu, or null for no parent.
- **optionScrollStyle**: [MenuOptionScrollStyle](/docs/api/menus/menuoptionscrollstyle) - The scroll style for the menu options.
- **optionTextStyle**: [MenuOptionTextStyle](/docs/api/menus/menuoptiontextstyle) - The text overflow style for the menu options.

#### Returns

- [IMenuAPI](/docs/api/menus/imenuapi) - A new menu instance ready to be configured.

### GetCurrentMenu(IPlayer)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L139)

Gets the menu currently open for the specified player.

```csharp
IMenuAPI? GetCurrentMenu(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player to check.

#### Returns

- [IMenuAPI](/docs/api/menus/imenuapi)? - The player's active menu, or null if they have no menu open.

### OpenMenu(IMenuAPI)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L145)

Opens the specified menu for all players.

```csharp
void OpenMenu(IMenuAPI menu)
```

#### Parameters

- **menu**: [IMenuAPI](/docs/api/menus/imenuapi) - The menu to display.

### OpenMenu(IMenuAPI, Action)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L152)

Opens the specified menu for all players.

```csharp
void OpenMenu(IMenuAPI menu, Action<IPlayer, IMenuAPI> onClosed)
```

#### Parameters

- **menu**: [IMenuAPI](/docs/api/menus/imenuapi) - The menu to display.
- **onClosed**: [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[IPlayer](/docs/api/players/iplayer), [IMenuAPI](/docs/api/menus/imenuapi)> - Callback invoked when the menu is closed.

### OpenMenuForPlayer(IPlayer, IMenuAPI)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L159)

Opens the specified menu for a player. Any currently open menu will be closed first.

```csharp
void OpenMenuForPlayer(IPlayer player, IMenuAPI menu)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player who will see the menu.
- **menu**: [IMenuAPI](/docs/api/menus/imenuapi) - The menu to display.

### OpenMenuForPlayer(IPlayer, IMenuAPI, Action)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L167)

Opens the specified menu for a player. Any currently open menu will be closed first.

```csharp
void OpenMenuForPlayer(IPlayer player, IMenuAPI menu, Action<IPlayer, IMenuAPI> onClosed)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player who will see the menu.
- **menu**: [IMenuAPI](/docs/api/menus/imenuapi) - The menu to display.
- **onClosed**: [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[IPlayer](/docs/api/players/iplayer), [IMenuAPI](/docs/api/menus/imenuapi)> - Callback invoked when the menu is closed for the player.

### MenuClosed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L110)

Fired when a menu is closed for a player.

```csharp
event EventHandler<MenuManagerEventArgs>? MenuClosed
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuManagerEventArgs](/docs/api/menus/menumanagereventargs)>?

### MenuOpened

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L115)

Fired when a menu is opened for a player.

```csharp
event EventHandler<MenuManagerEventArgs>? MenuOpened
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuManagerEventArgs](/docs/api/menus/menumanagereventargs)>?

