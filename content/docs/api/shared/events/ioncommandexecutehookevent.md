---
title: IOnCommandExecuteHookEvent
---

```csharp
public interface IOnCommandExecuteHookEvent
```

## Properties

### Command

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnCommandExecuteHookEvent.cs#L14)

```csharp
ref CCommand Command { get; }
```

#### Property Value

- [CCommand](/docs/api/shared/natives/ccommand)

### HookMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnCommandExecuteHookEvent.cs#L19)

```csharp
HookMode HookMode { get; }
```

#### Property Value

- [HookMode](/docs/api/shared/misc/hookmode)

