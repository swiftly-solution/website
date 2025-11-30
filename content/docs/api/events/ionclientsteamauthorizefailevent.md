---
title: IOnClientSteamAuthorizeFailEvent
---

# Interface IOnClientSteamAuthorizeFailEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnClientSteamAuthorizeFailEvent.cs#L6)

**Namespace**: [SwiftlyS2.Shared.Events](/docs/api/events)

**Assembly**: SwiftlyS2.CS2.dll

Called when a client's Steam authorization fails.

```csharp
public interface IOnClientSteamAuthorizeFailEvent
```

## Properties

### PlayerId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnClientSteamAuthorizeFailEvent.cs#L11)

The player ID of the client that failed to authorize.

```csharp
int PlayerId { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

