---
title: IMenuManager
---

```csharp
public interface IMenuManager
```

## Properties

### Settings

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManager.cs#L166)

```csharp
MenuSettings Settings { get; }
```

#### Property Value

- [MenuSettings](/docs/api/shared/menus/menusettings)

## Methods

### CloseMenu(IMenu)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManager.cs#L112)

```csharp
void CloseMenu(IMenu menu)
```

#### Parameters

- **menu**: [IMenu](/docs/api/shared/menus/imenu) - The menu instance to close.

### CloseMenuByTitle(string, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManager.cs#L127)

```csharp
void CloseMenuByTitle(string title, bool exact = false)
```

#### Parameters

- **title**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The title of the menu(s) to close.
- **exact**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - If true, only menus with exactly matching titles are closed. If false, menus containing the title are closed. Defaults to false.

### CloseMenuForPlayer(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManager.cs#L119)

```csharp
void CloseMenuForPlayer(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player whose menu should be closed.

### CreateMenu(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManager.cs#L97)

```csharp
IMenu CreateMenu(string title)
```

#### Parameters

- **title**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The title to display at the top of the menu.

#### Returns

- [IMenu](/docs/api/shared/menus/imenu) - A new menu instance ready for configuration and use.

### GetMenu(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManager.cs#L105)

```csharp
IMenu? GetMenu(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player whose current menu to retrieve.

#### Returns

- [IMenu](/docs/api/shared/menus/imenu)? - The player's current menu, or null if no menu is open.

### HasMenuOpen(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManager.cs#L141)

```csharp
bool HasMenuOpen(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to check if the menu is open for.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OpenMenu(IPlayer, IMenu)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManager.cs#L135)

```csharp
void OpenMenu(IPlayer player, IMenu menu)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to open the menu for.
- **menu**: [IMenu](/docs/api/shared/menus/imenu) - The menu instance to open.

### OnMenuClosed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManager.cs#L147)

```csharp
event Action<IPlayer, IMenu>? OnMenuClosed
```

#### Event Type

- [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[IPlayer](/docs/api/shared/players/iplayer), [IMenu](/docs/api/shared/menus/imenu)>?

### OnMenuOpened

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManager.cs#L153)

```csharp
event Action<IPlayer, IMenu>? OnMenuOpened
```

#### Event Type

- [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[IPlayer](/docs/api/shared/players/iplayer), [IMenu](/docs/api/shared/menus/imenu)>?

### OnMenuRendered

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManager.cs#L160)

```csharp
event Action<IPlayer, IMenu>? OnMenuRendered
```

#### Event Type

- [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[IPlayer](/docs/api/shared/players/iplayer), [IMenu](/docs/api/shared/menus/imenu)>?

