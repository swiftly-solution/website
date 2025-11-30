---
title: Class ISteamMatchmakingServerListResponse
---

# Class ISteamMatchmakingServerListResponse

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/ISteamMatchmakingResponses.cs#L26)

**Namespace**: [SwiftlyS2.Shared.SteamAPI](/docs/api/steamapi)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public class ISteamMatchmakingServerListResponse
```

#### Inheritance

- [object](https://learn.microsoft.com/dotnet/api/system.object)
- [ISteamMatchmakingServerListResponse](/docs/api/steamapi/isteammatchmakingserverlistresponse)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ISteamMatchmakingServerListResponse(ServerResponded, ServerFailedToRespond, RefreshComplete)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/ISteamMatchmakingResponses.cs#L43)

```csharp
public ISteamMatchmakingServerListResponse(ISteamMatchmakingServerListResponse.ServerResponded onServerResponded, ISteamMatchmakingServerListResponse.ServerFailedToRespond onServerFailedToRespond, ISteamMatchmakingServerListResponse.RefreshComplete onRefreshComplete)
```

#### Parameters

- **onServerResponded**: [ISteamMatchmakingServerListResponse](/docs/api/steamapi/isteammatchmakingserverlistresponse).[ServerResponded](/docs/api/steamapi/isteammatchmakingserverlistresponse/serverresponded)
- **onServerFailedToRespond**: [ISteamMatchmakingServerListResponse](/docs/api/steamapi/isteammatchmakingserverlistresponse).[ServerFailedToRespond](/docs/api/steamapi/isteammatchmakingserverlistresponse/serverfailedtorespond)
- **onRefreshComplete**: [ISteamMatchmakingServerListResponse](/docs/api/steamapi/isteammatchmakingserverlistresponse).[RefreshComplete](/docs/api/steamapi/isteammatchmakingserverlistresponse/refreshcomplete)

## Methods

### ~ISteamMatchmakingServerListResponse()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/ISteamMatchmakingResponses.cs#L68)

```csharp
protected ~ISteamMatchmakingServerListResponse()
```

## Operators

### explicit operator nint(ISteamMatchmakingServerListResponse)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/ISteamMatchmakingResponses.cs#L139)

```csharp
public static explicit operator nint(ISteamMatchmakingServerListResponse that)
```

#### Parameters

- **that**: [ISteamMatchmakingServerListResponse](/docs/api/steamapi/isteammatchmakingserverlistresponse)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

