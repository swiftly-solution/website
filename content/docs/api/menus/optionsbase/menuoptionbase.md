---
title: MenuOptionBase
---

# Class MenuOptionBase

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/obj/Release/System.Text.RegularExpressions.Generator/System.Text.RegularExpressions.Generator.RegexGenerator/RegexGenerator.g.cs#L50)

**Namespace**: [SwiftlyS2.Core.Menus.OptionsBase](/docs/api/menus/optionsbase)

**Assembly**: SwiftlyS2.CS2.dll

Provides a base implementation for menu options with event-driven behavior.

```csharp
public abstract class MenuOptionBase : IMenuOption, IDisposable
```

#### Inheritance

- [object](https://learn.microsoft.com/dotnet/api/system.object)
- [MenuOptionBase](/docs/api/menus/optionsbase/menuoptionbase)

#### Derived

- [ButtonMenuOption](/docs/api/menus/optionsbase/buttonmenuoption)
- [ChoiceMenuOption](/docs/api/menus/optionsbase/choicemenuoption)
- [InputMenuOption](/docs/api/menus/optionsbase/inputmenuoption)
- [ProgressBarMenuOption](/docs/api/menus/optionsbase/progressbarmenuoption)
- [SliderMenuOption](/docs/api/menus/optionsbase/slidermenuoption)
- [SubmenuMenuOption](/docs/api/menus/optionsbase/submenumenuoption)
- [TextMenuOption](/docs/api/menus/optionsbase/textmenuoption)
- [ToggleMenuOption](/docs/api/menus/optionsbase/togglemenuoption)

#### Implements

- [IMenuOption](/docs/api/menus/imenuoption)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### MenuOptionBase()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L34)

Creates an instance of <xref href="SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase" data-throw-if-not-resolved="false"></xref>.

```csharp
protected MenuOptionBase()
```

#### Remarks

Using the parameterless constructor will not enable dynamic text updating features.
Derived classes should override the <xref href="SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.GetDisplayText(SwiftlyS2.Shared.Players.IPlayer%2cSystem.Int32)" data-throw-if-not-resolved="false"></xref> method to implement custom text style changes.

### MenuOptionBase(int, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L49)

Creates an instance of <xref href="SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase" data-throw-if-not-resolved="false"></xref> with dynamic text updating capabilities.

```csharp
protected MenuOptionBase(int updateIntervalMs, int pauseIntervalMs)
```

#### Parameters

- **updateIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The interval in milliseconds between text updates.
- **pauseIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The pause duration in milliseconds before starting the next text update cycle.

#### Remarks

Values less than 1/64f*1000 milliseconds (approximately 15.6ms) are meaningless,
as the refresh rate would be higher than the game's frame interval.
Both parameters will be automatically clamped to this minimum value.

## Properties

### CloseAfterClick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L206)

Gets or sets a value indicating whether the menu should be closed after handling the click.

```csharp
public bool CloseAfterClick { get; init; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Enabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L190)

Gets or sets a value indicating whether this option can be interacted with.

```csharp
public bool Enabled { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

This is a global property. Changing it will affect what all players see.

### LineCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L121)

Gets the number of lines this option requests to occupy in the menu.

```csharp
public virtual int LineCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MaxWidth

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L147)

The maximum display width for menu option text in relative units.

```csharp
public float MaxWidth { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Menu

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L116)

Gets or sets the menu that this option belongs to.

```csharp
public IMenuAPI? Menu { get; }
```

#### Property Value

- [IMenuAPI](/docs/api/menus/imenuapi)?

#### Remarks

This property will be null until the option is added to a menu via <xref href="SwiftlyS2.Shared.Menus.IMenuAPI.AddOption(SwiftlyS2.Shared.Menus.IMenuOption)" data-throw-if-not-resolved="false"></xref>.
When implementing custom menu options, avoid accessing this property in the constructor as it will not be set yet.

### PlaySound

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L237)

Gets or sets a value indicating whether a sound should play when this option is selected.

```csharp
public bool PlaySound { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Tag

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L211)

Gets or sets an object that contains data about this option.

```csharp
public object? Tag { get; set; }
```

#### Property Value

- [object](https://learn.microsoft.com/dotnet/api/system.object)?

### Text

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L129)

Gets or sets the text content displayed for this menu option.

```csharp
public string Text { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

This is a global property. Changing it will affect what all players see.

### TextSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L216)

Gets or sets the text size for this option.

```csharp
public MenuOptionTextSize TextSize { get; set; }
```

#### Property Value

- [MenuOptionTextSize](/docs/api/menus/menuoptiontextsize)

### TextStyle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L221)

Gets or sets the text overflow style for this option.

```csharp
public MenuOptionTextStyle TextStyle { get; set; }
```

#### Property Value

- [MenuOptionTextStyle](/docs/api/menus/menuoptiontextstyle)

### Visible

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L171)

Gets or sets a value indicating whether this option is visible in the menu.

```csharp
public bool Visible { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

This is a global property. Changing it will affect what all players see.

## Methods

### Dispose()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L78)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public virtual void Dispose()
```

### ~MenuOptionBase()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L73)

```csharp
protected ~MenuOptionBase()
```

### GetDisplayText(IPlayer, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L376)

Gets the display text for this option as it should appear to the specified player.

```csharp
public virtual string GetDisplayText(IPlayer player, int displayLine = 0)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player requesting the display text.
- **displayLine**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The display line index of the option.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The formatted display text for the option.

#### Remarks

When a menu option occupies multiple lines, MenuAPI may only need to display a specific line of that option.
<ul><li>When <code>LineCount=1</code>: The <code>displayLine</code> parameter is not needed; return the HTML-formatted string directly.</li><li>When <code>LineCount&gt;=2</code>: Check the <code>displayLine</code> parameter:
  <ul><li><code>displayLine=0</code>: Return all content</li><li><code>displayLine=1</code>: Return only the first line content</li><li><code>displayLine=2</code>: Return only the second line content</li><li>And so on...</li></ul>
</li></ul>
Note: MenuAPI ensures that the <code>displayLine</code> parameter will not exceed the option's <code>LineCount</code>.

### GetEnabled(IPlayer)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L308)

Determines whether this option is enabled for the specified player.

```csharp
public virtual bool GetEnabled(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player to check enabled state for.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the option is enabled for the player; otherwise, false.

### GetVisible(IPlayer)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L291)

Determines whether this option is visible to the specified player.

```csharp
public virtual bool GetVisible(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player to check visibility for.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the option is visible to the player; otherwise, false.

### IsClickTaskCompleted(IPlayer)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L284)

Determines whether the click task for the specified player is completed.

```csharp
public virtual bool IsClickTaskCompleted(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player to check.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the click task is completed; otherwise, false.

### OnClickAsync(IPlayer)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L479)

Handles the click action for this option.

```csharp
public virtual ValueTask OnClickAsync(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player who clicked the option.

#### Returns

- [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) - A task that represents the asynchronous operation.

### OnValidatingAsync(IPlayer)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L427)

Validates whether the specified player can interact with this option.

```csharp
public virtual ValueTask<bool> OnValidatingAsync(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player to validate.

#### Returns

- [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)> - A task that represents the asynchronous operation. The task result is true if validation succeeds; otherwise, false.

### PauseTextAnimation()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L96)

Pauses the dynamic text animation.

```csharp
public void PauseTextAnimation()
```

### ResumeTextAnimation()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L104)

Resumes the dynamic text animation.

```csharp
public void ResumeTextAnimation()
```

### SetEnabled(IPlayer, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L318)

Sets the enabled state of this option for a specific player.

```csharp
public virtual void SetEnabled(IPlayer player, bool enabled)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player to set enabled state for.
- **enabled**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True to enable the option for the player; false to disable it.

#### Remarks

The per-player enabled state has lower priority than the global <xref href="SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.Enabled" data-throw-if-not-resolved="false"></xref> property.

### SetVisible(IPlayer, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L301)

Sets the visibility of this option for a specific player.

```csharp
public virtual void SetVisible(IPlayer player, bool visible)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player to set visibility for.
- **visible**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True to make the option visible to the player; false to hide it.

#### Remarks

The per-player visibility has lower priority than the global <xref href="SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.Visible" data-throw-if-not-resolved="false"></xref> property.

### AfterFormat

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L277)

Occurs after HTML markup is assembled, allowing customization of the final HTML output.

```csharp
public event EventHandler<MenuOptionFormattingEventArgs>? AfterFormat
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionFormattingEventArgs](/docs/api/menus/menuoptionformattingeventargs)>?

### BeforeFormat

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L272)

Occurs before HTML markup is assembled, allowing customization of the text content.

```csharp
public event EventHandler<MenuOptionFormattingEventArgs>? BeforeFormat
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionFormattingEventArgs](/docs/api/menus/menuoptionformattingeventargs)>?

### Click

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L262)

Occurs when the option is clicked by a player.

```csharp
public event AsyncEventHandler<MenuOptionClickEventArgs>? Click
```

#### Event Type

- [AsyncEventHandler](/docs/api/menus/asynceventhandlert)<[MenuOptionClickEventArgs](/docs/api/menus/menuoptionclickeventargs)>?

### EnabledChanged

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L247)

Occurs when the enabled state of the option changes.

```csharp
public event EventHandler<MenuOptionEventArgs>? EnabledChanged
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionEventArgs](/docs/api/menus/menuoptioneventargs)>?

### TextChanged

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L252)

Occurs when the text of the option changes.

```csharp
public event EventHandler<MenuOptionEventArgs>? TextChanged
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionEventArgs](/docs/api/menus/menuoptioneventargs)>?

### Validating

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L257)

Occurs before a click is processed, allowing validation and cancellation.

```csharp
public event EventHandler<MenuOptionValidatingEventArgs>? Validating
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionValidatingEventArgs](/docs/api/menus/menuoptionvalidatingeventargs)>?

### VisibilityChanged

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L242)

Occurs when the visibility of the option changes.

```csharp
public event EventHandler<MenuOptionEventArgs>? VisibilityChanged
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionEventArgs](/docs/api/menus/menuoptioneventargs)>?

