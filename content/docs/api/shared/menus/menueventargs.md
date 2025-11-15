---
title: MenuEventArgs
---

```csharp
public sealed class MenuEventArgs : EventArgs
```

#### Inheritance

#### Inherited Members

## Properties

### Options

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L212)

```csharp
public IReadOnlyList<IMenuOption>? Options { get; init; }
```

#### Property Value

- [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)<[IMenuOption](/docs/api/shared/menus/imenuoption)>?

### Player

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L207)

```csharp
public IPlayer? Player { get; init; }
```

#### Property Value

- [IPlayer](/docs/api/shared/players/iplayer)?

