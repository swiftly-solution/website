---
title: IOption
---

```csharp
public interface IOption
```

## Properties

### Enabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IOption.cs#L23)

```csharp
bool Enabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Menu

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IOption.cs#L28)

```csharp
IMenu? Menu { get; set; }
```

#### Property Value

- [IMenu](/docs/api/shared/menus/imenu)?

### OverflowStyle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IOption.cs#L33)

```csharp
MenuHorizontalStyle? OverflowStyle { get; }
```

#### Property Value

- [MenuHorizontalStyle](/docs/api/shared/menus/menuhorizontalstyle)?

### Text

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IOption.cs#L13)

```csharp
string Text { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Visible

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IOption.cs#L18)

```csharp
bool Visible { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### CanInteract(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IOption.cs#L47)

```csharp
bool CanInteract(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to check interaction capability for.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the player can interact with the option; otherwise, false.

### GetDisplayText(IPlayer, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IOption.cs#L55)

```csharp
string GetDisplayText(IPlayer player, bool updateHorizontalStyle)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player requesting the display text.
- **updateHorizontalStyle**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Indicates whether to update the horizontal style of the text.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The formatted display text for the option.

### GetTextSize()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IOption.cs#L61)

```csharp
IMenuTextSize GetTextSize()
```

#### Returns

- [IMenuTextSize](/docs/api/shared/menus/imenutextsize) - The text size setting for the option.

### HasSound()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IOption.cs#L67)

```csharp
bool HasSound()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the option should play a sound; otherwise, false.

### ShouldShow(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IOption.cs#L40)

```csharp
bool ShouldShow(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to check visibility for.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the option should be shown to the player; otherwise, false.

