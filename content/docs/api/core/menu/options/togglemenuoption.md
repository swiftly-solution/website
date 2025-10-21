---
title: ToggleMenuOption
---

```csharp
public class ToggleMenuOption : IOption
```

#### Inheritance

#### Implements

#### Inherited Members

## Constructors

### ToggleMenuOption(string, bool, Action?, IMenuTextSize)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/ToggleMenuOption.cs#L7)

```csharp
public ToggleMenuOption(string text, bool defaultValue = false, Action<IPlayer, bool>? onToggle = null, IMenuTextSize size = IMenuTextSize.Medium)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **defaultValue**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
- **onToggle**: [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[IPlayer](/docs/api/shared/players/iplayer), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)>?
- **size**: [IMenuTextSize](/docs/api/shared/menus/imenutextsize)

## Properties

### CloseOnSelect

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/ToggleMenuOption.cs#L17)

```csharp
public bool CloseOnSelect { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Enabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/ToggleMenuOption.cs#L21)

```csharp
public bool Enabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EnabledCheck

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/ToggleMenuOption.cs#L13)

```csharp
public Func<IPlayer, bool>? EnabledCheck { get; set; }
```

#### Property Value

- [Func](https://learn.microsoft.com/dotnet/api/system.func-2)<[IPlayer](/docs/api/shared/players/iplayer), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)>?

### Menu

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/ToggleMenuOption.cs#L18)

```csharp
public IMenu? Menu { get; set; }
```

#### Property Value

- [IMenu](/docs/api/shared/menus/imenu)?

### OnToggle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/ToggleMenuOption.cs#L11)

```csharp
public Action<IPlayer, bool>? OnToggle { get; set; }
```

#### Property Value

- [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[IPlayer](/docs/api/shared/players/iplayer), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)>?

### OnValidationFailed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/ToggleMenuOption.cs#L15)

```csharp
public Action<IPlayer>? OnValidationFailed { get; set; }
```

#### Property Value

- [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[IPlayer](/docs/api/shared/players/iplayer)>?

### Size

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/ToggleMenuOption.cs#L16)

```csharp
public IMenuTextSize Size { get; set; }
```

#### Property Value

- [IMenuTextSize](/docs/api/shared/menus/imenutextsize)

### Text

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/ToggleMenuOption.cs#L9)

```csharp
public string Text { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ValidationCheck

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/ToggleMenuOption.cs#L14)

```csharp
public Func<IPlayer, bool>? ValidationCheck { get; set; }
```

#### Property Value

- [Func](https://learn.microsoft.com/dotnet/api/system.func-2)<[IPlayer](/docs/api/shared/players/iplayer), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)>?

### Value

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/ToggleMenuOption.cs#L10)

```csharp
public bool Value { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### VisibilityCheck

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/ToggleMenuOption.cs#L12)

```csharp
public Func<IPlayer, bool>? VisibilityCheck { get; set; }
```

#### Property Value

- [Func](https://learn.microsoft.com/dotnet/api/system.func-2)<[IPlayer](/docs/api/shared/players/iplayer), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)>?

### Visible

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/ToggleMenuOption.cs#L20)

```csharp
public bool Visible { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### CanInteract(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/ToggleMenuOption.cs#L28)

```csharp
public bool CanInteract(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to check interaction capability for.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the player can interact with the option; otherwise, false.

### GetDisplayText(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/ToggleMenuOption.cs#L33)

```csharp
public string GetDisplayText(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player requesting the display text.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The formatted display text for the option.

### GetTextSize()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/ToggleMenuOption.cs#L47)

```csharp
public IMenuTextSize GetTextSize()
```

#### Returns

- [IMenuTextSize](/docs/api/shared/menus/imenutextsize) - The text size setting for the option.

### ShouldShow(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/ToggleMenuOption.cs#L23)

```csharp
public bool ShouldShow(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to check visibility for.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the option should be shown to the player; otherwise, false.

### Toggle(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/ToggleMenuOption.cs#L52)

```csharp
public void Toggle(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer)

