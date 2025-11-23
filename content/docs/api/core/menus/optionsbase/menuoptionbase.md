---
title: MenuOptionBase
---

```csharp
public abstract class MenuOptionBase : IMenuOption, IDisposable
```

#### Inheritance

#### Derived

#### Implements

#### Inherited Members

## Constructors

### MenuOptionBase()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L34)

```csharp
protected MenuOptionBase()
```

#### Remarks

### MenuOptionBase(int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L49)

```csharp
protected MenuOptionBase(int updateIntervalMs, int pauseIntervalMs)
```

#### Parameters

- **updateIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The interval in milliseconds between text updates.
- **pauseIntervalMs**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The pause duration in milliseconds before starting the next text update cycle.

#### Remarks

## Properties

### CloseAfterClick

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L205)

```csharp
public bool CloseAfterClick { get; init; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Enabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L189)

```csharp
public bool Enabled { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

### LineCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L120)

```csharp
public virtual int LineCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MaxWidth

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L146)

```csharp
public float MaxWidth { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Menu

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L115)

```csharp
public IMenuAPI? Menu { get; }
```

#### Property Value

- [IMenuAPI](/docs/api/shared/menus/imenuapi)?

#### Remarks

### PlaySound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L236)

```csharp
public bool PlaySound { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Tag

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L210)

```csharp
public object? Tag { get; set; }
```

#### Property Value

- [object](https://learn.microsoft.com/dotnet/api/system.object)?

### Text

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L128)

```csharp
public string Text { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

### TextSize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L215)

```csharp
public MenuOptionTextSize TextSize { get; set; }
```

#### Property Value

- [MenuOptionTextSize](/docs/api/shared/menus/menuoptiontextsize)

### TextStyle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L220)

```csharp
public MenuOptionTextStyle TextStyle { get; set; }
```

#### Property Value

- [MenuOptionTextStyle](/docs/api/shared/menus/menuoptiontextstyle)

### Visible

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L170)

```csharp
public bool Visible { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

## Methods

### Dispose()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L78)

```csharp
public virtual void Dispose()
```

### ~MenuOptionBase()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L73)

```csharp
protected ~MenuOptionBase()
```

### GetDisplayText(IPlayer, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L375)

```csharp
public virtual string GetDisplayText(IPlayer player, int displayLine = 0)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player requesting the display text.
- **displayLine**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The display line index of the option.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The formatted display text for the option.

#### Remarks

### GetEnabled(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L307)

```csharp
public virtual bool GetEnabled(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to check enabled state for.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the option is enabled for the player; otherwise, false.

### GetVisible(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L290)

```csharp
public virtual bool GetVisible(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to check visibility for.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the option is visible to the player; otherwise, false.

### IsClickTaskCompleted(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L283)

```csharp
public virtual bool IsClickTaskCompleted(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to check.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the click task is completed; otherwise, false.

### OnClickAsync(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L478)

```csharp
public virtual ValueTask OnClickAsync(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player who clicked the option.

#### Returns

- [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) - A task that represents the asynchronous operation.

### OnValidatingAsync(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L426)

```csharp
public virtual ValueTask<bool> OnValidatingAsync(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to validate.

#### Returns

- [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)> - A task that represents the asynchronous operation. The task result is true if validation succeeds; otherwise, false.

### PauseTextAnimation()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L95)

```csharp
public void PauseTextAnimation()
```

### ResumeTextAnimation()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L103)

```csharp
public void ResumeTextAnimation()
```

### SetEnabled(IPlayer, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L317)

```csharp
public virtual void SetEnabled(IPlayer player, bool enabled)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to set enabled state for.
- **enabled**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True to enable the option for the player; false to disable it.

#### Remarks

### SetVisible(IPlayer, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L300)

```csharp
public virtual void SetVisible(IPlayer player, bool visible)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to set visibility for.
- **visible**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True to make the option visible to the player; false to hide it.

#### Remarks

### AfterFormat

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L276)

```csharp
public event EventHandler<MenuOptionFormattingEventArgs>? AfterFormat
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionFormattingEventArgs](/docs/api/shared/menus/menuoptionformattingeventargs)>?

### BeforeFormat

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L271)

```csharp
public event EventHandler<MenuOptionFormattingEventArgs>? BeforeFormat
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionFormattingEventArgs](/docs/api/shared/menus/menuoptionformattingeventargs)>?

### Click

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L261)

```csharp
public event AsyncEventHandler<MenuOptionClickEventArgs>? Click
```

#### Event Type

- [AsyncEventHandler](/docs/api/shared/menus/asynceventhandler-1)<[MenuOptionClickEventArgs](/docs/api/shared/menus/menuoptionclickeventargs)>?

### EnabledChanged

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L246)

```csharp
public event EventHandler<MenuOptionEventArgs>? EnabledChanged
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionEventArgs](/docs/api/shared/menus/menuoptioneventargs)>?

### TextChanged

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L251)

```csharp
public event EventHandler<MenuOptionEventArgs>? TextChanged
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionEventArgs](/docs/api/shared/menus/menuoptioneventargs)>?

### Validating

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L256)

```csharp
public event EventHandler<MenuOptionValidatingEventArgs>? Validating
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionValidatingEventArgs](/docs/api/shared/menus/menuoptionvalidatingeventargs)>?

### VisibilityChanged

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L241)

```csharp
public event EventHandler<MenuOptionEventArgs>? VisibilityChanged
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionEventArgs](/docs/api/shared/menus/menuoptioneventargs)>?

