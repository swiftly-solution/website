---
title: ISteamMatchmakingServerListResponse
---

```csharp
public class ISteamMatchmakingServerListResponse
```

#### Inheritance

#### Inherited Members

## Constructors

### ISteamMatchmakingServerListResponse(ServerResponded, ServerFailedToRespond, RefreshComplete)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/ISteamMatchmakingResponses.cs#L43)

```csharp
public ISteamMatchmakingServerListResponse(ISteamMatchmakingServerListResponse.ServerResponded onServerResponded, ISteamMatchmakingServerListResponse.ServerFailedToRespond onServerFailedToRespond, ISteamMatchmakingServerListResponse.RefreshComplete onRefreshComplete)
```

#### Parameters

- **onServerResponded**: [ISteamMatchmakingServerListResponse](/docs/api/shared/steamapi/isteammatchmakingserverlistresponse).[ServerResponded](/docs/api/shared/steamapi/isteammatchmakingserverlistresponse/serverresponded)
- **onServerFailedToRespond**: [ISteamMatchmakingServerListResponse](/docs/api/shared/steamapi/isteammatchmakingserverlistresponse).[ServerFailedToRespond](/docs/api/shared/steamapi/isteammatchmakingserverlistresponse/serverfailedtorespond)
- **onRefreshComplete**: [ISteamMatchmakingServerListResponse](/docs/api/shared/steamapi/isteammatchmakingserverlistresponse).[RefreshComplete](/docs/api/shared/steamapi/isteammatchmakingserverlistresponse/refreshcomplete)

## Methods

### ~ISteamMatchmakingServerListResponse()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/ISteamMatchmakingResponses.cs#L68)

```csharp
protected ~ISteamMatchmakingServerListResponse()
```

## Operators

### explicit operator nint(ISteamMatchmakingServerListResponse)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/ISteamMatchmakingResponses.cs#L139)

```csharp
public static explicit operator nint(ISteamMatchmakingServerListResponse that)
```

#### Parameters

- **that**: [ISteamMatchmakingServerListResponse](/docs/api/shared/steamapi/isteammatchmakingserverlistresponse)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

