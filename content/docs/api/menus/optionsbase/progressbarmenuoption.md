---
title: ProgressBarMenuOption
---

# Class ProgressBarMenuOption

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ProgressBarMenuOption.cs#L9)

**Namespace**: [SwiftlyS2.Core.Menus.OptionsBase](/docs/api/menus/optionsbase)

**Assembly**: SwiftlyS2.CS2.dll

Represents a progress bar menu option that displays progress visually.

```csharp
public sealed class ProgressBarMenuOption : MenuOptionBase, IMenuOption, IDisposable
```

#### Inheritance

- [object](https://learn.microsoft.com/dotnet/api/system.object)
- [MenuOptionBase](/docs/api/menus/optionsbase/menuoptionbase)
- [ProgressBarMenuOption](/docs/api/menus/optionsbase/progressbarmenuoption)

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

### ProgressBarMenuOption(Func, bool, bool, string, string, int, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ProgressBarMenuOption.cs#L42)

Creates an instance of <xref href="SwiftlyS2.Core.Menus.OptionsBase.ProgressBarMenuOption" data-throw-if-not-resolved="false"></xref>.

```csharp
public ProgressBarMenuOption(Func<float> progressProvider, bool multiLine = false, bool showPercentage = true, string filledChar = "█", string emptyChar = "░", int updateIntervalMs = 120, int pauseIntervalMs = 1000)
```

#### Parameters

- **progressProvider**: [Func](https://learn.microsoft.com/dotnet/api/system.func-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)> - Function that returns progress value (0.0 to 1.0).
- **multiLine**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - If true, uses 2 lines; if false, uses 1 line. Defaults to false.
- **showPercentage**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Whether to show percentage text. Defaults to true.
- **filledChar**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Character for filled portion. Defaults to "█".
- **emptyChar**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Character for empty portion. Defaults to "░".
- **updateIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The interval in milliseconds between text updates. Defaults to 120ms.
- **pauseIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The pause duration in milliseconds before starting the next text update cycle. Defaults to 1000ms.

#### Remarks

When using this constructor, the <xref href="SwiftlyS2.Core.Menus.OptionsBase.MenuOptionBase.Text" data-throw-if-not-resolved="false"></xref> property must be manually set to specify the initial text.

### ProgressBarMenuOption(string, Func, bool, bool, string, string, int, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ProgressBarMenuOption.cs#L73)

Creates an instance of <xref href="SwiftlyS2.Core.Menus.OptionsBase.ProgressBarMenuOption" data-throw-if-not-resolved="false"></xref>.

```csharp
public ProgressBarMenuOption(string text, Func<float> progressProvider, bool multiLine = false, bool showPercentage = true, string filledChar = "█", string emptyChar = "░", int updateIntervalMs = 120, int pauseIntervalMs = 1000)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text content to display.
- **progressProvider**: [Func](https://learn.microsoft.com/dotnet/api/system.func-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)> - Function that returns progress value (0.0 to 1.0).
- **multiLine**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - If true, uses 2 lines; if false, uses 1 line. Defaults to false.
- **showPercentage**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Whether to show percentage text. Defaults to true.
- **filledChar**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Character for filled portion. Defaults to "█".
- **emptyChar**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Character for empty portion. Defaults to "░".
- **updateIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The interval in milliseconds between text updates. Defaults to 120ms.
- **pauseIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The pause duration in milliseconds before starting the next text update cycle. Defaults to 1000ms.

## Properties

### BarWidth

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ProgressBarMenuOption.cs#L20)

Gets the width of the progress bar in characters.

```csharp
public int BarWidth { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LineCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ProgressBarMenuOption.cs#L27)

Gets the number of lines this option requests to occupy in the menu.

```csharp
public override int LineCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ShowPercentage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ProgressBarMenuOption.cs#L25)

Gets whether to display the percentage value.

```csharp
public bool ShowPercentage { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### GetDisplayText(IPlayer, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ProgressBarMenuOption.cs#L86)

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

### GetProgress(IPlayer)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ProgressBarMenuOption.cs#L124)

Gets the current progress value for the specified player.

```csharp
public float GetProgress(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player whose progress to retrieve.

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single) - The current progress value (0.0 to 1.0).

### SetProgressProvider(IPlayer, Func)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/ProgressBarMenuOption.cs#L114)

Sets or updates the progress provider function for a specific player.

```csharp
public void SetProgressProvider(IPlayer player, Func<float> progressProvider)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player whose progress provider to set.
- **progressProvider**: [Func](https://learn.microsoft.com/dotnet/api/system.func-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)> - Function that returns progress value (0.0 to 1.0).

