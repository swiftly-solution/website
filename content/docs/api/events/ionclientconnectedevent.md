---
title: IOnClientConnectedEvent
---

# Interface IOnClientConnectedEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnClientConnectedEvent.cs#L8)

**Namespace**: [SwiftlyS2.Shared.Events](/docs/api/events)

**Assembly**: SwiftlyS2.CS2.dll

Called when a client connects to the server.

```csharp
public interface IOnClientConnectedEvent
```

## Properties

### PlayerId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnClientConnectedEvent.cs#L13)

The player ID of the client that connected.

```csharp
int PlayerId { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Result

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnClientConnectedEvent.cs#L19)

The result of the event.
Set this to <xref href="SwiftlyS2.Shared.Misc.HookResult.Stop" data-throw-if-not-resolved="false"></xref> to prevent player from joining in.

```csharp
HookResult Result { get; set; }
```

#### Property Value

- [HookResult](/docs/api/misc/hookresult)

