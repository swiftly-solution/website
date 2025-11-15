---
title: MenuOptionFormattingEventArgs
---

```csharp
public sealed class MenuOptionFormattingEventArgs : EventArgs
```

#### Inheritance

#### Inherited Members

## Properties

### CustomText

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L51)

```csharp
public string? CustomText { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)?

### Option

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L46)

```csharp
public required IMenuOption Option { get; init; }
```

#### Property Value

- [IMenuOption](/docs/api/shared/menus/imenuoption)

### Player

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L41)

```csharp
public required IPlayer Player { get; init; }
```

#### Property Value

- [IPlayer](/docs/api/shared/players/iplayer)

