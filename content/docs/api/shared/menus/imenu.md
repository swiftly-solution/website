---
title: IMenu
---

```csharp
public interface IMenu
```

## Properties

### CanExit

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L40)

```csharp
bool CanExit { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Color

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L48)

```csharp
Color Color { get; set; }
```

#### Property Value

- [Color](/docs/api/shared/natives/color)

### CurrentIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L56)

```csharp
int CurrentIndex { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FreezePlayer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L28)

```csharp
bool? FreezePlayer { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### HasSound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L32)

```csharp
bool HasSound { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Kind

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L44)

```csharp
MenuType Kind { get; set; }
```

#### Property Value

- [MenuType](/docs/api/shared/menus/menutype)

### MaxTitleLength

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L20)

```csharp
int MaxTitleLength { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Options

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L24)

```csharp
List<IMenuOption> Options { get; set; }
```

#### Property Value

- [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[IMenuOption](/docs/api/shared/menus/imenuoption)>

### ParentMenu

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L36)

```csharp
IMenu? ParentMenu { get; set; }
```

#### Property Value

- [IMenu](/docs/api/shared/menus/imenu)?

### RenderText

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L52)

```csharp
string? RenderText { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)?

### Title

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L16)

```csharp
string Title { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### AddBoolOption(string, bool, Action?, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L74)

```csharp
ref IMenuOption AddBoolOption(string display, bool defaultValue, Action<IPlayer, IMenuOption, IMenu>? onChoice, bool defaultDisabled = false)
```

#### Parameters

- **display**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Text to display
- **defaultValue**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Default value
- **onChoice**: [Action](https://learn.microsoft.com/dotnet/api/system.action-3)<[IPlayer](/docs/api/shared/players/iplayer), [IMenuOption](/docs/api/shared/menus/imenuoption), [IMenu](/docs/api/shared/menus/imenu)>? - Use Callback
- **defaultDisabled**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Make it disabled by default

#### Returns

- [IMenuOption](/docs/api/shared/menus/imenuoption) - Menu Option

### AddInputOption(string, string, string?, Action?, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L84)

```csharp
ref IMenuOption AddInputOption(string display, string placeholder, string? inputRequestMessage, Action<IPlayer, IMenuOption, IMenu, string>? onInput, bool defaultDisabled = false)
```

#### Parameters

- **display**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Text to display
- **placeholder**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Placeholder text
- **inputRequestMessage**: [string](https://learn.microsoft.com/dotnet/api/system.string)? - Input request message
- **onInput**: [Action](https://learn.microsoft.com/dotnet/api/system.action-4)<[IPlayer](/docs/api/shared/players/iplayer), [IMenuOption](/docs/api/shared/menus/imenuoption), [IMenu](/docs/api/shared/menus/imenu), [string](https://learn.microsoft.com/dotnet/api/system.string)>? - Use Callback
- **defaultDisabled**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Make it disabled by default

#### Returns

- [IMenuOption](/docs/api/shared/menus/imenuoption) - Menu Option

### AddOption(string, Action?, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L65)

```csharp
ref IMenuOption AddOption(string display, Action<IPlayer, IMenuOption, IMenu>? onChoice, bool defaultDisabled = false)
```

#### Parameters

- **display**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Text to display
- **onChoice**: [Action](https://learn.microsoft.com/dotnet/api/system.action-3)<[IPlayer](/docs/api/shared/players/iplayer), [IMenuOption](/docs/api/shared/menus/imenuoption), [IMenu](/docs/api/shared/menus/imenu)>? - Use Callback
- **defaultDisabled**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Make it disabled by default

#### Returns

- [IMenuOption](/docs/api/shared/menus/imenuoption) - Menu Option

### AddSliderOption(string, List, object?, int, Action?, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L95)

```csharp
ref IMenuOption AddSliderOption(string display, List<object> values, object? defaultValue, int displayItems, Action<IPlayer, IMenuOption, IMenu, int, object>? onSlide, bool defaultDisabled = false)
```

#### Parameters

- **display**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Text to display
- **values**: [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)> - List of values
- **defaultValue**: [object](https://learn.microsoft.com/dotnet/api/system.object)? - Default value
- **displayItems**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Number of items to display
- **onSlide**: [Action](https://learn.microsoft.com/dotnet/api/system.action-5)<[IPlayer](/docs/api/shared/players/iplayer), [IMenuOption](/docs/api/shared/menus/imenuoption), [IMenu](/docs/api/shared/menus/imenu), [int](https://learn.microsoft.com/dotnet/api/system.int32), [object](https://learn.microsoft.com/dotnet/api/system.object)>? - Use Callback
- **defaultDisabled**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Make it disabled by default

#### Returns

- [IMenuOption](/docs/api/shared/menus/imenuoption) - Menu Option

### ChangePosition(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenu.cs#L101)

```csharp
void ChangePosition(int count)
```

#### Parameters

- **count**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The amount of advancements to make in front or in back

