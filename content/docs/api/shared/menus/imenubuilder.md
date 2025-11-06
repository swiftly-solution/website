---
title: IMenuBuilder
---

```csharp
public interface IMenuBuilder
```

## Properties

### Design

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L12)

```csharp
IMenuDesign Design { get; }
```

#### Property Value

- [IMenuDesign](/docs/api/shared/menus/imenudesign)

## Methods

### AddAsyncButton(string, Func, IMenuTextSize, MenuHorizontalStyle?)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L114)

```csharp
IMenuBuilder AddAsyncButton(string text, Func<IPlayer, Task> onClickAsync, IMenuTextSize size = IMenuTextSize.Medium, MenuHorizontalStyle? overflowStyle = null)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The display text for the async button.
- **onClickAsync**: [Func](https://learn.microsoft.com/dotnet/api/system.func-2)<[IPlayer](/docs/api/shared/players/iplayer), [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)> - The async function to execute when the button is clicked. Receives the player as parameter.
- **size**: [IMenuTextSize](/docs/api/shared/menus/imenutextsize) - The text size for the button display. Defaults to Medium.
- **overflowStyle**: [MenuHorizontalStyle](/docs/api/shared/menus/menuhorizontalstyle)? - The overflow style for the text. Defaults to null.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### AddAsyncButton(string, Func, IMenuTextSize, MenuHorizontalStyle?)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L125)

```csharp
IMenuBuilder AddAsyncButton(string text, Func<IPlayer, IOption, Task> onClickAsync, IMenuTextSize size = IMenuTextSize.Medium, MenuHorizontalStyle? overflowStyle = null)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The display text for the async button.
- **onClickAsync**: [Func](https://learn.microsoft.com/dotnet/api/system.func-3)<[IPlayer](/docs/api/shared/players/iplayer), [IOption](/docs/api/shared/menus/ioption), [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)> - The async function to execute when the button is clicked. Receives the player and option as parameters.
- **size**: [IMenuTextSize](/docs/api/shared/menus/imenutextsize) - The text size for the button display. Defaults to Medium.
- **overflowStyle**: [MenuHorizontalStyle](/docs/api/shared/menus/menuhorizontalstyle)? - The overflow style for the text. Defaults to null.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### AddButton(string, Action?, IMenuTextSize, MenuHorizontalStyle?)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L38)

```csharp
IMenuBuilder AddButton(string text, Action<IPlayer>? onClick = null, IMenuTextSize size = IMenuTextSize.Medium, MenuHorizontalStyle? overflowStyle = null)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The display text for the button.
- **onClick**: [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[IPlayer](/docs/api/shared/players/iplayer)>? - Optional action to execute when the button is clicked. Receives the player as parameter.
- **size**: [IMenuTextSize](/docs/api/shared/menus/imenutextsize) - The text size for the button display. Defaults to Medium.
- **overflowStyle**: [MenuHorizontalStyle](/docs/api/shared/menus/menuhorizontalstyle)? - The overflow style for the text. Defaults to null.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### AddButton(string, Action?, IMenuTextSize, MenuHorizontalStyle?)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L49)

```csharp
IMenuBuilder AddButton(string text, Action<IPlayer, IOption>? onClick, IMenuTextSize size = IMenuTextSize.Medium, MenuHorizontalStyle? overflowStyle = null)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The display text for the button.
- **onClick**: [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[IPlayer](/docs/api/shared/players/iplayer), [IOption](/docs/api/shared/menus/ioption)>? - Optional action to execute when the button is clicked. Receives the player and option as parameters.
- **size**: [IMenuTextSize](/docs/api/shared/menus/imenutextsize) - The text size for the button display. Defaults to Medium.
- **overflowStyle**: [MenuHorizontalStyle](/docs/api/shared/menus/menuhorizontalstyle)? - The overflow style for the text. Defaults to null.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### AddChoice(string, string[], string?, Action?, IMenuTextSize, MenuHorizontalStyle?)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L206)

```csharp
IMenuBuilder AddChoice(string text, string[] choices, string? defaultChoice = null, Action<IPlayer, string>? onChange = null, IMenuTextSize size = IMenuTextSize.Medium, MenuHorizontalStyle? overflowStyle = null)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The display text for the choice option.
- **choices**: [string](https://learn.microsoft.com/dotnet/api/system.string)[] - An array of available choice strings.
- **defaultChoice**: [string](https://learn.microsoft.com/dotnet/api/system.string)? - The initially selected choice. Defaults to null (first choice).
- **onChange**: [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[IPlayer](/docs/api/shared/players/iplayer), [string](https://learn.microsoft.com/dotnet/api/system.string)>? - Optional action to execute when the choice changes. Receives the player and selected choice string.
- **size**: [IMenuTextSize](/docs/api/shared/menus/imenutextsize) - The text size for the choice display. Defaults to Medium.
- **overflowStyle**: [MenuHorizontalStyle](/docs/api/shared/menus/menuhorizontalstyle)? - The overflow style for the text. Defaults to null.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### AddChoice(string, string[], string?, Action?, IMenuTextSize, MenuHorizontalStyle?)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L232)

```csharp
IMenuBuilder AddChoice(string text, string[] choices, string? defaultChoice, Action<IPlayer, IOption, string>? onChange, IMenuTextSize size = IMenuTextSize.Medium, MenuHorizontalStyle? overflowStyle = null)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The display text for the choice option.
- **choices**: [string](https://learn.microsoft.com/dotnet/api/system.string)[] - An array of available choice strings.
- **defaultChoice**: [string](https://learn.microsoft.com/dotnet/api/system.string)? - The initially selected choice.
- **onChange**: [Action](https://learn.microsoft.com/dotnet/api/system.action-3)<[IPlayer](/docs/api/shared/players/iplayer), [IOption](/docs/api/shared/menus/ioption), [string](https://learn.microsoft.com/dotnet/api/system.string)>? - Optional action to execute when the choice changes. Receives the player, option, and selected choice string.
- **size**: [IMenuTextSize](/docs/api/shared/menus/imenutextsize) - The text size for the choice display. Defaults to Medium.
- **overflowStyle**: [MenuHorizontalStyle](/docs/api/shared/menus/menuhorizontalstyle)? - The overflow style for the text. Defaults to null.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### AddProgressBar(string, Func, int, IMenuTextSize, MenuHorizontalStyle?)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L251)

```csharp
IMenuBuilder AddProgressBar(string text, Func<float> progressProvider, int barWidth = 20, IMenuTextSize size = IMenuTextSize.Medium, MenuHorizontalStyle? overflowStyle = null)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The display text for the progress bar.
- **progressProvider**: [Func](https://learn.microsoft.com/dotnet/api/system.func-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)> - A function that returns the current progress value (0.0 to 1.0).
- **barWidth**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The character width of the progress bar. Defaults to 20.
- **size**: [IMenuTextSize](/docs/api/shared/menus/imenutextsize) - The text size for the progress bar display. Defaults to Medium.
- **overflowStyle**: [MenuHorizontalStyle](/docs/api/shared/menus/menuhorizontalstyle)? - The overflow style for the text. Defaults to null.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### AddProgressBar(string, Func, int, MenuHorizontalStyle?)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L262)

```csharp
IMenuBuilder AddProgressBar(string text, Func<float> progressProvider, int barWidth, MenuHorizontalStyle? overflowStyle = null)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The display text for the progress bar.
- **progressProvider**: [Func](https://learn.microsoft.com/dotnet/api/system.func-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)> - A function that returns the current progress value (0.0 to 1.0).
- **barWidth**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The character width of the progress bar.
- **overflowStyle**: [MenuHorizontalStyle](/docs/api/shared/menus/menuhorizontalstyle)? - The overflow style for the text. Defaults to null.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### AddSeparator()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L239)

```csharp
IMenuBuilder AddSeparator()
```

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### AddSlider(string, float, float, float, float, Action?, IMenuTextSize, MenuHorizontalStyle?)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L88)

```csharp
IMenuBuilder AddSlider(string text, float min, float max, float defaultValue, float step = 1, Action<IPlayer, float>? onChange = null, IMenuTextSize size = IMenuTextSize.Medium, MenuHorizontalStyle? overflowStyle = null)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The display text for the slider option.
- **min**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The minimum allowed value for the slider.
- **max**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The maximum allowed value for the slider.
- **defaultValue**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The initial value of the slider.
- **step**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The increment/decrement step size. Defaults to 1.
- **onChange**: [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[IPlayer](/docs/api/shared/players/iplayer), [float](https://learn.microsoft.com/dotnet/api/system.single)>? - Optional action to execute when the slider value changes. Receives the player and new float value.
- **size**: [IMenuTextSize](/docs/api/shared/menus/imenutextsize) - The text size for the slider display. Defaults to Medium.
- **overflowStyle**: [MenuHorizontalStyle](/docs/api/shared/menus/menuhorizontalstyle)? - The overflow style for the text. Defaults to null.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### AddSlider(string, float, float, float, float, Action?, IMenuTextSize, MenuHorizontalStyle?)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L103)

```csharp
IMenuBuilder AddSlider(string text, float min, float max, float defaultValue, float step, Action<IPlayer, IOption, float>? onChange, IMenuTextSize size = IMenuTextSize.Medium, MenuHorizontalStyle? overflowStyle = null)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The display text for the slider option.
- **min**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The minimum allowed value for the slider.
- **max**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The maximum allowed value for the slider.
- **defaultValue**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The initial value of the slider.
- **step**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The increment/decrement step size.
- **onChange**: [Action](https://learn.microsoft.com/dotnet/api/system.action-3)<[IPlayer](/docs/api/shared/players/iplayer), [IOption](/docs/api/shared/menus/ioption), [float](https://learn.microsoft.com/dotnet/api/system.single)>? - Optional action to execute when the slider value changes. Receives the player, option, and new float value.
- **size**: [IMenuTextSize](/docs/api/shared/menus/imenutextsize) - The text size for the slider display. Defaults to Medium.
- **overflowStyle**: [MenuHorizontalStyle](/docs/api/shared/menus/menuhorizontalstyle)? - The overflow style for the text. Defaults to null.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### AddSubmenu(string, IMenu, IMenuTextSize)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L146)

```csharp
IMenuBuilder AddSubmenu(string text, IMenu submenu, IMenuTextSize size = IMenuTextSize.Medium)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The display text for the submenu option.
- **submenu**: [IMenu](/docs/api/shared/menus/imenu) - The submenu instance to navigate to.
- **size**: [IMenuTextSize](/docs/api/shared/menus/imenutextsize) - The text size for the submenu display. Defaults to Medium.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### AddSubmenu(string, IMenu)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L155)

```csharp
IMenuBuilder AddSubmenu(string text, IMenu submenu)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The display text for the submenu option.
- **submenu**: [IMenu](/docs/api/shared/menus/imenu) - The submenu instance to navigate to.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### AddSubmenu(string, Func, IMenuTextSize)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L165)

```csharp
IMenuBuilder AddSubmenu(string text, Func<IMenu> submenuBuilder, IMenuTextSize size = IMenuTextSize.Medium)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The display text for the submenu option.
- **submenuBuilder**: [Func](https://learn.microsoft.com/dotnet/api/system.func-1)<[IMenu](/docs/api/shared/menus/imenu)> - A function that returns the submenu instance when called.
- **size**: [IMenuTextSize](/docs/api/shared/menus/imenutextsize) - The text size for the submenu display. Defaults to Medium.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### AddSubmenu(string, Func)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L174)

```csharp
IMenuBuilder AddSubmenu(string text, Func<IMenu> submenuBuilder)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The display text for the submenu option.
- **submenuBuilder**: [Func](https://learn.microsoft.com/dotnet/api/system.func-1)<[IMenu](/docs/api/shared/menus/imenu)> - A function that returns the submenu instance when called.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### AddSubmenu(string, Func>, IMenuTextSize)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L184)

```csharp
IMenuBuilder AddSubmenu(string text, Func<Task<IMenu>> submenuBuilder, IMenuTextSize size = IMenuTextSize.Medium)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The display text for the submenu option.
- **submenuBuilder**: [Func](https://learn.microsoft.com/dotnet/api/system.func-1)<[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[IMenu](/docs/api/shared/menus/imenu)>> - An asynchronous function that returns the submenu instance when called.
- **size**: [IMenuTextSize](/docs/api/shared/menus/imenutextsize) - The text size for the submenu display. Defaults to Medium.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### AddSubmenu(string, Func>)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L193)

```csharp
IMenuBuilder AddSubmenu(string text, Func<Task<IMenu>> submenuBuilder)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The display text for the submenu option.
- **submenuBuilder**: [Func](https://learn.microsoft.com/dotnet/api/system.func-1)<[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[IMenu](/docs/api/shared/menus/imenu)>> - An asynchronous function that returns the submenu instance when called.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### AddText(string, ITextAlign, IMenuTextSize, MenuHorizontalStyle?)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L136)

```csharp
IMenuBuilder AddText(string text, ITextAlign alignment = ITextAlign.Left, IMenuTextSize size = IMenuTextSize.Medium, MenuHorizontalStyle? overflowStyle = null)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text content to display.
- **alignment**: [ITextAlign](/docs/api/shared/menus/itextalign) - The text alignment within the menu. Defaults to Left.
- **size**: [IMenuTextSize](/docs/api/shared/menus/imenutextsize) - The text size for the display. Defaults to Medium.
- **overflowStyle**: [MenuHorizontalStyle](/docs/api/shared/menus/menuhorizontalstyle)? - The overflow style for the text. Defaults to null.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### AddToggle(string, bool, Action?, IMenuTextSize, MenuHorizontalStyle?)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L61)

```csharp
IMenuBuilder AddToggle(string text, bool defaultValue = false, Action<IPlayer, bool>? onToggle = null, IMenuTextSize size = IMenuTextSize.Medium, MenuHorizontalStyle? overflowStyle = null)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The display text for the toggle option.
- **defaultValue**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - The initial state of the toggle. Defaults to false.
- **onToggle**: [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[IPlayer](/docs/api/shared/players/iplayer), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)>? - Optional action to execute when the toggle state changes. Receives the player and new boolean value.
- **size**: [IMenuTextSize](/docs/api/shared/menus/imenutextsize) - The text size for the toggle display. Defaults to Medium.
- **overflowStyle**: [MenuHorizontalStyle](/docs/api/shared/menus/menuhorizontalstyle)? - The overflow style for the text. Defaults to null.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### AddToggle(string, bool, Action?, IMenuTextSize, MenuHorizontalStyle?)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L73)

```csharp
IMenuBuilder AddToggle(string text, bool defaultValue, Action<IPlayer, IOption, bool>? onToggle, IMenuTextSize size = IMenuTextSize.Medium, MenuHorizontalStyle? overflowStyle = null)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The display text for the toggle option.
- **defaultValue**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - The initial state of the toggle. Defaults to false.
- **onToggle**: [Action](https://learn.microsoft.com/dotnet/api/system.action-3)<[IPlayer](/docs/api/shared/players/iplayer), [IOption](/docs/api/shared/menus/ioption), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)>? - Optional action to execute when the toggle state changes. Receives the player, option, and new boolean value.
- **size**: [IMenuTextSize](/docs/api/shared/menus/imenutextsize) - The text size for the toggle display. Defaults to Medium.
- **overflowStyle**: [MenuHorizontalStyle](/docs/api/shared/menus/menuhorizontalstyle)? - The overflow style for the text. Defaults to null.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### AutoClose(float)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L301)

```csharp
IMenuBuilder AutoClose(float seconds)
```

#### Parameters

- **seconds**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The number of seconds after which to automatically close the menu.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### CloseOnSelect()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L293)

```csharp
IMenuBuilder CloseOnSelect()
```

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### EnabledWhen(Func)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L286)

```csharp
IMenuBuilder EnabledWhen(Func<IPlayer, bool> condition)
```

#### Parameters

- **condition**: [Func](https://learn.microsoft.com/dotnet/api/system.func-2)<[IPlayer](/docs/api/shared/players/iplayer), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)> - A function that takes a player and returns true if the menu should be enabled.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### ForceFreeze()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L356)

```csharp
IMenuBuilder ForceFreeze()
```

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### HasSound(bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L27)

```csharp
IMenuBuilder HasSound(bool hasSound)
```

#### Parameters

- **hasSound**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Enables/disables sound effects for menu interactions.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### MaxVisibleItems(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L341)

```csharp
[Obsolete("Use Design.MaxVisibleItems instead")]
IMenuBuilder MaxVisibleItems(int count)
```

#### Parameters

- **count**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The maximum number of visible items.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

#### Remarks

### NoFreeze()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L349)

```csharp
IMenuBuilder NoFreeze()
```

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### OverrideExitButton(params string[])

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L327)

```csharp
[Obsolete("Use Design.OverrideExitButton instead")]
IMenuBuilder OverrideExitButton(params string[] buttonNames)
```

#### Parameters

- **buttonNames**: [string](https://learn.microsoft.com/dotnet/api/system.string)[] - The names of the buttons to use for exiting.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### OverrideMoveButton(params string[])

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L318)

```csharp
[Obsolete("Use Design.OverrideMoveButton instead")]
IMenuBuilder OverrideMoveButton(params string[] buttonNames)
```

#### Parameters

- **buttonNames**: [string](https://learn.microsoft.com/dotnet/api/system.string)[] - The names of the buttons to use for movement.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### OverrideSelectButton(params string[])

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L309)

```csharp
[Obsolete("Use Design.OverrideSelectButton instead")]
IMenuBuilder OverrideSelectButton(params string[] buttonNames)
```

#### Parameters

- **buttonNames**: [string](https://learn.microsoft.com/dotnet/api/system.string)[] - The names of the buttons to use for selection.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### SetColor(Color)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L364)

```csharp
[Obsolete("Use Design.SetColor instead")]
IMenuBuilder SetColor(Color color)
```

#### Parameters

- **color**: [Color](/docs/api/shared/natives/color) - The color to use for menu rendering.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### SetMenu(IMenu)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L20)

```csharp
IMenuBuilder SetMenu(IMenu menu)
```

#### Parameters

- **menu**: [IMenu](/docs/api/shared/menus/imenu) - The menu instance to build and configure.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### VisibleWhen(Func)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L278)

```csharp
IMenuBuilder VisibleWhen(Func<IPlayer, bool> condition)
```

#### Parameters

- **condition**: [Func](https://learn.microsoft.com/dotnet/api/system.func-2)<[IPlayer](/docs/api/shared/players/iplayer), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)> - A function that takes a player and returns true if the menu should be visible.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

### WithParent(IMenu)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuBuilder.cs#L270)

```csharp
IMenuBuilder WithParent(IMenu parent)
```

#### Parameters

- **parent**: [IMenu](/docs/api/shared/menus/imenu) - The parent menu instance.

#### Returns

- [IMenuBuilder](/docs/api/shared/menus/imenubuilder) - The current menu builder instance for method chaining.

