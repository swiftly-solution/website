---
title: IGameEventService.GameEventHandler<T>
---

```csharp
public delegate HookResult IGameEventService.GameEventHandler<T>(T eventObj) where T : IGameEvent<T>
```

#### Parameters

- **eventObj**: T - The event object.

#### Returns

- [HookResult](/docs/api/shared/misc/hookresult) - The hook result.

#### Type Parameters

- **T**:  - The event type.

