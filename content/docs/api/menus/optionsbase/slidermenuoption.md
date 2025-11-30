---
title: SliderMenuOption
---

# Class SliderMenuOption

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/SliderMenuOption.cs#L10)

**Namespace**: [SwiftlyS2.Core.Menus.OptionsBase](/docs/api/menus/optionsbase)

**Assembly**: SwiftlyS2.CS2.dll

Represents a slider menu option that allows selecting a numeric value within a range.

```csharp
public sealed class SliderMenuOption : MenuOptionBase, IMenuOption, IDisposable
```

#### Inheritance

- [object](https://learn.microsoft.com/dotnet/api/system.object)
- [MenuOptionBase](/docs/api/menus/optionsbase/menuoptionbase)
- [SliderMenuOption](/docs/api/menus/optionsbase/slidermenuoption)

#### Implements

- [IMenuOption](/docs/api/menus/imenuoption)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

- [MenuOptionBase.Dispose()](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_Dispose)
- [MenuOptionBase.PauseTextAnimation()](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_PauseTextAnimation)
- [MenuOptionBase.ResumeTextAnimation()](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_ResumeTextAnimation)
- [MenuOptionBase.Menu](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_Menu)
- [MenuOptionBase.LineCount](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_LineCount)
- [MenuOptionBase.Text](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_Text)
- [MenuOptionBase.MaxWidth](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_MaxWidth)
- [MenuOptionBase.Visible](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_Visible)
- [MenuOptionBase.Enabled](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_Enabled)
- [MenuOptionBase.CloseAfterClick](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_CloseAfterClick)
- [MenuOptionBase.Tag](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_Tag)
- [MenuOptionBase.TextSize](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_TextSize)
- [MenuOptionBase.TextStyle](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_TextStyle)
- [MenuOptionBase.PlaySound](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_PlaySound)
- [MenuOptionBase.VisibilityChanged](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_VisibilityChanged)
- [MenuOptionBase.EnabledChanged](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_EnabledChanged)
- [MenuOptionBase.TextChanged](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_TextChanged)
- [MenuOptionBase.Validating](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_Validating)
- [MenuOptionBase.Click](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_Click)
- [MenuOptionBase.BeforeFormat](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_BeforeFormat)
- [MenuOptionBase.AfterFormat](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_AfterFormat)
- [MenuOptionBase.IsClickTaskCompleted(IPlayer)](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_IsClickTaskCompleted_SwiftlyS2_Shared_Players_IPlayer_)
- [MenuOptionBase.GetVisible(IPlayer)](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_GetVisible_SwiftlyS2_Shared_Players_IPlayer_)
- [MenuOptionBase.SetVisible(IPlayer, bool)](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_SetVisible_SwiftlyS2_Shared_Players_IPlayer_System_Boolean_)
- [MenuOptionBase.GetEnabled(IPlayer)](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_GetEnabled_SwiftlyS2_Shared_Players_IPlayer_)
- [MenuOptionBase.SetEnabled(IPlayer, bool)](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_SetEnabled_SwiftlyS2_Shared_Players_IPlayer_System_Boolean_)
- [MenuOptionBase.GetDisplayText(IPlayer, int)](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_GetDisplayText_SwiftlyS2_Shared_Players_IPlayer_System_Int32_)
- [MenuOptionBase.OnValidatingAsync(IPlayer)](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_OnValidatingAsync_SwiftlyS2_Shared_Players_IPlayer_)
- [MenuOptionBase.OnClickAsync(IPlayer)](SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.html#SwiftlyS2_Core_Menus_OptionsBase_MenuOptionBase_OnClickAsync_SwiftlyS2_Shared_Players_IPlayer_)
- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### SliderMenuOption(float, float, float?, float, int, int, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/SliderMenuOption.cs#L49)

Creates an instance of <xref href="SwiftlyS2.Core.Menus.OptionsBase.SliderMenuOption" data-throw-if-not-resolved="false"></xref>.

```csharp
public SliderMenuOption(float min = 0, float max = 100, float? defaultValue = null, float step = 5, int totalBars = 10, int updateIntervalMs = 120, int pauseIntervalMs = 1000)
```

#### Parameters

- **min**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The minimum value. Defaults to 0.
- **max**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The maximum value. Defaults to 100.
- **defaultValue**: [float](https://learn.microsoft.com/dotnet/api/system.single)? - The default starting value. Defaults to the minimum value.
- **step**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The increment/decrement step. Defaults to 5.
- **totalBars**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The number of visual bars to display. Defaults to 10.
- **updateIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The interval in milliseconds between text updates. Defaults to 120ms.
- **pauseIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The pause duration in milliseconds before starting the next text update cycle. Defaults to 1000ms.

#### Remarks

When using this constructor, the <xref href="SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.Text" data-throw-if-not-resolved="false"></xref> property must be manually set to specify the initial text.

### SliderMenuOption(string, float, float, float?, float, int, int, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/SliderMenuOption.cs#L98)

Creates an instance of <xref href="SwiftlyS2.Core.Menus.OptionsBase.SliderMenuOption" data-throw-if-not-resolved="false"></xref>.

```csharp
public SliderMenuOption(string text, float min = 0, float max = 100, float? defaultValue = null, float step = 5, int totalBars = 10, int updateIntervalMs = 120, int pauseIntervalMs = 1000)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text content to display.
- **min**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The minimum value. Defaults to 0.
- **max**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The maximum value. Defaults to 100.
- **defaultValue**: [float](https://learn.microsoft.com/dotnet/api/system.single)? - The default starting value. Defaults to the minimum value.
- **step**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The increment/decrement step. Defaults to 5.
- **totalBars**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The number of visual bars to display. Defaults to 10.
- **updateIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The interval in milliseconds between text updates. Defaults to 120ms.
- **pauseIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The pause duration in milliseconds before starting the next text update cycle. Defaults to 1000ms.

## Properties

### Max

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/SliderMenuOption.cs#L24)

Gets the maximum value of the slider.

```csharp
public float Max { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Min

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/SliderMenuOption.cs#L19)

Gets the minimum value of the slider.

```csharp
public float Min { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Step

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/SliderMenuOption.cs#L29)

Gets the step increment/decrement value.

```csharp
public float Step { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### GetDisplayText(IPlayer, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/SliderMenuOption.cs#L111)

Gets the display text for this option as it should appear to the specified player.

```csharp
public override string GetDisplayText(IPlayer player, int displayLine = 0)
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

### GetValue(IPlayer)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/SliderMenuOption.cs#L132)

Gets the current slider value for the specified player.

```csharp
public float GetValue(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player whose value to retrieve.

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single) - The current slider value.

### SetValue(IPlayer, float)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/SliderMenuOption.cs#L142)

Sets the slider value for the specified player.

```csharp
public void SetValue(IPlayer player, float value)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player whose value to set.
- **value**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The value to set. Will be clamped between Min and Max.

### ValueChanged

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/SliderMenuOption.cs#L34)

Occurs when the slider value changes for a player.

```csharp
public event EventHandler<MenuOptionValueChangedEventArgs<float>>? ValueChanged
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionValueChangedEventArgs](/docs/api/menus/menuoptionvaluechangedeventargst)<[float](https://learn.microsoft.com/dotnet/api/system.single)>>?

