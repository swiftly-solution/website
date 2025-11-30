---
title: MenuOptionValidatingEventArgs
---

# Class MenuOptionValidatingEventArgs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L57)

**Namespace**: [SwiftlyS2.Shared.Menus](/docs/api/menus)

**Assembly**: SwiftlyS2.CS2.dll

Provides event data for menu option validation events.

```csharp
public sealed class MenuOptionValidatingEventArgs : EventArgs
```

#### Inheritance

- [object](https://learn.microsoft.com/dotnet/api/system.object)
- [EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs)
- [MenuOptionValidatingEventArgs](/docs/api/menus/menuoptionvalidatingeventargs)

#### Inherited Members

- [EventArgs.Empty](https://learn.microsoft.com/dotnet/api/system.eventargs.empty)
- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### Cancel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L72)

Gets or sets a value indicating whether the interaction should be canceled.

```csharp
public bool Cancel { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CancelReason

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L77)

Gets or sets the reason why the interaction was canceled.

```csharp
public string? CancelReason { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)?

### Option

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L67)

The menu option being validated.

```csharp
public required IMenuOption Option { get; init; }
```

#### Property Value

- [IMenuOption](/docs/api/menus/imenuoption)

### Player

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L62)

The player attempting to interact with the option.

```csharp
public required IPlayer Player { get; init; }
```

#### Property Value

- [IPlayer](/docs/api/players/iplayer)

