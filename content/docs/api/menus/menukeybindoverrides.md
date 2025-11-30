---
title: MenuKeybindOverrides
---

# Struct MenuKeybindOverrides

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L181)

**Namespace**: [SwiftlyS2.Shared.Menus](/docs/api/menus)

**Assembly**: SwiftlyS2.CS2.dll

Custom key bindings for menu actions.
Each property can be set to override the default bindings, or left null to use defaults.

```csharp
public readonly record struct MenuKeybindOverrides : IEquatable<MenuKeybindOverrides>
```

#### Implements

- [IEquatable<MenuKeybindOverrides>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

NOTE: For WASD input mode, any key binding overrides will not take effect.

## Properties

### Exit

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L201)

Key binding for closing the menu.

```csharp
public KeyBind? Exit { get; init; }
```

#### Property Value

- [KeyBind](/docs/api/menus/keybind)?

### Move

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L191)

Key binding for moving forward through menu options.

```csharp
public KeyBind? Move { get; init; }
```

#### Property Value

- [KeyBind](/docs/api/menus/keybind)?

### MoveBack

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L196)

Key binding for moving backward through menu options.

```csharp
public KeyBind? MoveBack { get; init; }
```

#### Property Value

- [KeyBind](/docs/api/menus/keybind)?

### Select

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuAPI.cs#L186)

Key binding for selecting or activating the highlighted menu option.

```csharp
public KeyBind? Select { get; init; }
```

#### Property Value

- [KeyBind](/docs/api/menus/keybind)?

