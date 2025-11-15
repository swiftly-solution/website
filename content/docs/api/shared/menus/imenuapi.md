---
title: IMenuAPI
---

```csharp
public interface IMenuAPI : IDisposable
```

#### Implements

## Properties

### Builder

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L248)

```csharp
IMenuBuilderAPI? Builder { get; }
```

#### Property Value

- [IMenuBuilderAPI](/docs/api/shared/menus/imenubuilderapi)?

### Configuration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L228)

```csharp
MenuConfiguration Configuration { get; }
```

#### Property Value

- [MenuConfiguration](/docs/api/shared/menus/menuconfiguration)

### KeybindOverrides

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L233)

```csharp
MenuKeybindOverrides KeybindOverrides { get; }
```

#### Property Value

- [MenuKeybindOverrides](/docs/api/shared/menus/menukeybindoverrides)

### MenuManager

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L223)

```csharp
IMenuManagerAPI MenuManager { get; }
```

#### Property Value

- [IMenuManagerAPI](/docs/api/shared/menus/imenumanagerapi)

### OptionScrollStyle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L238)

```csharp
MenuOptionScrollStyle OptionScrollStyle { get; }
```

#### Property Value

- [MenuOptionScrollStyle](/docs/api/shared/menus/menuoptionscrollstyle)

### Options

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L267)

```csharp
IReadOnlyList<IMenuOption> Options { get; }
```

#### Property Value

- [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)<[IMenuOption](/docs/api/shared/menus/imenuoption)>

### Parent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L262)

```csharp
(IMenuAPI? ParentMenu, IMenuOption? TriggerOption) Parent { get; }
```

#### Property Value

- ([IMenuAPI](/docs/api/shared/menus/imenuapi)? [ParentMenu](https://learn.microsoft.com/dotnet/api/system.valuetuple-swiftlys2.shared.menus.imenuapi,swiftlys2.shared.menus.imenuoption-.parentmenu), [IMenuOption](/docs/api/shared/menus/imenuoption)? [TriggerOption](https://learn.microsoft.com/dotnet/api/system.valuetuple-swiftlys2.shared.menus.imenuapi,swiftlys2.shared.menus.imenuoption-.triggeroption))

#### Remarks

### Tag

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L253)

```csharp
object? Tag { get; set; }
```

#### Property Value

- [object](https://learn.microsoft.com/dotnet/api/system.object)?

## Methods

### AddOption(IMenuOption)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L318)

```csharp
void AddOption(IMenuOption option)
```

#### Parameters

- **option**: [IMenuOption](/docs/api/shared/menus/imenuoption) - The menu option to add.

### GetCurrentOption(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L348)

```csharp
IMenuOption? GetCurrentOption(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player whose current selection to retrieve.

#### Returns

- [IMenuOption](/docs/api/shared/menus/imenuoption)? - The currently selected option, or null if nothing is selected.

### GetCurrentOptionIndex(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L355)

```csharp
int GetCurrentOptionIndex(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player whose current selection index to retrieve.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - The index of the currently selected option, or -1 if nothing is selected.

### HideForPlayer(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L312)

```csharp
void HideForPlayer(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player whose menu will be hidden.

#### Remarks

### MoveToOption(IPlayer, IMenuOption)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L333)

```csharp
bool MoveToOption(IPlayer player, IMenuOption option)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player whose selection to move.
- **option**: [IMenuOption](/docs/api/shared/menus/imenuoption) - The option to move the selection to.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the move was successful, false if the option was not found.

### MoveToOptionIndex(IPlayer, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L341)

```csharp
bool MoveToOptionIndex(IPlayer player, int index)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player whose selection to move.
- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The index of the option to move the selection to.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the move was successful, false if the index was out of bounds.

### RemoveOption(IMenuOption)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L325)

```csharp
bool RemoveOption(IMenuOption option)
```

#### Parameters

- **option**: [IMenuOption](/docs/api/shared/menus/imenuoption) - The menu option to remove.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the option was successfully removed, false if the option was not found.

### ShowForPlayer(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L302)

```csharp
void ShowForPlayer(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player who will see the menu.

#### Remarks

### OptionHovering

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L282)

```csharp
event EventHandler<MenuEventArgs>? OptionHovering
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuEventArgs](/docs/api/shared/menus/menueventargs)>?

