---
title: CCSUsrMsg_ServerRankRevealAll
---

# Interface CCSUsrMsg_ServerRankRevealAll

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_ServerRankRevealAll.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSUsrMsg_ServerRankRevealAll : ITypedProtobuf<CCSUsrMsg_ServerRankRevealAll>, INativeHandle, INetMessage<CCSUsrMsg_ServerRankRevealAll>, IDisposable
```

#### Implements

- [ITypedProtobuf<CCSUsrMsg_ServerRankRevealAll>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CCSUsrMsg_ServerRankRevealAll>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Reservation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_ServerRankRevealAll.cs#L21)

```csharp
CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve Reservation { get; }
```

#### Property Value

- [CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve](/docs/api/protobufdefinitions/cmsggccstrike15_v2_matchmakinggc2serverreserve)

### SecondsTillShutdown

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_ServerRankRevealAll.cs#L18)

```csharp
int SecondsTillShutdown { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

