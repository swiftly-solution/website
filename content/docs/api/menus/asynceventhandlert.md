---
title: AsyncEventHandler
---

# Delegate AsyncEventHandler

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Menus/IMenuOption.cs#L12)

**Namespace**: [SwiftlyS2.Shared.Menus](/docs/api/menus)

**Assembly**: SwiftlyS2.CS2.dll

Represents an asynchronous event handler that returns a ValueTask.

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

