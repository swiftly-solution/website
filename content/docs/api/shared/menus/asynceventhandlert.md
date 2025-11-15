---
title: AsyncEventHandler
---

```csharp
public delegate ValueTask AsyncEventHandler<TEventArgs>(object? sender, TEventArgs args) where TEventArgs : EventArgs
```

#### Parameters

- **sender**: [object](https://learn.microsoft.com/dotnet/api/system.object)? - The source of the event.
- **args**: TEventArgs - Event data.

#### Returns

- [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask) - A task that represents the asynchronous operation.

#### Type Parameters

- **TEventArgs**:  - The type of event arguments.

