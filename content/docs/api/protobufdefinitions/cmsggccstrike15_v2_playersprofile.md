---
title: CMsgGCCStrike15_v2_PlayersProfile
---

# Interface CMsgGCCStrike15_v2_PlayersProfile

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_PlayersProfile.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgGCCStrike15_v2_PlayersProfile : ITypedProtobuf<CMsgGCCStrike15_v2_PlayersProfile>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgGCCStrike15_v2_PlayersProfile>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AccountProfiles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_PlayersProfile.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgGCCStrike15_v2_MatchmakingGC2ClientHello> AccountProfiles { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CMsgGCCStrike15_v2_MatchmakingGC2ClientHello](/docs/api/protobufdefinitions/cmsggccstrike15_v2_matchmakinggc2clienthello)>

### RequestId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_PlayersProfile.cs#L13)

```csharp
uint RequestId { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

