---
title: Class ISteamMatchmakingPlayersResponse
---

```csharp
public class ISteamMatchmakingPlayersResponse
```

#### Inheritance

#### Inherited Members

## Constructors

### ISteamMatchmakingPlayersResponse(AddPlayerToList, PlayersFailedToRespond, PlayersRefreshComplete)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/ISteamMatchmakingResponses.cs#L273)

```csharp
public ISteamMatchmakingPlayersResponse(ISteamMatchmakingPlayersResponse.AddPlayerToList onAddPlayerToList, ISteamMatchmakingPlayersResponse.PlayersFailedToRespond onPlayersFailedToRespond, ISteamMatchmakingPlayersResponse.PlayersRefreshComplete onPlayersRefreshComplete)
```

#### Parameters

- **onAddPlayerToList**: [ISteamMatchmakingPlayersResponse](/docs/api/shared/steamapi/isteammatchmakingplayersresponse).[AddPlayerToList](/docs/api/shared/steamapi/isteammatchmakingplayersresponse/addplayertolist)
- **onPlayersFailedToRespond**: [ISteamMatchmakingPlayersResponse](/docs/api/shared/steamapi/isteammatchmakingplayersresponse).[PlayersFailedToRespond](/docs/api/shared/steamapi/isteammatchmakingplayersresponse/playersfailedtorespond)
- **onPlayersRefreshComplete**: [ISteamMatchmakingPlayersResponse](/docs/api/shared/steamapi/isteammatchmakingplayersresponse).[PlayersRefreshComplete](/docs/api/shared/steamapi/isteammatchmakingplayersresponse/playersrefreshcomplete)

## Methods

### ~ISteamMatchmakingPlayersResponse()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/ISteamMatchmakingResponses.cs#L298)

```csharp
protected ~ISteamMatchmakingPlayersResponse()
```

## Operators

### explicit operator nint(ISteamMatchmakingPlayersResponse)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/SteamAPI/ISteamMatchmakingResponses.cs#L350)

```csharp
public static explicit operator nint(ISteamMatchmakingPlayersResponse that)
```

#### Parameters

- **that**: [ISteamMatchmakingPlayersResponse](/docs/api/shared/steamapi/isteammatchmakingplayersresponse)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

