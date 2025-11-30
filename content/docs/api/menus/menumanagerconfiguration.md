---
title: MenuManagerConfiguration
---

# Struct MenuManagerConfiguration

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L8)

**Namespace**: [SwiftlyS2.Shared.Menus](/docs/api/menus)

**Assembly**: SwiftlyS2.CS2.dll

Configuration settings that control menu behavior, appearance, and player interaction.

```csharp
public readonly record struct MenuManagerConfiguration : IEquatable<MenuManagerConfiguration>
```

#### Implements

- [IEquatable<MenuManagerConfiguration>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### ButtonsExit

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L38)

Button configuration for closing menus.

```csharp
public required string ButtonsExit { get; init; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ButtonsScroll

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L28)

Button configuration for scrolling down through menu options.

```csharp
public required string ButtonsScroll { get; init; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ButtonsScrollBack

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L33)

Button configuration for scrolling up through menu options.

```csharp
public required string ButtonsScrollBack { get; init; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ButtonsUse

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L23)

Button configuration for selecting and activating menu options.

```csharp
public required string ButtonsUse { get; init; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### InputMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L18)

Input mode that determines how player input is captured for menu navigation.

```csharp
public required string InputMode { get; init; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ItemsPerPage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L73)

Maximum items per page. Menus exceeding this limit will be paginated.

```csharp
public required int ItemsPerPage { get; init; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NavigationPrefix

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L13)

Prefix used for menu navigation commands to distinguish them from other game commands.

```csharp
public required string NavigationPrefix { get; init; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SoundExitName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L63)

Sound effect name played when exiting menus.

```csharp
public required string SoundExitName { get; init; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SoundExitVolume

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L68)

Volume level for the exit sound (0.0 to 1.0).

```csharp
public required float SoundExitVolume { get; init; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SoundScrollName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L53)

Sound effect name played when scrolling through menu options.

```csharp
public required string SoundScrollName { get; init; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SoundScrollVolume

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L58)

Volume level for the scroll sound (0.0 to 1.0).

```csharp
public required float SoundScrollVolume { get; init; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SoundUseName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L43)

Sound effect name played when selecting a menu option.

```csharp
public required string SoundUseName { get; init; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SoundUseVolume

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuManagerAPI.cs#L48)

Volume level for the selection sound (0.0 to 1.0).

```csharp
public required float SoundUseVolume { get; init; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

