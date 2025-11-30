---
title: IGameEventService.GameEventHandler
---

# Delegate IGameEventService.GameEventHandler

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventService.cs#L16)

**Namespace**: [SwiftlyS2.Shared.GameEvents](/docs/api/gameevents)

**Assembly**: SwiftlyS2.CS2.dll

The delegate type for game event callbacks.

```csharp
public delegate HookResult IGameEventService.GameEventHandler<T>(T eventObj) where T : IGameEvent<T>
```

#### Parameters

- **eventObj**: T - The event object.

#### Returns

- [HookResult](/docs/api/misc/hookresult) - The hook result.

#### Type Parameters

- **T**:  - The event type.

