---
title: MenuOptionValidatingEventArgs
---

```csharp
public sealed class MenuOptionValidatingEventArgs : EventArgs
```

#### Inheritance

#### Inherited Members

## Properties

### Cancel

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L72)

```csharp
public bool Cancel { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CancelReason

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L77)

```csharp
public string? CancelReason { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)?

### Option

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L67)

```csharp
public required IMenuOption Option { get; init; }
```

#### Property Value

- [IMenuOption](/docs/api/shared/menus/imenuoption)

### Player

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L62)

```csharp
public required IPlayer Player { get; init; }
```

#### Property Value

- [IPlayer](/docs/api/shared/players/iplayer)

