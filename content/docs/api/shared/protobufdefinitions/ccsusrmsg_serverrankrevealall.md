---
title: CCSUsrMsg_ServerRankRevealAll
---

```csharp
public interface CCSUsrMsg_ServerRankRevealAll : ITypedProtobuf<CCSUsrMsg_ServerRankRevealAll>, INativeHandle, INetMessage<CCSUsrMsg_ServerRankRevealAll>, IDisposable
```

- Implements

## Properties

### **Reservation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_ServerRankRevealAll.cs#L21)

```csharp
CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve Reservation { get; }
```

- Property Value

- [CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve](/docs/api/shared/protobufdefinitions/cmsggccstrike15_v2_matchmakinggc2serverreserve)

### **SecondsTillShutdown** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_ServerRankRevealAll.cs#L18)

```csharp
int SecondsTillShutdown { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

