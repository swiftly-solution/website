---
title: MenuOptionValueChangedEventArgs
---

```csharp
public sealed class MenuOptionValueChangedEventArgs<T> : EventArgs
```

#### Type Parameters

- **T**:  - The type of the value.

#### Inheritance

#### Inherited Members

## Properties

### NewValue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L128)

```csharp
public required T NewValue { get; init; }
```

#### Property Value

- T

### OldValue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L123)

```csharp
public required T OldValue { get; init; }
```

#### Property Value

- T

### Option

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L118)

```csharp
public required IMenuOption Option { get; init; }
```

#### Property Value

- [IMenuOption](/docs/api/shared/menus/imenuoption)

### Player

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L113)

```csharp
public required IPlayer Player { get; init; }
```

#### Property Value

- [IPlayer](/docs/api/shared/players/iplayer)

