---
title: SubmenuMenuOption
---

```csharp
public class SubmenuMenuOption : IOption
```

#### Inheritance

#### Implements

#### Inherited Members

## Constructors

### SubmenuMenuOption(string, IMenu?, IMenuTextSize)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/SubmenuMenuOption.cs#L20)

```csharp
public SubmenuMenuOption(string text, IMenu? submenu = null, IMenuTextSize size = IMenuTextSize.Medium)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **submenu**: [IMenu](/docs/api/shared/menus/imenu)?
- **size**: [IMenuTextSize](/docs/api/shared/menus/imenutextsize)

### SubmenuMenuOption(string, Func, IMenuTextSize)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/SubmenuMenuOption.cs#L27)

```csharp
public SubmenuMenuOption(string text, Func<IMenu> submenuBuilder, IMenuTextSize size = IMenuTextSize.Medium)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **submenuBuilder**: [Func](https://learn.microsoft.com/dotnet/api/system.func-1)<[IMenu](/docs/api/shared/menus/imenu)>
- **size**: [IMenuTextSize](/docs/api/shared/menus/imenutextsize)

## Properties

### Enabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/SubmenuMenuOption.cs#L18)

```csharp
public bool Enabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EnabledCheck

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/SubmenuMenuOption.cs#L13)

```csharp
public Func<IPlayer, bool>? EnabledCheck { get; set; }
```

#### Property Value

- [Func](https://learn.microsoft.com/dotnet/api/system.func-2)<[IPlayer](/docs/api/shared/players/iplayer), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)>?

### Menu

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/SubmenuMenuOption.cs#L15)

```csharp
public IMenu? Menu { get; set; }
```

#### Property Value

- [IMenu](/docs/api/shared/menus/imenu)?

### Size

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/SubmenuMenuOption.cs#L14)

```csharp
public IMenuTextSize Size { get; set; }
```

#### Property Value

- [IMenuTextSize](/docs/api/shared/menus/imenutextsize)

### Submenu

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/SubmenuMenuOption.cs#L10)

```csharp
public IMenu? Submenu { get; set; }
```

#### Property Value

- [IMenu](/docs/api/shared/menus/imenu)?

### SubmenuBuilder

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/SubmenuMenuOption.cs#L11)

```csharp
public Func<IMenu>? SubmenuBuilder { get; set; }
```

#### Property Value

- [Func](https://learn.microsoft.com/dotnet/api/system.func-1)<[IMenu](/docs/api/shared/menus/imenu)>?

### Text

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/SubmenuMenuOption.cs#L9)

```csharp
public string Text { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### VisibilityCheck

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/SubmenuMenuOption.cs#L12)

```csharp
public Func<IPlayer, bool>? VisibilityCheck { get; set; }
```

#### Property Value

- [Func](https://learn.microsoft.com/dotnet/api/system.func-2)<[IPlayer](/docs/api/shared/players/iplayer), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)>?

### Visible

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/SubmenuMenuOption.cs#L17)

```csharp
public bool Visible { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### CanInteract(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/SubmenuMenuOption.cs#L39)

```csharp
public bool CanInteract(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to check interaction capability for.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the player can interact with the option; otherwise, false.

### GetDisplayText(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/SubmenuMenuOption.cs#L44)

```csharp
public string GetDisplayText(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player requesting the display text.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The formatted display text for the option.

### GetSubmenu()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/SubmenuMenuOption.cs#L63)

```csharp
public IMenu? GetSubmenu()
```

#### Returns

- [IMenu](/docs/api/shared/menus/imenu)?

### GetTextSize()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/SubmenuMenuOption.cs#L58)

```csharp
public IMenuTextSize GetTextSize()
```

#### Returns

- [IMenuTextSize](/docs/api/shared/menus/imenutextsize) - The text size setting for the option.

### ShouldShow(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/SubmenuMenuOption.cs#L34)

```csharp
public bool ShouldShow(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to check visibility for.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the option should be shown to the player; otherwise, false.

