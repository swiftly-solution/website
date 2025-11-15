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

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L189)

```csharp
public bool CloseAfterClick { get; init; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Enabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L173)

```csharp
public bool Enabled { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

### LineCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L104)

```csharp
public virtual int LineCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MaxWidth

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L130)

```csharp
public float MaxWidth { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Menu

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L99)

```csharp
public IMenuAPI? Menu { get; }
```

#### Property Value

- [IMenuAPI](/docs/api/shared/menus/imenuapi)?

#### Remarks

### PlaySound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L220)

```csharp
public bool PlaySound { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Tag

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L194)

```csharp
public object? Tag { get; set; }
```

#### Property Value

- [object](https://learn.microsoft.com/dotnet/api/system.object)?

### Text

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L112)

```csharp
public string Text { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

### TextSize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L199)

```csharp
public MenuOptionTextSize TextSize { get; set; }
```

#### Property Value

- [MenuOptionTextSize](/docs/api/shared/menus/menuoptiontextsize)

### TextStyle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L204)

```csharp
public MenuOptionTextStyle TextStyle { get; set; }
```

#### Property Value

- [MenuOptionTextStyle](/docs/api/shared/menus/menuoptiontextstyle)

### Visible

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L154)

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

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L359)

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

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L291)

```csharp
public virtual bool GetEnabled(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to check enabled state for.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the option is enabled for the player; otherwise, false.

### GetVisible(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L274)

```csharp
public virtual bool GetVisible(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to check visibility for.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the option is visible to the player; otherwise, false.

### IsClickTaskCompleted(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L267)

```csharp
public virtual bool IsClickTaskCompleted(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to check.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the click task is completed; otherwise, false.

### OnClickAsync(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L462)

```csharp
public virtual ValueTask OnClickAsync(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player who clicked the option.

#### Returns

- [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) - A task that represents the asynchronous operation.

### OnValidatingAsync(IPlayer)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L410)

```csharp
public virtual ValueTask<bool> OnValidatingAsync(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to validate.

#### Returns

- [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)> - A task that represents the asynchronous operation. The task result is true if validation succeeds; otherwise, false.

### SetEnabled(IPlayer, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L301)

```csharp
public virtual void SetEnabled(IPlayer player, bool enabled)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to set enabled state for.
- **enabled**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True to enable the option for the player; false to disable it.

#### Remarks

### SetVisible(IPlayer, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L284)

```csharp
public virtual void SetVisible(IPlayer player, bool visible)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer) - The player to set visibility for.
- **visible**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True to make the option visible to the player; false to hide it.

#### Remarks

### AfterFormat

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L260)

```csharp
public event EventHandler<MenuOptionFormattingEventArgs>? AfterFormat
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionFormattingEventArgs](/docs/api/shared/menus/menuoptionformattingeventargs)>?

### BeforeFormat

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L255)

```csharp
public event EventHandler<MenuOptionFormattingEventArgs>? BeforeFormat
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionFormattingEventArgs](/docs/api/shared/menus/menuoptionformattingeventargs)>?

### Click

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L245)

```csharp
public event AsyncEventHandler<MenuOptionClickEventArgs>? Click
```

#### Event Type

- [AsyncEventHandler](/docs/api/shared/menus/asynceventhandler-1)<[MenuOptionClickEventArgs](/docs/api/shared/menus/menuoptionclickeventargs)>?

### EnabledChanged

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L230)

```csharp
public event EventHandler<MenuOptionEventArgs>? EnabledChanged
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionEventArgs](/docs/api/shared/menus/menuoptioneventargs)>?

### TextChanged

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L235)

```csharp
public event EventHandler<MenuOptionEventArgs>? TextChanged
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionEventArgs](/docs/api/shared/menus/menuoptioneventargs)>?

### Validating

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L240)

```csharp
public event EventHandler<MenuOptionValidatingEventArgs>? Validating
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionValidatingEventArgs](/docs/api/shared/menus/menuoptionvalidatingeventargs)>?

### VisibilityChanged

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Menus/OptionsBase/MenuOptionBase.cs#L225)

```csharp
public event EventHandler<MenuOptionEventArgs>? VisibilityChanged
```

#### Event Type

- [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler-1)<[MenuOptionEventArgs](/docs/api/shared/menus/menuoptioneventargs)>?

