---
title: IOnClientSteamAuthorizeEvent
---

# Interface IOnClientSteamAuthorizeEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnClientSteamAuthorizeEvent.cs#L6)

**Namespace**: [SwiftlyS2.Shared.Events](/docs/api/events)

**Assembly**: SwiftlyS2.CS2.dll

Called when a client is authorized via Steam.

```csharp
public interface IOnClientSteamAuthorizeEvent
```

## Properties

### PlayerId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnClientSteamAuthorizeEvent.cs#L11)

The player ID of the client that was authorized.

```csharp
int PlayerId { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

