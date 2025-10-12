---
title: CMsgGCCStrike15_v2_PlayersProfile
---

```csharp
public interface CMsgGCCStrike15_v2_PlayersProfile : ITypedProtobuf<CMsgGCCStrike15_v2_PlayersProfile>, INativeHandle
```

#### Implements

## Properties

### AccountProfiles

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_PlayersProfile.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgGCCStrike15_v2_MatchmakingGC2ClientHello> AccountProfiles { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CMsgGCCStrike15_v2_MatchmakingGC2ClientHello](/docs/api/shared/protobufdefinitions/cmsggccstrike15_v2_matchmakinggc2clienthello)>

### RequestId

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_PlayersProfile.cs#L13)

```csharp
uint RequestId { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

