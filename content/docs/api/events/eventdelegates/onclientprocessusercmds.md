---
title: EventDelegates.OnClientProcessUsercmds
---

# Delegate EventDelegates.OnClientProcessUsercmds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventDelegates.cs#L90)

**Namespace**: [SwiftlyS2.Shared.Events](/docs/api/events)

**Assembly**: SwiftlyS2.CS2.dll

Called when a client processes user commands.
This callback is a hot path, be careful with it and don't do anything expensive.

```csharp
public delegate void EventDelegates.OnClientProcessUsercmds(IOnClientProcessUsercmdsEvent @event)
```

#### Parameters

- **event**: [IOnClientProcessUsercmdsEvent](/docs/api/events/ionclientprocessusercmdsevent)

