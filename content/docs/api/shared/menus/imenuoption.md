---
title: IMenuOption
---

```csharp
public interface IMenuOption
```

## Properties

**DefaultValue** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L42)

```csharp
object? DefaultValue { get; set; }
```

#### Property Value

- [object](https://learn.microsoft.com/dotnet/api/system.object)?

**Disabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L38)

```csharp
bool Disabled { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Display** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L22)

```csharp
string Display { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**Index** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L30)

```csharp
int Index { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Menu** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L18)

```csharp
IMenu? Menu { get; set; }
```

#### Property Value

- [IMenu](/docs/api/shared/menus/imenu)?

**OnChoice** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L26)

```csharp
Action<IPlayer, IMenuOption, IMenu>? OnChoice { get; set; }
```

#### Property Value

- [Action](https://learn.microsoft.com/dotnet/api/system.action-3)<[IPlayer](/docs/api/shared/players/iplayer), [IMenuOption](/docs/api/shared/menus/imenuoption), [IMenu](/docs/api/shared/menus/imenu)>?

**SelectedIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L58)

```csharp
int SelectedIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**SliderDisplayItems** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L46)

```csharp
int SliderDisplayItems { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**SliderValues** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L50)

```csharp
List<object>? SliderValues { get; set; }
```

#### Property Value

- [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)>?

**Type** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L34)

```csharp
OptionType Type { get; set; }
```

#### Property Value

- [OptionType](/docs/api/shared/menus/optiontype)

**Value** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L54)

```csharp
object? Value { get; set; }
```

#### Property Value

- [object](https://learn.microsoft.com/dotnet/api/system.object)?

