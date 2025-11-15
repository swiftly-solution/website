---
title: IMenuManagerAPI
---

```csharp
public interface IMenuManagerAPI
```

## Properties

### Configuration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L105)

```csharp
MenuManagerConfiguration Configuration { get; }
```

#### Property Value

- [MenuManagerConfiguration](/docs/api/shared/menus/menumanagerconfiguration)

### Core

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L100)

```csharp
ISwiftlyCore Core { get; }
```

#### Property Value

- [ISwiftlyCore](/docs/api/shared/iswiftlycore)

## Methods

### CloseAllMenus()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L185)

```csharp
void CloseAllMenus()
```

### CloseMenu(IMenuAPI)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L173)

```csharp
void CloseMenu(IMenuAPI menu)
```

#### Parameters

- **menu**: [IMenuAPI](/docs/api/shared/menus/imenuapi) - The menu to close.

### CloseMenuForPlayer(IPlayer, IMenuAPI)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L180)

```csharp
void CloseMenuForPlayer(IPlayer player, IMenuAPI menu)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player whose menu will be closed.
- **menu**: [IMenuAPI](/docs/api/shared/menus/imenuapi) - The menu to close.

### CreateBuilder()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L121)

```csharp
IMenuBuilderAPI CreateBuilder()
```

#### Returns

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi) - A new menu builder instance.

### CreateMenu(MenuConfiguration, MenuKeybindOverrides, IMenuAPI?, MenuOptionScrollStyle, MenuOptionTextStyle)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L132)

```csharp
IMenuAPI CreateMenu(MenuConfiguration configuration, MenuKeybindOverrides keybindOverrides, IMenuAPI? parent = null, MenuOptionScrollStyle optionScrollStyle = MenuOptionScrollStyle.CenterFixed, MenuOptionTextStyle optionTextStyle = MenuOptionTextStyle.TruncateEnd)
```

#### Parameters

- **configuration**: [MenuConfiguration](/docs/api/shared/menus/menuconfiguration) - The configuration for the menu.
- **keybindOverrides**: [MenuKeybindOverrides](/docs/api/shared/menus/menukeybindoverrides) - The keybind overrides for the menu.
- **parent**: [IMenuAPI](/docs/api/shared/menus/imenuapi)? - The parent menu, or null for no parent.
- **optionScrollStyle**: [MenuOptionScrollStyle](/docs/api/shared/menus/menuoptionscrollstyle) - The scroll style for the menu options.
- **optionTextStyle**: [MenuOptionTextStyle](/docs/api/shared/menus/menuoptiontextstyle) - The text overflow style for the menu options.

#### Returns

- [IMenuAPI](/docs/api/shared/menus/imenuapi) - A new menu instance ready to be configured.

### GetCurrentMenu(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L139)

```csharp
IMenuAPI? GetCurrentMenu(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to check.

#### Returns

- [IMenuAPI](/docs/api/shared/menus/imenuapi)? - The player's active menu, or null if they have no menu open.

### OpenMenu(IMenuAPI)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L145)

```csharp
void OpenMenu(IMenuAPI menu)
```

#### Parameters

- **menu**: [IMenuAPI](/docs/api/shared/menus/imenuapi) - The menu to display.

### OpenMenu(IMenuAPI, Action)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L152)

```csharp
void OpenMenu(IMenuAPI menu, Action<IPlayer, IMenuAPI> onClosed)
```

#### Parameters

- **menu**: [IMenuAPI](/docs/api/shared/menus/imenuapi) - The menu to display.
- **onClosed**: [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[IPlayer](/docs/api/shared/players/iplayer), [IMenuAPI](/docs/api/shared/menus/imenuapi)> - Callback invoked when the menu is closed.

### OpenMenuForPlayer(IPlayer, IMenuAPI)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L159)

```csharp
void OpenMenuForPlayer(IPlayer player, IMenuAPI menu)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player who will see the menu.
- **menu**: [IMenuAPI](/docs/api/shared/menus/imenuapi) - The menu to display.

### OpenMenuForPlayer(IPlayer, IMenuAPI, Action)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L167)

```csharp
void OpenMenuForPlayer(IPlayer player, IMenuAPI menu, Action<IPlayer, IMenuAPI> onClosed)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player who will see the menu.
- **menu**: [IMenuAPI](/docs/api/shared/menus/imenuapi) - The menu to display.
- **onClosed**: [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[IPlayer](/docs/api/shared/players/iplayer), [IMenuAPI](/docs/api/shared/menus/imenuapi)> - Callback invoked when the menu is closed for the player.

### MenuClosed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L110)

```csharp
event EventHandler<MenuManagerEventArgs>? MenuClosed
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuManagerEventArgs](/docs/api/shared/menus/menumanagereventargs)>?

### MenuOpened

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L115)

```csharp
event EventHandler<MenuManagerEventArgs>? MenuOpened
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuManagerEventArgs](/docs/api/shared/menus/menumanagereventargs)>?

