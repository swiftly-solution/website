---
title: TextMenuOption
---

```csharp
public class TextMenuOption : IOption
```

#### Inheritance

#### Implements

#### Inherited Members

## Constructors

### TextMenuOption(string, ITextAlign, IMenuTextSize)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/TextMenuOption.cs#L19)

```csharp
public TextMenuOption(string text, ITextAlign alignment = ITextAlign.Left, IMenuTextSize size = IMenuTextSize.Medium)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **alignment**: [ITextAlign](/docs/api/shared/menus/itextalign)
- **size**: [IMenuTextSize](/docs/api/shared/menus/imenutextsize)

### TextMenuOption(Func, ITextAlign, IMenuTextSize)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/TextMenuOption.cs#L26)

```csharp
public TextMenuOption(Func<string> dynamicText, ITextAlign alignment = ITextAlign.Left, IMenuTextSize size = IMenuTextSize.Medium)
```

#### Parameters

- **dynamicText**: [Func](https://learn.microsoft.com/dotnet/api/system.func-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>
- **alignment**: [ITextAlign](/docs/api/shared/menus/itextalign)
- **size**: [IMenuTextSize](/docs/api/shared/menus/imenutextsize)

## Properties

### Alignment

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/TextMenuOption.cs#L10)

```csharp
public ITextAlign Alignment { get; set; }
```

#### Property Value

- [ITextAlign](/docs/api/shared/menus/itextalign)

### DynamicText

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/TextMenuOption.cs#L13)

```csharp
public Func<string>? DynamicText { get; set; }
```

#### Property Value

- [Func](https://learn.microsoft.com/dotnet/api/system.func-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>?

### Enabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/TextMenuOption.cs#L17)

```csharp
public bool Enabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Menu

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/TextMenuOption.cs#L14)

```csharp
public IMenu? Menu { get; set; }
```

#### Property Value

- [IMenu](/docs/api/shared/menus/imenu)?

### Size

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/TextMenuOption.cs#L11)

```csharp
public IMenuTextSize Size { get; set; }
```

#### Property Value

- [IMenuTextSize](/docs/api/shared/menus/imenutextsize)

### Text

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/TextMenuOption.cs#L9)

```csharp
public string Text { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### VisibilityCheck

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/TextMenuOption.cs#L12)

```csharp
public Func<IPlayer, bool>? VisibilityCheck { get; set; }
```

#### Property Value

- [Func](https://learn.microsoft.com/dotnet/api/system.func-2)<[IPlayer](/docs/api/shared/players/iplayer), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)>?

### Visible

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/TextMenuOption.cs#L16)

```csharp
public bool Visible { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### CanInteract(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/TextMenuOption.cs#L39)

```csharp
public bool CanInteract(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to check interaction capability for.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the player can interact with the option; otherwise, false.

### GetDisplayText(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/TextMenuOption.cs#L44)

```csharp
public string GetDisplayText(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player requesting the display text.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The formatted display text for the option.

### GetTextSize()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/TextMenuOption.cs#L60)

```csharp
public IMenuTextSize GetTextSize()
```

#### Returns

- [IMenuTextSize](/docs/api/shared/menus/imenutextsize) - The text size setting for the option.

### ShouldShow(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/Options/TextMenuOption.cs#L34)

```csharp
public bool ShouldShow(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to check visibility for.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the option should be shown to the player; otherwise, false.

