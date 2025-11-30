---
title: IOnCommandExecuteHookEvent
---

# Interface IOnCommandExecuteHookEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnCommandExecuteHookEvent.cs#L9)

**Namespace**: [SwiftlyS2.Shared.Events](/docs/api/events)

**Assembly**: SwiftlyS2.CS2.dll

Called when a command is executed.

```csharp
public interface IOnCommandExecuteHookEvent
```

## Properties

### Command

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnCommandExecuteHookEvent.cs#L14)

The command.

```csharp
ref CCommand Command { get; }
```

#### Property Value

- [CCommand](/docs/api/natives/ccommand)

### HookMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnCommandExecuteHookEvent.cs#L19)

The hook mode.

```csharp
HookMode HookMode { get; }
```

#### Property Value

- [HookMode](/docs/api/misc/hookmode)

