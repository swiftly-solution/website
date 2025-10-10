---
title: IMenuManager
---

```csharp
public interface IMenuManager
```

## Properties

**Settings** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManager.cs#L86)

```csharp
MenuSettings Settings { get; }
```

#### Property Value

- [MenuSettings](/docs/api/shared/menus/menusettings)

## Methods

**ClearRenderForPlayer(IPlayer)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManager.cs#L73)

```csharp
void ClearRenderForPlayer(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer)

**CloseMenu(IPlayer)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManager.cs#L41)

```csharp
void CloseMenu(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer)

**CreateMenu(string, bool, bool, bool)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManager.cs#L33)

```csharp
IMenu CreateMenu(string title, bool freezePlayer, bool hasSound, bool canExit)
```

#### Parameters

- **title**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The title of the menu.
- **freezePlayer**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Whether to freeze the player while the menu is open.
- **hasSound**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Whether the menu has sound effects.
- **canExit**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Whether the menu can be exited.

#### Returns

- [IMenu](/docs/api/shared/menus/imenu) - Menu Object

**GetCurrentMenu(IPlayer)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManager.cs#L53)

```csharp
IMenu? GetCurrentMenu(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer)

#### Returns

- [IMenu](/docs/api/shared/menus/imenu)?

**GetInputState(IPlayer)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManager.cs#L70)

```csharp
Action<IPlayer, IMenuOption, IMenu, string>? GetInputState(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer)

#### Returns

- [Action](https://learn.microsoft.com/dotnet/api/system.action-4)<[IPlayer](/docs/api/shared/players/iplayer), [IMenuOption](/docs/api/shared/menus/imenuoption), [IMenu](/docs/api/shared/menus/imenu), [string](https://learn.microsoft.com/dotnet/api/system.string)>?

**GetPlayerFromMenu(IMenu)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManager.cs#L45)

```csharp
IPlayer? GetPlayerFromMenu(IMenu menu)
```

#### Parameters

- **menu**: [IMenu](/docs/api/shared/menus/imenu)

#### Returns

- [IPlayer](/docs/api/shared/players/iplayer)?

**HasInputState(IPlayer)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManager.cs#L66)

```csharp
bool HasInputState(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**IsMenuOpen(IPlayer)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManager.cs#L49)

```csharp
bool IsMenuOpen(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**OpenMenu(IPlayer, IMenu)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManager.cs#L37)

```csharp
void OpenMenu(IPlayer player, IMenu menu)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer)
- **menu**: [IMenu](/docs/api/shared/menus/imenu)

**OpenSubMenu(IPlayer, IMenu)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManager.cs#L57)

```csharp
void OpenSubMenu(IPlayer player, IMenu menu)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer)
- **menu**: [IMenu](/docs/api/shared/menus/imenu)

**RenderForPlayer(IPlayer)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManager.cs#L72)

```csharp
void RenderForPlayer(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer)

**SetInputState(IPlayer, Action<IPlayer, IMenuOption, IMenu, string>?)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManager.cs#L62)

```csharp
void SetInputState(IPlayer player, Action<IPlayer, IMenuOption, IMenu, string>? onInput)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer)
- **onInput**: [Action](https://learn.microsoft.com/dotnet/api/system.action-4)<[IPlayer](/docs/api/shared/players/iplayer), [IMenuOption](/docs/api/shared/menus/imenuoption), [IMenu](/docs/api/shared/menus/imenu), [string](https://learn.microsoft.com/dotnet/api/system.string)>?

**OnMenuClosed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManager.cs#L82)

```csharp
event Action<IPlayer, IMenu>? OnMenuClosed
```

#### Event Type

- [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[IPlayer](/docs/api/shared/players/iplayer), [IMenu](/docs/api/shared/menus/imenu)>?

**OnMenuOpened** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManager.cs#L78)

```csharp
event Action<IPlayer, IMenu>? OnMenuOpened
```

#### Event Type

- [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[IPlayer](/docs/api/shared/players/iplayer), [IMenu](/docs/api/shared/menus/imenu)>?

