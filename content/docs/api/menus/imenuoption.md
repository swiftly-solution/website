---
title: IMenuOption
---

# Interface IMenuOption

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L134)

**Namespace**: [SwiftlyS2.Shared.Menus](/docs/api/menus)

**Assembly**: SwiftlyS2.CS2.dll

Represents a menu option that can be displayed and interacted with by players.

```csharp
public interface IMenuOption : IDisposable
```

#### Implements

- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### CloseAfterClick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L182)

Gets a value indicating whether the menu should be closed after handling the click.

```csharp
bool CloseAfterClick { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Enabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L177)

Gets or sets a value indicating whether this option can be interacted with.

```csharp
bool Enabled { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

This is a global property. Changing it will affect what all players see.

### LineCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L148)

Gets the number of lines this option requests to occupy in the menu.

```csharp
int LineCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MaxWidth

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L161)

The maximum display width for menu option text in relative units.

```csharp
float MaxWidth { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Menu

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L143)

Gets the menu that this option belongs to.

```csharp
IMenuAPI? Menu { get; }
```

#### Property Value

- [IMenuAPI](/docs/api/menus/imenuapi)?

#### Remarks

This property will be null until the option is added to a menu via <xref href="SwiftlyS2.Shared.Menus.IMenuAPI.AddOption(SwiftlyS2.Shared.Menus.IMenuOption)" data-throw-if-not-resolved="false"></xref>.
When implementing custom menu options, avoid accessing this property in the constructor as it will not be set yet.

### PlaySound

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L202)

Gets or sets a value indicating whether a sound should play when this option is selected.

```csharp
bool PlaySound { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Tag

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L187)

Gets or sets an object that contains data about this option.

```csharp
object? Tag { get; set; }
```

#### Property Value

- [object](https://learn.microsoft.com/dotnet/api/system.object)?

### Text

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L156)

Gets or sets the text content displayed for this menu option.

```csharp
string Text { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

This is a global property. Changing it will affect what all players see.

### TextSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L192)

Gets or sets the text size for this option.

```csharp
MenuOptionTextSize TextSize { get; set; }
```

#### Property Value

- [MenuOptionTextSize](/docs/api/menus/menuoptiontextsize)

### TextStyle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L197)

Gets or sets the text overflow style for this option.

```csharp
MenuOptionTextStyle TextStyle { get; set; }
```

#### Property Value

- [MenuOptionTextStyle](/docs/api/menus/menuoptiontextstyle)

### Visible

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L169)

Gets or sets a value indicating whether this option is visible in the menu.

```csharp
bool Visible { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

This is a global property. Changing it will affect what all players see.

## Methods

### GetDisplayText(IPlayer, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L320)

Gets the display text for this option as it should appear to the specified player.

```csharp
string GetDisplayText(IPlayer player, int displayLine = 0)
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

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L273)

Determines whether this option is enabled for the specified player.

```csharp
bool GetEnabled(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player to check enabled state for.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the option is enabled for the player, otherwise, false.

### GetVisible(IPlayer)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L256)

Determines whether this option is visible to the specified player.

```csharp
bool GetVisible(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player to check visibility for.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the option is visible to the player, otherwise, false.

### IsClickTaskCompleted(IPlayer)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L249)

Determines whether the click task for the specified player is completed.

```csharp
bool IsClickTaskCompleted(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player to check.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the click task is completed; otherwise, false.

### OnClickAsync(IPlayer)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L342)

Handles the click action for this option.

```csharp
ValueTask OnClickAsync(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player who clicked the option.

#### Returns

- [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) - A task that represents the asynchronous operation.

### OnValidatingAsync(IPlayer)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L327)

Validates whether the specified player can interact with this option.

```csharp
ValueTask<bool> OnValidatingAsync(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player to validate.

#### Returns

- [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)> - A task that represents the asynchronous operation. The task result is true if validation succeeds; otherwise, false.

### SetEnabled(IPlayer, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L283)

Sets the enabled state of this option for a specific player.

```csharp
void SetEnabled(IPlayer player, bool enabled)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player to set enabled state for.
- **enabled**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True to enable the option for the player; false to disable it.

#### Remarks

The per-player enabled state has lower priority than the global <xref href="SwiftlyS2.Shared.Menus.IMenuOption.Enabled" data-throw-if-not-resolved="false"></xref> property.

### SetVisible(IPlayer, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L266)

Sets the visibility of this option for a specific player.

```csharp
void SetVisible(IPlayer player, bool visible)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player to set visibility for.
- **visible**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True to make the option visible to the player; false to hide it.

#### Remarks

The per-player visibility has lower priority than the global <xref href="SwiftlyS2.Shared.Menus.IMenuOption.Visible" data-throw-if-not-resolved="false"></xref> property.

### AfterFormat

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L242)

Occurs after HTML markup is assembled, allowing customization of the final HTML output.

```csharp
event EventHandler<MenuOptionFormattingEventArgs>? AfterFormat
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionFormattingEventArgs](/docs/api/menus/menuoptionformattingeventargs)>?

### BeforeFormat

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L237)

Occurs before HTML markup is assembled, allowing customization of the text content.

```csharp
event EventHandler<MenuOptionFormattingEventArgs>? BeforeFormat
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionFormattingEventArgs](/docs/api/menus/menuoptionformattingeventargs)>?

### Click

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L227)

Occurs when the option is clicked by a player.

```csharp
event AsyncEventHandler<MenuOptionClickEventArgs>? Click
```

#### Event Type

- [AsyncEventHandler](/docs/api/menus/asynceventhandlert)<[MenuOptionClickEventArgs](/docs/api/menus/menuoptionclickeventargs)>?

### EnabledChanged

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L212)

Occurs when the enabled state of the option changes.

```csharp
event EventHandler<MenuOptionEventArgs>? EnabledChanged
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionEventArgs](/docs/api/menus/menuoptioneventargs)>?

### TextChanged

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L217)

Occurs when the text of the option changes.

```csharp
event EventHandler<MenuOptionEventArgs>? TextChanged
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionEventArgs](/docs/api/menus/menuoptioneventargs)>?

### Validating

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L222)

Occurs before a <xref href="SwiftlyS2.Shared.Menus.IMenuOption.Click" data-throw-if-not-resolved="false"></xref> event is processed, allowing validation and cancellation.

```csharp
event EventHandler<MenuOptionValidatingEventArgs>? Validating
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionValidatingEventArgs](/docs/api/menus/menuoptionvalidatingeventargs)>?

### VisibilityChanged

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L207)

Occurs when the visibility of the option changes.

```csharp
event EventHandler<MenuOptionEventArgs>? VisibilityChanged
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionEventArgs](/docs/api/menus/menuoptioneventargs)>?

